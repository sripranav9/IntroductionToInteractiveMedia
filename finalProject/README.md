# RoboPet
## Final Project | Introduction to Interactive Media
### Group Members: Ayesha Ahmed and Sri Pranav Srivatsavai

<img src="https://user-images.githubusercontent.com/92122776/167780514-461bb62c-6ba4-4795-b7d9-ff788ee8a1c5.jpeg" width=60% height=60%>

RoboPet is an autonomous robot that can make decisions of its movement and motion based on an obstacle at a certain distance. 
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
- As we are testing p5.js specifically, the p5.js shows the mode that is being transmitted by the radio connected to the laptop, to the arduino running the RoboPet. In this process, we have received some feedback asking us to do something else that strikingly suggests that a change has been made in the mode instead of just printing the changing numbers. So we decided to change the background color based on the modes of the RoboPet. Currently we have two modes. So, to implement this, we had to alter our code just slightly, by involving the use of global variables for the rgb colors of the ````background()```` function. 

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
