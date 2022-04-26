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
