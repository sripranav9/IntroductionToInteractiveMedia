/*
   Minimal example using the nRF24L01 radio module to communicate
   between two Arduinos

   The transmitter sends the current count from `millis()` every 100 msec
   The receiver displays the value received
   An optional LED blinks as data is sent (on the transmitter)
   and is received (on the receiver)

   Based on rf24XmitShield and rf24Rcvr


  12 Dec 2021 - ms - initial entry
*/

// Pin usage

// nRF24L01 uses SPI which is fixed on pins 11, 12, and 13.
// It also requires two other signals
// (CE = Chip Enable, CSN = Chip Select Not)
// Which can be any pins. We will use the following:

// nRF 24L01 pin    Arduino pin   name
//          1                     GND
//          2                     3.3V
//          3             9       CE
//          4             10      CSN
//          5             13      SCLK
//          6             11      MOSI/COPI
//          7             12      MISO/CIPO

// Plus another pin for the LED (DO NOT USE LED_BUILTIN!)

// Transmitter code (receiver is below)

#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

const int CEPIN = 9;
const int CSNPIN = 10;
RF24 radio(CEPIN, CSNPIN);                // CE, CSN

// Byte of array representing the address.
// This is the address where we will send the data.
// This should be same on the receiving side.
const byte address[6] = "00030";

const int LED_PIN = 2;
int ledState = LOW;

void setup() {
  Serial.begin(9600);

  // RF24 setup
  if (!radio.begin()) {
    Serial.println("radio  initialization failed");
    while (1)
      ;
  } else {
    Serial.println("radio successfully initialized");
  }
  radio.openWritingPipe(address);   // Destination address
  radio.setPALevel(RF24_PA_MIN);    // min or max
  radio.stopListening();            //This sets the module as transmitter

  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  ledState = !ledState;
  digitalWrite(LED_PIN, ledState);

  long timeNow = millis();

  Serial.print( "sending time = " );

  Serial.println(timeNow);
  radio.write(&timeNow, sizeof(timeNow)) ;
  delay(100);
}


// nRF 24L01 pin    Arduino pin   name
//          1                     GND
//          2                     3.3V
//          3             A0       CE
//          4             A1      CSN
//          5             13      SCLK
//          6             11      MOSI/COPI
//          7             12      MISO/CIPO


/*// Receiver code

#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

const int CEPIN = A0;
const int CSNPIN = A1;
RF24 radio(CEPIN, CSNPIN);  // CE, CSN


// Byte of array representing the address.
// This is the address where we will send the data.
// This should be same on the receiving side.
const byte address[6] = "00030";

int ledState = LOW;


void setup() {

  Serial.begin(9600);

  // RF24 setup
  if (!radio.begin()) {
    Serial.println("radio  initialization failed");
    while (1)
      ;
  } else {
    Serial.println("radio successfully initialized");
  }
  radio.openReadingPipe(0, address);  // Destination address
  radio.setPALevel(RF24_PA_MIN);      // Min or max
  radio.startListening();             // sets  module as receiver

//  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  uint8_t pipeNum;
  if (radio.available(&pipeNum))  //Looking for the data.
  {
    Serial.print("data available on pipe ");
    Serial.println(pipeNum);

//    ledState = !ledState;
//    digitalWrite(LED_BUILTIN, ledState);
    long data;

    radio.read(&data, sizeof(data));  //Reading the data
    Serial.print("data = ");
    Serial.println( data);
  }
  delay(5);
}*/
