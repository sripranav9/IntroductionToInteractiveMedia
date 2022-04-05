## Assignment 6 (April 5)
### Unusual Switch

#### Description:
The program gets information from an analog sensor- Potentiometer which controls two LED's based on their  a digital sensor- Switch which controls one LED.
Based on the potentiometer's position (Pot Value), the glowing of red bulb or the blue bulb occurs i.e when the pot value reads more than half of the maximum pot value,
Red LED blinks, and blue LED when it is less than half of maximum value. Based on the position again, It blinks faster and slower if its on the lower half or upper half
of the pot values out of the half of maximum pot value akready chosen.

#### Development Process:
- Initially, I started off building the circuit for the potentiometer. After understanding the pot values, I then tried to code in a way to control the LED to change its blinking based on the pot position at that point in time. 
- Later, I implemented it using two LEDs and acheived what is mentioned in the description- based on the potentiometer's position (Pot Value), the glowing of red bulb or the blue bulb occurs i.e when the pot value reads more than half of the maximum pot value, Red LED blinks, and blue LED when it is less than half of maximum value. Based on the position again, It blinks faster and slower if its on the lower half or upper half.
- Later, after understanding the circuit of this analog sensor, I had to revisit every connection to understand how I am going to use this circuit for the digital sensor, which in this case is a switch.
- I then used the switch, but this time directly connected to pin 9 instead of the 5V to be able to control the brightness and delay in the LED. 


#### Problems, Solutions, and some thoughts:
- I had a hard time figuring out my way through the mess of wires on the breadboard. However, the circuit diagram has helped me understand better and figure out my way through this problem.
- Even to make a schematic, seeing the breadboard to make a circuit sometimes is a hassle. But I had a lot of learning how to do it. I was even taken back to my 11th and 12th grade physics where I used to prepare these circuits for various tests and quizzes. It makes a lot more sense now when doing it practically. Indeed, Hands-On learning is Fun!

#### Discoveries:
- I just realized how complex each circuit is, and this hardly being anything, I cannot imagine how the circuit of Arduino itself is to work this way as it is working now. I mean, we are using it to make our simple circuits, and the different micro-chips used in Arduino etc. I just realized how complex the building and the circuit of Arduino itself is.
