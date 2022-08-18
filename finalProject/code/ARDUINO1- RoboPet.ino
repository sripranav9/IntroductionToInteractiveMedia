//=====================================================================================================
//            -- Final Project, Introduction to Interactive media --
//                        Professor Michael Shiloh

// Authors        : Ayesha Ahmed and Sri Pranav Srivatsavai
// Date Created   : Apr-18-2022
// Date Submitted : May-11-2022
// Description    : RoboPet - An autonomous robot that can move around freely or
//                           perform a certain funciton as chosen by the user
//=====================================================================================================

#include <SPI.h>        // ]
#include <nRF24L01.h>   // ] - import necessary header files for the radio module
#include <RF24.h>       // ]

//variable to switch ON or OFF the robot
int switchPin = 7;             //switch to turn the robot on and off

//the right motor will be controlled by the motor A pins on the motor driver
const int AIN1 = 2; //13           //control pin 1 on the motor driver for the right motor
const int AIN2 = 4; //12           //control pin 2 on the motor driver for the right motor
const int PWMA = 5; //11           //speed control pin on the motor driver for the right motor

//the left motor will be controlled by the motor B pins on the motor driver
const int PWMB = 6; //10          //speed control pin on the motor driver for the left motor
const int BIN2 = 9;           //control pin 2 on the motor driver for the left motor
const int BIN1 = 8;           //control pin 1 on the motor driver for the left motor

//variables for the turn speed and usual forward speed
const int turnSpeed = 255;
const int straightSpeed = 255; //this is not the full motor speed as chosen after testing to avoid friction and 
                               //light weighted body of the RoboPet affecting its motion

//variables for distance
const int trigPin = A5; 
const int echoPin = A4; 

//variables for the nRF24L01 radio module
const int CEPIN = A0;
const int CSNPIN = A1;
RF24 radio(CEPIN, CSNPIN);  // CE, CSN

//================
//Reference - © Prof. Michael Shiloh - 
//https://github.com/michaelshiloh/resourcesForClasses/blob/master/src/arduinoSketches/nRF24L01/minimalnRF/minimalnRF.ino

// Pin usage

// nRF24L01 uses SPI which is fixed on pins 11, 12, and 13.
// It also requires two other signals
// (CE = Chip Enable, CSN = Chip Select Not)
// Which can be any pins. We will use the following:

//Pins for Receiver:
// nRF 24L01 pin    Arduino pin   name
//          1                     GND
//          2                     3.3V
//          3             A0       CE
//          4             A1      CSN
//          5             13      SCLK
//          6             11      MOSI/COPI
//          7             12      MISO/CIPO

//Pins for Transmitter:
// nRF 24L01 pin    Arduino pin   name
//          1                     GND
//          2                     3.3V
//          3             9       CE
//          4             10      CSN
//          5             13      SCLK
//          6             11      MOSI/COPI
//          7             12      MISO/CIPO

//=================

// Byte of array representing the address
const byte address[6] = "00030"; //this must be the same for both the receiver and the transmitter to communicate appropriately

float distance = 0;            //variable to store the distance measured by the distance sensor

//robot behaviour variables
int backupTime = 1000;           //time robot takes to reverse when it sees an obstacle
const int turnTime = 700;             //time the robot takes to turn after reversing back after facing an obstacle
int stopTime = 500;

/********************************************************************************/
void setup()
{
  //distance sensor:
  pinMode(trigPin, OUTPUT);       //this pin will send ultrasonic pulses out from the distance sensor
  pinMode(echoPin, INPUT);        //this pin will sense when the pulses reflect back to the distance sensor

  //switch:
  pinMode(switchPin, INPUT_PULLUP);   //set this as a pullup to sense whether the switch is flipped

  //motor driver:
  //set the motor control pins as outputs
  pinMode(AIN1, OUTPUT);
  pinMode(AIN2, OUTPUT);
  pinMode(PWMA, OUTPUT);

  pinMode(BIN1, OUTPUT);
  pinMode(BIN2, OUTPUT);
  pinMode(PWMB, OUTPUT);

  //Serial Monitor:
  Serial.begin(9600);                       //begin serial communication with the computer
  Serial.print("To infinity and beyond!");  //test the serial connection

  // RF24 setup
  if (!radio.begin()) {
    Serial.println("radio  initialization failed");
    while (1); //keep printing the error as long as it exists
  } else {
    Serial.println("radio successfully initialized"); //if the radio is intialized successfully, print the same
  }
  radio.openReadingPipe(0, address);  // Destination address
  radio.setPALevel(RF24_PA_MIN);      // Min or max
  radio.startListening();             // sets  module as receiver
}

/********************************************************************************/
void loop()
{
  //         DISTANCE SENSOR
  //Detect the distance read by the distance sensor
  distance = getDistance(); //use the get distance funciton that converts the pulse to distance

  //print the distance on the serial monitor
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" in");              // print the units

  //           RADIO MODULE
  uint8_t pipeNum; //to store the

  long data; //to store the data sent by the radio module (transmitter) 
  
  if (radio.available(&pipeNum))  //Looking for the data.
  {
    Serial.print("data available on pipe ");
    Serial.println(pipeNum);

    radio.read(&data, sizeof(data));  //Reading the data
    Serial.print("data = ");
    Serial.println(data); //print the data on the serial monitor (mainly used for debugging purposes - to check if the data is being received)
  }

  //          MOTOR DRIVER and SWITCH
  if (digitalRead(switchPin) == LOW) { //if the on switch is flipped
    if (data == 1) { //free roam option coming in from p5js, and then through another arduino
      if (distance < 16) {              //if an object is detected
      //back up and turn

      //printing on the serial monitor to see the action going on!
      Serial.print(" ");
      Serial.print("BACK!"); //print to the serial monitor when the distance below 15 units is sensed

      //stop for a moment
      rightMotor(0); 
      leftMotor(0);
      delay(stopTime);

      //back up and turn away
      leftMotor(255);
      rightMotor(-255);
      delay(turnTime);
      }
      else {                        //if no obstacle is detected drive forward
        Serial.print(" ");
        Serial.print("Moving...");

        rightMotor(straightSpeed); //move the right wheel forward at a certain speed
        leftMotor(straightSpeed); //move the left wheel forward at a certain speed
      }
    } else if (data == 2) { //option 2 coming in from the p5.js

      rightMotor(-straightSpeed);
      leftMotor(-straightSpeed);
      delay(turnTime);

      leftMotor(turnSpeed);
      rightMotor(-turnSpeed);
      delay(1000);
    } else if (data == 0) { //stop the car even when the switch is in ON position
      leftMotor(0);
      rightMotor(0);
    }
  }
  else {  //if the switch is off, then stop

    //stop the motors
    rightMotor(0);
    leftMotor(0);
  }

  delay(50); //wait 50 milliseconds between readings
}

/********************************************************************************/

void rightMotor(int motorSpeed)                       //function for driving the right motor
{
  if (motorSpeed > 0)                                 //if the motor should drive forward (positive speed)
  {
    digitalWrite(AIN1, HIGH);                         //set pin 1 to high
    digitalWrite(AIN2, LOW);                          //set pin 2 to low
  }
  else if (motorSpeed < 0)                            //if the motor should drive backward (negative speed)
  {
    digitalWrite(AIN1, LOW);                          //set pin 1 to low
    digitalWrite(AIN2, HIGH);                         //set pin 2 to high
  }
  else                                                //if the motor should stop
  {
    digitalWrite(AIN1, LOW);                          //set pin 1 to low
    digitalWrite(AIN2, LOW);                          //set pin 2 to low
  }
  analogWrite(PWMA, abs(motorSpeed));                 //now that the motor direction is set, drive it at the entered speed
}

void leftMotor(int motorSpeed)                        //function for driving the left motor
{
  if (motorSpeed > 0)                                 //if the motor should drive forward (positive speed)
  {
    digitalWrite(BIN1, LOW);                         //set pin 1 to high
    digitalWrite(BIN2, HIGH);                          //set pin 2 to low
  }
  else if (motorSpeed < 0)                            //if the motor should drive backward (negative speed)
  {
    digitalWrite(BIN1, HIGH);                          //set pin 1 to low
    digitalWrite(BIN2, LOW);                         //set pin 2 to high
  }
  else                                                //if the motor should stop
  {
    digitalWrite(BIN1, LOW);                          //set pin 1 to low
    digitalWrite(BIN2, LOW);                          //set pin 2 to low
  }
  analogWrite(PWMB, abs(motorSpeed));                 //now that the motor direction is set, drive it at the entered speed
}

/********************************************************************************/
//Reference - SparkFun examples - Calculate the distance coming in from the distance sensor for a robot
//RETURNS THE DISTANCE MEASURED BY THE HC-SR04 DISTANCE SENSOR
float getDistance()
{
  float echoTime;                   //variable to store the time it takes for a ping to bounce off an object
  float calculatedDistance;         //variable to store the distance calculated from the echo time

  //send out an ultrasonic pulse that's 10ms long
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  echoTime = pulseIn(echoPin, HIGH);      //use the pulsein command to see how long it takes for the
  //pulse to bounce back to the sensor

  calculatedDistance = echoTime / 148.0;  //calculate the distance of the object that reflected the pulse (half the bounce time multiplied by the speed of sound)

  return calculatedDistance;              //send back the distance that was calculated
}
/********************************************************************************/
