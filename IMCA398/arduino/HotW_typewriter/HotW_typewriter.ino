#include <Servo.h>
Servo Herve;
int servoPos, start, end;

void setup() {
  Herve.attach(9);
  Serial.begin(9600);
  // Herve.write(0);
  // Herve.write(180);
  servoPos = 0;
  start = 0;
  // end = 77;
  // end = 180; // 360
  end = 180;
  Herve.write(servoPos);
}

void loop() {
  // servoPos = random(0,181);
  // Serial.println(servoPos);
  // Herve.write(servoPos);
  // delay(100);
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
  for (servoPos = start; servoPos < end; servoPos++){
    Serial.println(servoPos);
    Herve.write(servoPos);
    delay(10);
  }
  for (servoPos = end; servoPos > start; servoPos--){
    Serial.println(servoPos);
    Herve.write(servoPos);
    delay(10);
  } 
}
