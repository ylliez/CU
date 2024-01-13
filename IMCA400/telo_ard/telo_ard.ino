#include <Arduino.h>
#include <SPI.h>
#include "Adafruit_BLE.h"
#include "Adafruit_BluefruitLE_SPI.h"
#include "Adafruit_BluefruitLE_UART.h"

/*=========================================================================
  APPLICATION SETTINGS
  
  FACTORYRESET_ENABLE       Perform a factory reset when running this sketch
     
                            Enabling this will put your Bluefruit LE module
                            in a 'known good' state and clear any config
                            data set in previous sketches or projects, so
                            running this at least once is a good idea.
     
                            When deploying your project, however, you will
                            want to disable factory reset by setting this
                            value to 0.  If you are making changes to your
                                Bluefruit LE device via AT commands, and those
                            changes aren't persisting across resets, this
                            is the reason why.  Factory reset will erase
                            the non-volatile memory where config data is
                            stored, setting it back to factory default
                            values.
         
                            Some sketches that require you to bond to a
                            central device (HID mouse, keyboard, etc.)
                            won't work at all with this feature enabled
                            since the factory reset will clear all of the
                            bonding data stored on the chip, meaning the
                            central device won't be able to reconnect.
                            
  MINIMUM_FIRMWARE_VERSION  Minimum firmware version to have some new features
  
  MODE_LED_BEHAVIOUR        LED activity, valid options are "DISABLE","MODE",
                            "BLEUART","HWUART","SPI" or "MANUAL"
                            
  SHARED SPI SETTINGS       The following macros declare the pins to use for
                            HW and SW SPI communication. SCK, MISO and MOSI 
                            should be connected to the HW SPI pins on the Uno 
                            when using HW SPI.  This should be used with 
                            nRF51822-based Bluefruit LE modules that use SPI 
                            (Bluefruit LE SPI Friend).                   
-----------------------------------------------------------------------*/
  #define FACTORYRESET_ENABLE         1
  #define MINIMUM_FIRMWARE_VERSION    "0.6.6"
  #define MODE_LED_BEHAVIOUR          "MODE"
  #define BUFSIZE                     128
  #define VERBOSE_MODE                true
  #define BLUEFRUIT_SPI_CS            8
  #define BLUEFRUIT_SPI_IRQ           7
  #define BLUEFRUIT_SPI_RST           4
/*=========================================================================*/

Adafruit_BluefruitLE_SPI ble(BLUEFRUIT_SPI_CS, BLUEFRUIT_SPI_IRQ, BLUEFRUIT_SPI_RST);

void error(const __FlashStringHelper*err) {
  Serial.println(err);
  while (1);
}

void setup(void) {
  pinMode(5,OUTPUT);
//  while (!Serial);
  delay(500);

  Serial.begin(9600);
  Serial.println(F("TELOMATIC"));
  Serial.println(F("----------------"));

  Serial.print(F("Initialising BLE: "));
  if (!ble.begin(VERBOSE_MODE)) { error(F("Couldn't find Bluefruit, make sure it's in CoMmanD mode & check wiring?")); }
  Serial.println( F("OK!") );

  if (FACTORYRESET_ENABLE) {
    Serial.println(F("Performing a factory reset: "));
    Serial.println(F("----------------"));
    if (!ble.factoryReset()) { error(F("Couldn't factory reset")); }
  }
  
  ble.echo(false);
  Serial.println(F("----------------"));

  Serial.println(F("Requesting Telomatic info:"));
  ble.info();
  ble.verbose(false);

  ble.println("AT+GAPDEVNAME=Telomatic");
  
  Serial.print(F("Connect to Telomatic: "));
  while (!ble.isConnected()) { delay(500); }
  Serial.println(F("OK!"));
  ble.sendCommandCheckOK("AT+HWModeLED=" MODE_LED_BEHAVIOUR);
  Serial.println(F("----------------"));
}

void loop(void) {
  char inputs[BUFSIZE+1];
  if ( getUserInput(inputs, BUFSIZE) ) {
    // Send characters to Bluefruit
    Serial.print("[Send] ");
    Serial.println(inputs);

    ble.print("AT+BLEUARTTX=");
    ble.println(inputs);

    // check response stastus
    if (! ble.waitForOK() ) {
      Serial.println(F("Failed to send?"));
    }
  }

  // Check for incoming characters from Bluefruit
  ble.println("AT+BLEUARTRX");
  ble.readline();
  if (strcmp(ble.buffer, "OK") == 0) {
    // no data
    return;
  }
  // Some data was found, its in the buffer
  Serial.print(F("Intensity: ")); 
  Serial.println(atoi(ble.buffer));
  analogWrite(5,atoi(ble.buffer));
  ble.waitForOK();
}

bool getUserInput(char buffer[], uint8_t maxSize) {
  TimeoutTimer timeout(1);
  
  memset(buffer, 0, maxSize);
  while( (!Serial.available()) && !timeout.expired() ) { delay(1); }

  if ( timeout.expired() ) return false;

  delay(2);
  uint8_t count=0;
  do {
    count += Serial.readBytes(buffer+count, maxSize);
    delay(2);
  } 
  while( (count < maxSize) && (Serial.available()) );

  return true;
}
