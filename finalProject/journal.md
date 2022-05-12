# RoboPet
# Final Project Journal

## Group: Ayesha and Pranav

### Date: 18th April 2022
#### Preliminary Idea:
The idea is inspired from robot cleaners. Just for the background, we've watched quite a few videos on how they work and how we can put the tools of Arduino that we have to make something similar. What does the robot do? There is a cleaner, probably a motor with a brush, and the robot senses the obstacles and changes its course of direction to avoid hitting it. 

In our case, We know there is an Ultra-sonic sensor that can help us with the obstacles and we have wheels and motors to make the robot. The idea is not exactly to make a cleaner, but something similar which runs in parallel in terms of the sensors used in Robot Cleaner.

![XShuaiHXSC3 Robotic Vacuum Cleaner_2](https://user-images.githubusercontent.com/92122776/163926727-a8dc3bfa-4095-4d9f-9bb2-a44764c65934.jpeg)

### Date: 19th April 2022
We can use the wheels in the Arduino Kit and some materials like cardboard etc and make sort of a car. 

**Working**: A robot that goes around, and when it hits an obstacle, it shines a RED light and can even make a sound. Probably make a sound like "Ouch, that is something!". There can be another motor similar to the cleaner, which we might append based on our ideas as they come.

### Date: 21st April 2022
#### Concept:
Building upon on the preliminary idea, the idea is to execute the building and proper working of a robot car that can sense things around based on their distance (using the Ultra Sonic Sensor). The cleaner machine needs a vaccum that might be a little too much to execute in the given time. Meanwhile another interesting idea that popped up was to efficiently make use of p5.js and the connection with Arduino to do a variety of functions. 

Maybe something like:

- Press "F" - Free Roam: Move around freely and avoid hitting obstacles using the Ultra Sonic Sensor.
- Press "H" - Return to Home: Based on the given radio signals, the robot (consisting of 1 arduino) should be able to return to the second Arduino connected with the laptop. 
- Press "C" - Make a circle at its place: This is just one of the many functions that the robot can do. Many more functions can be added as we are working on this project further.

But since the car needs to be free from the connection from the laptop, we would be needing two arduinos, one powering the robot car and one connected to the p5.Serial and Arduino controlling the actions instantly. But to establish this connection, we need to communicate using radio signals between the two arduinos. We are exploring ways using the nRF24L01 transceiver module to make this possible.

#### Accomplishments expected from Arduino and p5:

- The Arduino powering the robot car will be taking the power input from the battery pack instead of our usual source - the laptop.
- The Arduino would be taking the input mainly from the Ultra-Sonic Sensor and use this to determine which function of the robot to perform based on the results of the observations of distance. For example: If the observed reading of the distance is greater than the threshold distance, the robot will continue performing its action. Else, it would move back, take a slight right turn and continue its work forward. In this case it wouldn't be sending anything to p5. 
- The p5 will be responsible to send a signal "H", "F", or "C" based on the user's input, and then transmit the signal to the arduino, which then transmits the radio signal to the arduino backing up the robot car to perform certain functions as desired.
- To sum up, the arduino wouldn't be sending in any signals to p5, but the p5 sends in signals for certain functions to be performed which are to be received by the Arduino using radio communiation.
- Ways of implementing the radio module and determining the input pins exactly are yet to be explored.

Additional concepts and thoughts that will be possibly added as the project gets under way: A blinking Red LED and the use of peirco buzzer to indicate the proximity to obstacle.

Final Group: [Ayesha](https://github.com/ayeshaahmed13/IntroToIM) and Pranav

### Date: 25th April 2022

We visited the IM Lab today and largely worked out on the more hands-on component of our project. Till date we had been referencing various materials and examples on YouTube to gain more transparency on the radio transmission aspect and on how to make our RoboPet more unique.  The biggest milestone for our project was that we got a large part of circuitry in place in addition to the p5.js component of our project that deals with gathering user input.

#### Accomplishments during each work session:
**Work Session on 24th April**
- We have figured out the pins practically by connecting the wires, the motor driver, and the motors themselves.
- We took the help of some examples from SparkFun Documentation, and changed the code to make use of the distance sensor and specifically in a way we wanted the RoboPet to move like. 

**Work Session on 25th April**
- We have a working model of a RoboPet for the "Free Move" function as discussed above. (Free move is basically when the RoboPet is left to wander on its own, and when it senses an obstacle, it reverses and turns to another direction to proceed forward)

#### What worked and what didn't work: 
- On the positive note, the robot can now freely move and when obstacles are found, it does the expect reverse and turn function. 
- Since we were able to effectively run the expected aspect of the project effectively, our next plan of action would be to perhaps try to inculcate more aspects into our robot to make it  more unique.
- The aspect that largely didn’t work for us was the radio transmission part which we were unable to proceed to due to the unavailability of many female to female or female to male wires in the IM lab.
- The arduino and the breadboard weren't sitting on the black sparkFun board properly so we had to use a tape for temporary purpose.

#### What changes we made to the design as a result of things that didn't work:
- We don't think the robot will be able to return to HOME (the main arduino connected to the laptop), this looks like its way too far-fetched, to trace the path it had gone, and retrace it back to come back to the same position. We're not sure if the radio module itself can communicate a path for the RoboPet to retrace. 

#### Most riskiest, complicated, or unknown part, and how we plan to solve it:
- The most unknown part for us so far is to get the Radio module to work. Owing to the issues mentioned below, we couldn't work on the radio module yet.
- We are yet to get to the p5.js fully as it is, but this is not something unknown to us, we are aware of how the p5 serial works and focussed only on the Arduino part of the RoboPet for now. We are ready with the basic of part of p5 that connected Arduino, and p5 using p5.Serial. We will add the above mentioned functions to p5 once we have a chance to do so. When the user sends a signal on p5 (Eg: Free Roam or make a circle etc.), the signal is taken by the serial and finally on Arduino which can pass this command to the RoboPet using the radio module. Since radio module itself is something we need help on, we will get to this as soon as radio module is fixed. 

#### Arduino, p5, Fabrication, and construction issues:
- It's always takes a long time to debug a tiny error in the code, it took us a day to figure out what went wrong with the code and the robot was just not moving. But the problem was the switch we were using. In the three legged switch we were using, the two legs on the left (middle leg and left most) are connected, and the two legs on the right (middle leg and right most) are connected. Which means, there is no connection between the right-most and the left-most legs. I connected the ground and a wire to a arduino pin using these two pins and then assumed the switch wasn't working (as I tried without the switch and it was working fine). I just had to use the switch correctly! This problem did take a lot of time to solve but during this process, we learnt how to use the Multimeter with Jack, and many more stuff about these switches. Thanks to Jack!
- We found it extremely difficult to find Male to Female or Female to Female wires for our use in the project (for radio modules). We still couldn't get out hands on them, which did not let us work with the nRF24L01 modules.
- We found it also hard to screw the arduino board and the breadboard to SparkFun black board which can act as a sturdy material for the car. 
- We could not find AA Batteries for the car to work on it's own. So it had to be connected to a power source always. Thanks to Abdullah and Mishel, they suggested us to use a power bank instead of carrying the laptop around, which made our work a little easier while testing.

### Date: 26th April 2022:
#### Basic User Testing:

User testing has been one of most essential processes in this project, both to make RoboPet much better, and also understand the needs of varied kinds of users.

- The processes of RoboPet after detecting the obstacle as mentioned above include: backing up, and turning left to continue moving forward. There was not enough time for the RoboPet to actually back up and turn, hence it is almost running back into the same obstacle. To resolve this, we increased the values of the following parameters:

````
//robot delay behaviour variables
int backupTime = 1000;           //time robot takes to reverse after sensing an obstacle
int turnTime = 400;             //time the robot takes to turn after reversing back after sensing an obstacle
int stopTime = 500;             //time the robot stops and has no motion 
````
- Furthermore, when the RoboPet detects an obstacle, it drives back, waits, and takes a turn and continues forward. But due to the power differential intitally, the RoboPet moves right immediately, increasing the chances of detecting an obstacle again. As one of the users pointed out, the suggestion was to increase the turning time and move forward for a certain time before at a low speed before reaching a very high speed immediately. This was a very good suggestion and we've implemented this immediately.

We could not upload the video of the user's feedback as they preferred their video not be published on a public portfolio. We are doing a Phase II user testing soon and feedback will be updated again.

### Date: 29th April 2022:
#### Problems:

Power Differential:
- We ran into a problem where there is a significant power differential between the motors of the two wheels: 

https://user-images.githubusercontent.com/92122776/166442326-d8846253-25d3-471a-8b67-c2acdebf4903.mov


Construction Challenges:
- We also wanted to make the wheels with motors the back wheels and the wheels with no motor and just an axle (that go with the motion and do not have the control to change the motion) will be in the front, so that it can be a 2WD car - where two rear wheels have the power from the engine mainly (in this case the battery pack or any other power source). 
  - During this process, it was very hard to find a tool to fix both the wheels together, and then finally we could find a wood stick that could hold the wheels together, and we glued them using a hot glue gun. 
  -  Now the problem is - How do we fix this wheel with the wooden axle, at the bottom so that the wheel still can move with motion?
  -  We're still figuring out a way to do this. 
  
Radio Challenge: 
- We could build the circuit for the nRF24L01 module but when we are testing, it just prints ````radio initialization failed```` on the Arduino Serial Monitor. 

### Date: 7th May 2022:

#### Problems and Solutions:
- Adding on to the power differential problem described earlier, turns out it is merely a problem of friction and light-weighted body on the front wheel, and a significant weight of the battery pack at the back. It basically needed a supporting addition of the motion at the back as well. 
- So we planned on gluing two wheels with an axle of appropriate size and width. It was a very difficult process to find such material first of all, however, we found a stick in the recycle bin and we used a got glue gun to stick the wheels together.

<img src="https://user-images.githubusercontent.com/92122776/167483391-11039c3f-5093-4b7d-a4ee-0d578d597f57.jpeg" width=45% height=45% >

- But now the problem is how do we fix this to the body of the car so that it can freely move without any friction. 
- We brainstormed several ideas like having a type of an axle holder attached to the body of the RoboPet. 
- Meanwhile, Prof. Shiloh has given us the best type of wheel we could ever get that solves all our problems and can directly stick to the body of the RoboPet. 

<img src="https://user-images.githubusercontent.com/92122776/167484076-b97ddd74-993b-491f-9554-5d679db7bddf.jpeg" width=45% height=45% >

- This solved all our problems related to the motion and now we just had to improvise the arduino code for the RoboPet to work efficiently and in the best way possible making use of the space it has between itself and the obstacle. 

#### Other essential things to make note of:
- We intitally began by testing the RoboPet with the distance sensor situation at the right. Although it was random, and we were planning to change the sensor to the middle as we progress, upon testing we realized that the sensor being on the right helps us a lot. 
- The RoboPet has a slight dominance on the left wheel due to which the car tends to move slightly towards the right, so the sensor being situated on the right can detect the obstacle imediately since the right most wheel is what hits the obstacle if the sensor isn't in its place as it is now. the image below is an illustration of how the RoboPet detects obstacles easily when turning right, when the distance sensor is on the right. 

<img src="https://user-images.githubusercontent.com/92122776/167483182-b745dff6-7949-491e-b4bb-6ccfac19b5bc.png" width=60% height=60% >

#### Problems:
- When the motors are running on their top speed, since the wheels do not have enough friction, they keep rotating at the same position without moving forward. This is mainly because there is not enough weight to increase the down force on the wheels to actually start moving even at higher speeds. 
- We are yet to solve this problem, we will explore all the different ways to solve this and add the weight, or reduce the motor speed.

### Date: 9th May 2022:
#### Progress:
- The radio modules are now working as expected after running the code of Prof.Shiloh's minimalRadio example. We could also find the feed through headers to make use of the breadboard for the radio module. 
- Initially the radio prints ````radio initialization failed```` on the Serial Monitor. For some reason, taking out and placing back the radio in its place works everytime.
- Now the main challenge is to integrate this radio module, mainly the 'Receiver' out of the two separate Arduino Unos to the Arduino Uno that already runs the motors and the distance sensor. 
- But the radio pins, require specific digital pins that use a specific and particular hardware system that is used by these radio pins specially i.e pins: 13, 12, 11, 10, are required solely by the radio. So we had to change the connections and pins of the rest of the already connected pins of Motor Driver and the Distance Sensor and use the Analog pins instead which can work just like the digital pins.
- After shifting the pins, we tested each of the sensors and modules: Distance Sensor, Motor Driver, and the Radio Module (receiver) separately and it works just fine.

Resource of Prof. Michael Shiloh that really helped us: [nRF24L01](https://github.com/michaelshiloh/resourcesForClasses/tree/master/src/arduinoSketches/nRF24L01)

A video of the nRF24L01 Modules in work:

https://user-images.githubusercontent.com/92122776/167583908-99084983-7281-4020-a8d1-d66bdccf4357.mov

- Now we need to integrate this separately tested Radio Module code to the code consisting the Motor Driver and the Distance sensor.

#### Problems and Solutions:
- The left motor all of a sudden wasn't working as it should. So I tried to debug the problem by removing everything and just having two statements in the ````loop()```` function to test if they are actually faulty. 

````
void loop() {
  leftMotor(255);
  rightMotor(255);
}
````
- Turns out the problem actually was very simple and silly: The Motor Driver was not in its place correctly. We just needed to push it firmly into its place and everything began working as it should.


### Date: 10th-11th May 2022:
- As we were testing p5.js specifically, the p5.js shows the mode that is being transmitted by the radio connected to the laptop, to the arduino running the RoboPet. In this process, we have received some feedback asking us to do something else that strikingly suggests that a change has been made in the mode instead of just printing the changing numbers. So we decided to change the background color based on the modes of the RoboPet. Currently we have two modes. So, to implement this, we had to alter our code just slightly, by involving the use of global variables for the rgb colors of the ````background()```` function. 

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

#### User Testing Phase II:

User testing has been one of most essential processes in this project, both to make RoboPet much better, and also understand the needs of varied kinds of users.

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

### Date: 12th May 2022:
We have a working model of the project:

https://user-images.githubusercontent.com/92122776/168003086-9d4db0ab-6f1a-4061-b402-a12f43af595b.mov

Ayesha: Responsible for the hardware and p5: Arduino circuitry. Created the majority of the sketch for p5.js serial control and the interface of p5 for RoboPet.
Pranav: Responsible for code: Arduino - making sure the radios communicate properly, and the sensors print appropriate values, and connection to p5.serial for the transmitter.

Overall, working in a group is very helpful as one runs into a problem and the other is there to debug and help out!
