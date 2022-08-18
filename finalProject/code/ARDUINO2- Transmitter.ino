#include <SPI.h>
#include <nRF24L01.h>
#include <RF24.h>

RF24 radio(9, 10); // CE, CSN

const byte address[6] = "00030";
int anotherByte = 0;

void setup() {

  Serial.begin(9600);
   
   // RF24 setup
  if (!radio.begin()) {
    Serial.println("radio initialization failed");
    while (1)
      ;
  } else {
    Serial.println("radio successfully initialized");
  }
  
    //test the serial
   if (Serial.available() <= 0) {
    Serial.println("Mode"); // send a starting message
    delay(300);              // wait 1/3 second
  }
  
  radio.openWritingPipe(address);
  radio.setPALevel(RF24_PA_MIN);
  radio.stopListening();  //this sets the module as transmitter
}

void loop() {

  while (Serial.available() > 0) {
    // read the incoming byte:
    int inByte = Serial.read();
    anotherByte = inByte;
    radio.write(&anotherByte, sizeof(anotherByte));
    Serial.println(anotherByte);
  }
    
  delay(500);
}
