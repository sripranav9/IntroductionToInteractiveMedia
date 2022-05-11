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
