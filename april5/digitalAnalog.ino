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

  // FADE ****
   // set the brightness of pin 9:
  digitalWrite(led, brightness);

  // change the brightness for next time through the loop:
  brightness = brightness + fadeAmount;

  // reverse the direction of the fading at the ends of the fade:
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  // wait for 30 milliseconds to see the dimming effect
  delay(30);
  // ****
  
  //read the position of the pot
  potPosition = analogRead(A0);    //set potPosition to a number between 0 and 1023 based on how far the knob is turned
  Serial.println(potPosition);     //print the value of potPosition in the serial monitor on the computer

  //this if-else loop changes which LED to blink based on the pot value
  // we specifically chose maxPotVal/2 to make it change for exactly half of pot value
  if (potPosition > maxPotPos/2) {
    digitalWrite(redLEDPin, HIGH);           // Turn on the red LED
    delay(maxPotPos/2);              // delay for around 500 milliseconds
  
    digitalWrite(redLEDPin, LOW);            // Turn off the red LED
    delay(maxPotPos/2);              // delay for around 500 milliseconds

    digitalWrite(redLEDPin, HIGH);           // Turn on the red LED
    delay(maxPotPos/5);              // delay for around 200 milliseconds
  
    digitalWrite(redLEDPin, LOW);            // Turn off the red LED
    delay(maxPotPos/5);              // delay for around 200 milliseconds

    digitalWrite(redLEDPin, HIGH);           // Turn on the red LED
    delay(maxPotPos/2);              // delay for around 500 milliseconds
  
    digitalWrite(redLEDPin, LOW);            // Turn off the red LED
    delay(maxPotPos/2);              // delay for around 500 milliseconds
    
  }
  else {
    digitalWrite(blueLEDPin, HIGH);           // Turn on the blue LED
    delay(maxPotPos/2);              // delay for around 500 milliseconds
  
    digitalWrite(blueLEDPin, LOW);            // Turn off the blue LED
    delay(maxPotPos/2);              // delay for around 500 milliseconds

    digitalWrite(blueLEDPin, HIGH);           // Turn on the blue LED
    delay(maxPotPos/5);              // delay for around 200 milliseconds
  
    digitalWrite(blueLEDPin, LOW);            // Turn off the blue LED
    delay(maxPotPos/5);              // delay for around 200 milliseconds

    digitalWrite(blueLEDPin, HIGH);           // Turn on the blue LED
    delay(maxPotPos/2);              // delay for around 500 milliseconds
  
    digitalWrite(blueLEDPin, LOW);            // Turn off the LED
    delay(maxPotPos/2);              // delay for around 500 milliseconds
  }



}
