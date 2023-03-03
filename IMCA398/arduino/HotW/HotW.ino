#include <Servo.h>
Servo Herve;
int servoPos;

void setup() {
  Herve.attach(9);
  Serial.begin(9600);
  Herve.write(0);
  // Herve.write(180);
}

void loop() {
  servoPos = 0;
  // servoPos = random(0,181);
  /* for (servoPos = 0; servoPos < 180; servoPos++){
    Serial.println(servoPos);
    Herve.write(servoPos);
    delay(10);
  }
  for (servoPos = 180; servoPos > 0; servoPos--){
    Serial.println(servoPos);
    Herve.write(servoPos);
    delay(10);
  } */
  for (servoPos = 0; servoPos < 80; servoPos++){
    Herve.write(servoPos);
    delay(5);
  }
  for (servoPos = 80; servoPos > 0; servoPos--){
    Herve.write(servoPos);
    delay(5);
  } 
  // Serial.println(servoPos);
  // Herve.write(servoPos);
  // delay(100);
}
