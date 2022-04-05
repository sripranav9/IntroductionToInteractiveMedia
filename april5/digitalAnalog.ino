/*
   Name: Sri Pranav Srivatsavai
   Date: 3 April 2022
   Assignment 6: Using a digital and an analog sensor to control LEDs in the circuit
 */

int potPosition;  //this variable will hold a value based on the position of the potentiometer
const int maxPotPos = 1023; //maximum pot value
const int minPotPos = 0; //minimum pot value

const int redLEDPin = 13; //set the pin where the RED LED is connected
const int blueLEDPin = 12; //set the pin where the Blue LED is connected

int led = 9;           // the PWM pin the LED is attached to
int brightness = 0;    // how bright the LED is
int fadeAmount = 5;    // how many points to fade the LED by

void setup()
{
  Serial.begin(9600);       //start a serial connection with the computer
  pinMode(redLEDPin, OUTPUT);      //set pin 13 as an output that can be set to HIGH or LOW
  pinMode(blueLEDPin, OUTPUT); //set pin 12 as an output that can be set to HIGH or LOW
  pinMode(8, OUTPUT);

  // declare pin 9 to be an output for the fading bulb
  pinMode(led, OUTPUT);
}

void loop()
{
  //Switch - LED turns ON and OFF at a regular interval 
  digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
  
  //read the position of the pot
  potPosition = analogRead(A0);    //set potPosition to a number between 0 and 1023 based on how far the knob is turned
  Serial.println(potPosition);     //print the value of potPosition in the serial monitor on the computer

  //this if-else loop changes which LED to blink based on the pot value
  // we specifically chose maxPotVal/2 to make it change for exactly half of pot value
  if (potPosition > maxPotPos/2) {
    //if its more than the half of the half Pot value already taken, blink faster
    if (potPosition > ( maxPotPos - maxPotPos/4)){
      digitalWrite(redLEDPin, HIGH);           // Turn on the red LED
      delay(maxPotPos/5);              // delay for around 500 milliseconds

      digitalWrite(redLEDPin, LOW);            // Turn off the red LED
      delay(maxPotPos/5);              // delay for around 500 milliseconds
    }
    //if its on the lwoer half of the chosen half, blink slower
    else {
    digitalWrite(redLEDPin, HIGH);           // Turn on the red LED
    delay(maxPotPos/2);              // delay for around 500 milliseconds
  
    digitalWrite(redLEDPin, LOW);            // Turn off the red LED
    delay(maxPotPos/2);              // delay for around 500 milliseconds
    }
    
  }
  else {
    //if its less than the half of the half Pot value already taken, blink slower
    if (potPosition < (maxPotPos/4)){
      digitalWrite(blueLEDPin, HIGH);           // Turn on the red LED
      delay(maxPotPos/2);              // delay for around 500 milliseconds

      digitalWrite(blueLEDPin, LOW);            // Turn off the red LED
      delay(maxPotPos/2);              // delay for around 500 milliseconds
    }
    //if its on the upper half of the chosen half, blink faster
    else {
    digitalWrite(blueLEDPin, HIGH);           // Turn on the red LED
    delay(maxPotPos/5);              // delay for around 500 milliseconds
  
    digitalWrite(blueLEDPin, LOW);            // Turn off the red LED
    delay(maxPotPos/5);              // delay for around 500 milliseconds
    }
  }
}
