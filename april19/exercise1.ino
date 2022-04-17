//********
// Control the Ellipse on p5 using a potentiometer
//********

void setup() {
  Serial.begin(9600); //initiate the serial monitor
}

void loop() {
  int sensorValue = analogRead(A0); //read the value from A0 pin 
  int mapped = map(sensorValue, 0, 1023, 0, 400); //map the values between the potentiometer and 
                                                  //the screen width and height in p5 (400 is chosen in p5)
  Serial.println(mapped); //print the number on Serial monitor
}
