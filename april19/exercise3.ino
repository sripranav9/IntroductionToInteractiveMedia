int led = 5;           // the PWM pin the LED is attached to

void setup() {
  Serial.begin(9600); //begin the serial monitor
  pinMode(led, OUTPUT); //decare the pin as output pin
}

void loop() {
  int potValue = analogRead(A0); //read the values in pin
  while (Serial.available() > 0) {
    // read the incoming byte
    int inByte = Serial.read(); //read the values being send from p5

    //check the value and do the relavant function
    switch (inByte) {
      case 0:
        digitalWrite(led, LOW); //turn off led
        break;
      case 1:
        digitalWrite(led, HIGH); //turn on led
        break;
    }
  }
  int mapped; //variable to store the mapped values
  mapped = map(potValue, 0, 1023, 0, 2); //map the potValue and store it in mapped
  Serial.println(mapped); //print mapped to the serial monitor
}
