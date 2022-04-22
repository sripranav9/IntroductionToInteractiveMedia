# RoboPet
# Final Project Journal

## Group: [Ayesha](https://github.com/ayeshaahmed13/IntroToIM) and Pranav

Shortcut for the latest entry in the Journal: [Click Here](https://github.com/sripranav9/IntroductionToInteractiveMedia/edit/main/finalProject/journal.md#date-21st-april-2022)

### Date: 18th April 2022
### Preliminary Idea:
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

Final Group: [Ayesha](https://github.com/ayeshaahmed13/IntroToIM) and Pranav
