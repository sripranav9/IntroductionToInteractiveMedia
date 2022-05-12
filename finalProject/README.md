# RoboPet
## Final Project | Introduction to Interactive Media
### Group Members: Ayesha Ahmed and Sri Pranav Srivatsavai

<img src="https://user-images.githubusercontent.com/92122776/167780514-461bb62c-6ba4-4795-b7d9-ff788ee8a1c5.jpeg" width=60% height=60%>

[RoboPet](https://editor.p5js.org/sri.pranav/sketches/9obVqqWQu) is an autonomous robot that can make decisions of its movement and motion based on an obstacle at a certain distance. 
The user will be able to select different modes i.e Free Roam, Do a circle, e.t.c. The robot runs on a battery backup and can be switched off and on using
a switch on the robot. The user can control the modes of the robot using a laptop or a PC running the p5 sketch and connected to Arduino using p5.Serial

### Overview of Arduino and p5.js circuitry and code:

The project uses Arduino and p5.js to make use of its full potential. The Arduino code is uploaded to the RoboPet. Since the RoboPet is an autonomous
robot, it shouldn't be connected to the laptop with a cable to communicate between p5.js and Arduino as it restricts the movement and range of the RoboPet.
To make use of the functions of the robot, this project is implemented using another Arduino which comminicates and maintains the handshake with p5.js and
then transmites this to the Arduino sitting on the body of RoboPet using radio communication (using nRF24L01 modules). The arduino placed on the RoboPet
is supported with a battery backup (using four AA Batteries) to facilitate its power supply, and the other sits next to the Laptop (or PC)
taking the power input from the USB Cable and it sends the signal received from p5.js to the other Arduino.

Here is an illustration displaying the above:

<img src="https://user-images.githubusercontent.com/92122776/167821744-2363515e-6a80-46dd-aca3-4c8443e18d64.png" width=75% height=75%>

**Arduino associated with the RoboPet:**
- This Arduino contains all the necessary code for:
  - Radio Module (Receiver) - nRF24L01 Module: Detect the signals sent by the transmitter  
    - The address must be the same for both the receiver and the transmitter to communicate properly.
      ````
      const byte address[6] = "00030"; //this must be the same for both the receiver and the transmitter to communicate appropriately
      ````
    - Besides other functions of the module, the main ones are where we check the working of radio using the ````radio.Begin()```` function 
      and the ````radio.startListening()```` function which sets this module as the receiver. 
    
  - Distance Sensor: Calculate the distance using a formula found in sparkFun examples
    - We used the code from a [sparkFun example](https://learn.sparkfun.com/tutorials/sparkfun-inventors-kit-experiment-guide---v40/circuit-5c-autonomous-robot) to calculate the distance (in inches) for the distance sensor:
      ````
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

        calculatedDistance = echoTime / 148.0;  //calculate the distance of the object that reflected the pulse (half the bounce time multiplied by the     
                                                // speed of sound)

        return calculatedDistance;              //send back the distance that was calculated
      }
      ````

  - Motor Driver: Functions for left and right motors, sequence of steps for each Mode (Free roam or Do a Cricle)
    - The code for the motor driver mainly consists of the ````LeftRotate(int motorSpeed)```` and ````rightRotate(int motorSpeed)```` functions for the left and right wheels.
    - If the motorSpeed is positive, the RoboPet moves forward, and backwards otherwise. When it's '0' - it basically stops and there is no motion.
    - To ensure the forward and reverse rotation of the wheels as expected, we set the pin to HIGH and LOW accordingly. For eg. for the left motor, if the RoboPet must move forward:
      ````
      if (motorSpeed > 0)         //if the motor should drive forward (positive speed)
      {
        digitalWrite(BIN1, HIGH); //set pin 1 to high
        digitalWrite(BIN2, LOW);  //set pin 2 to low
      }
      ````
      and to move backwards:
      ````
      if (motorSpeed > 0)         //if the motor should drive forward (positive speed)
      {
        digitalWrite(BIN1, LOW); //set pin 1 to high
        digitalWrite(BIN2, HIGH);  //set pin 2 to low
      }
      ````
      and to stop the rotation on both wheels:
      ````
      if (motorSpeed > 0)         //if the motor should drive forward (positive speed)
      {
        digitalWrite(BIN1, LOW); //set pin 1 to high
        digitalWrite(BIN2, LOW);  //set pin 2 to low
      }
      ````
      
 
**Arduino connected to the laptop that transmits signals using the Radio Module :**
- This Arduino contains all the necessary code for:
  - Radio Module (Transmitter) - nRF24L01 Module: Send the signals received from p5.js (using p5.serialcontrol) to the receiver.
    - The address must be the same for both the receiver and the transmitter to communicate properly. 
      ````
      const byte address[6] = "00030"; //this must be the same for both the receiver and the transmitter to communicate appropriately
      ````
    - Besides other functions of the module, the main ones are where we check the working of radio using the ````radio.Begin()```` function 
      and the ````radio.stopListening()```` function which sets this module as the transmitter. 
  
**p5.js Code:**
- This [sketch](https://editor.p5js.org/sri.pranav/sketches/9obVqqWQu) contains the necessary functions for maintaing the connection between the p5.js and Arduino using p5.serialcontrol. The ````draw()```` function takes care of the text on the screen displaying the instructions and constantly, the data being sent for the Mode number. The background color changes according to the mode.
  ````
  //if the data being sent is 1, since the mode is 1,
  //change the background color to represent this
  if (outByte == 1) {
    red = 204;
    green = 255;
    blue = 255;
  } else if (outByte == 2) { //else change it to the other color
    red = 207;
    green = 159;
    blue = 255;
  }
  background(red, green, blue);
  ````

### Overview of User Testing and changes made:

User testing has been one of most essential processes in this project, both to make RoboPet much better, and also understand the needs of varied kinds of users.

- The processes of RoboPet after detecting the obstacle as mentioned above include: backing up, and turning left to continue moving forward. There was not enough time for the RoboPet to actually back up and turn, hence it is almost running back into the same obstacle. To resolve this, we increased the values of the following parameters:

````
//robot delay behaviour variables
int backupTime = 1000;           //time robot takes to reverse after sensing an obstacle
int turnTime = 400;             //time the robot takes to turn after reversing back after sensing an obstacle
int stopTime = 500;             //time the robot stops and has no motion 
````

- Furthermore, when the RoboPet detects an obstacle, it drives back, waits, and takes a turn and continues forward. But due to the power differential intitally, the RoboPet moves right immediately, increasing the chances of detecting an obstacle again. As one of the users pointed out, the suggestion was to increase the turning time and move forward for a certain time before at a low speed before reaching a very high speed immediately. This was a very good suggestion and we've implemented this immediately.
- Sometimes, the left motor was not as powerful as the right motor even though the speeds were the same in the code. Although we assumed that to be the power differential, it is a silly error of not inserting the motor driver firmly into the breadboard. The motors now work in an excellent manner.
- As we were testing p5.js specifically, the p5.js shows the mode that is being transmitted by the radio connected to the laptop, to the arduino running the RoboPet. In this process, we have received some feedback asking us to do something else that strikingly suggests that a change has been made in the mode instead of just printing the changing numbers. So we decided to change the background color based on the modes of the RoboPet. Currently we have three modes. So, to implement this, we had to alter our code just slightly, by involving the use of global variables for the rgb colors of the ````background()```` function. 

````
function draw() {
  //outByte is the data being sent by p5.js to Arduino (1 or 2)
  if (outByte == 1) { 
    red = 204;
    green = 255;
    blue = 255;
  } else if (outByte == 2) {
    red = 207;
    green = 159;
    blue = 255;
  }
  background(red, green, blue);
//more code continues
}
````
- Upon user testing, we also received feedback to let the user be able to stop the car using a number key as well, instead of just the switch. This is mainly because the user had to run behind the RoboPet and hold it to switch it off. So for a better user experience, we added another key '0' for which the robot will stop moving even if the switch is on. The users loved this!

### Schematic:
**Arduino integrated with RoboPet:**

<img src="https://user-images.githubusercontent.com/92122776/167963350-f9d02ff2-4213-4d53-b374-92d476b1b2c0.jpeg" width=90% height=90%>


For the second arduino, the circuit only consists of a Radio Module. It can be referred from the previous schematic with the following changes:
````
//Pins for Receiver: (Arduino 1)
// nRF 24L01 pin    Arduino pin   name
//          1                     GND
//          2                     3.3V
//          3             A0       CE
//          4             A1      CSN
//          5             13      SCLK
//          6             11      MOSI/COPI
//          7             12      MISO/CIPO

//Pins for Transmitter: (Arduino 2)
// nRF 24L01 pin    Arduino pin   name
//          1                     GND
//          2                     3.3V
//          3             9       CE
//          4             10      CSN
//          5             13      SCLK
//          6             11      MOSI/COPI
//          7             12      MISO/CIPO

````

### Final Working Model:

**Mode 1:**

https://user-images.githubusercontent.com/92122776/168027943-76611bdb-74f3-4e7a-bed5-58a1bc9989c1.mov


**Mode 2: and Mode 0:**

https://user-images.githubusercontent.com/92122776/168027973-f92fef32-c443-4336-984c-60c07b471ca2.mov

### Scope for Improvising:
- We can add many more functions for different number commands and make the robot perform many more functions.
- We can also imclude 2-3 more distance sensors for better accuracy in obstacle detection.


### Problems faced:

- One of the most time-consuming challenges we had was one that had to do the significant power differential between the two motors, we tried everything in the code to restrict the high speed of on wheel over the other. But turns out it was just a problem of fixing the motor driver firmly, and another element of friction below:

  Adding on to the power differential problem described earlier, turns out it is merely a problem of friction and light-weighted body on the front wheel, and a significant weight of the battery pack at the back. It basically needed a supporting addition of the motion at the back as well.
So we planned on gluing two wheels with an axle of appropriate size and width. It was a very difficult process to find such material first of all, however, we found a stick in the recycle bin and we used a got glue gun to stick the wheels together.

  While we were brainstorming ways to attach an axle to the car for the wheel to move freely, Prof. Shiloh has given us the best type of wheel we could ever get that solves all our problems and can directly stick to the body of the RoboPet without any other holders required.
  
   <img src="https://user-images.githubusercontent.com/92122776/167483391-11039c3f-5093-4b7d-a4ee-0d578d597f57.jpeg" width=30% height=30% >
   <img src="https://user-images.githubusercontent.com/92122776/167484076-b97ddd74-993b-491f-9554-5d679db7bddf.jpeg" width=30% height=30% >

- Another problem that took a lot of time to debug had to do with the radio communication. We did not know if it was the wires, or the radio modules, or the circuitry that was causing the problem. So we tested all of them individually to see how and if they work. The solution to this problem was the radio which was working fine until then on another arduino working as a receiver.
- Once the radio communication worked fine with two other arduinos other than the one intregrated with RoboPet, the challenge was to integrate the code of radio (receiver), and the RoboPet. While we were figuring this out, we assumed the circuitry would be simple and we could use the analog pins for the ````digitalWrite()```` function as well.

  However, the main problem occured when we tested and this did not work. Upon research about this, we came to know that there are specific pins i.e pins 13, 12, 11, 10 that have the specific hardware supported to communicate with the Radio module. Hence, we changed the circuitry a little in terms of pin numbers. Global variables came to our rescue again! Declaring the variables globally with the relavant comments had us required to change the pin numbers only at one place each. This has made our work a lot easier, even though its a tiny thing to consider. 
  
### References and Acknowledgements:
- We sincerely thank Professor Michael Shiloh for his constant help and guidance throughout. We got a chance to learn about the nRF24L01 module which we woundn't have had accesss to otherwise. And thanks for your resources that helped us get started with the radio.
  Resource for Radio Module (nRF24L01) can here found [here](https://github.com/michaelshiloh/resourcesForClasses/tree/master/src/arduinoSketches/nRF24L01)
- SparkFun Example used for distance sensor and some parts of the functions can be found [here](https://learn.sparkfun.com/tutorials/sparkfun-inventors-kit-experiment-guide---v40/circuit-5c-autonomous-robot)
