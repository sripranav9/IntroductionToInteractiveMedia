## Assignment 6 (April 5)
### Using Digital and Analog Sensors:

### ATC Tower Lights at Airports

#### Description:
The program gets information from an analog sensor- Potentiometer which controls two LED's based on their  a digital sensor- Switch which controls one LED.
Based on the potentiometer's position (Pot Value), the glowing of red bulb or the blue bulb occurs i.e when the pot value reads more than half of the maximum pot value, Red LED blinks, and blue LED when it is less than half of maximum value. Based on the position again, It blinks faster and slower if its on the lower half or upper half of the pot values out of the half of maximum pot value already chosen, symbolising the lights of an ATC Tower that I've seen in the airports (The actual towers might not work exactly this way).

#### Development Process:
- Initially, I started off building the circuit for the potentiometer. After understanding the pot values, I then tried to code in a way to control the LED to change its blinking based on the pot position at that point in time. 

- Later, I implemented it using two LEDs and achieved the blinking of different LEDs based on the pot position of the potentiometer. One of the problems I found here was that the blue LED is comparitively less brighter when compared to the red one. I initially thought it was the bulb (a fault in the bulb maybe) but turns out I forgot to include the serial pin as an output pin in the ````setup()```` function. (I have mentioned more about this in the Problems, Solutions and some thoughts)

https://user-images.githubusercontent.com/92122776/161697005-2eec1758-4808-490a-8fe6-47bebd5524e2.mov

- I could then achieve what I mentioned in the description- based on the potentiometer's position (Pot Value), the glowing of red bulb or the blue bulb occurs i.e when the pot value reads more than half of the maximum pot value, Red LED blinks, and blue LED when it is less than half of maximum value. Based on the position again, It blinks faster and slower if its on the lower half or upper half.
- Later, I implemented it using two LEDs and acheived what is mentioned in the description- based on the potentiometer's position (Pot Value), the glowing of red bulb or the blue bulb occurs i.e when the pot value reads more than half of the maximum pot value, Red LED blinks, and blue LED when it is less than half of maximum value. Based on the position again, It blinks faster and slower if its on the lower half or upper half.
- Later, after understanding the circuit of this analog sensor, I had to revisit every connection to understand how I am going to use this circuit for the digital sensor, which in this case is a switch.
- I first made a circuit using the switch which turns on LED when the switch is pressed, the traditional one.

https://user-images.githubusercontent.com/92122776/161696505-70ff8e69-60f6-4d64-944a-264b521df42c.mov

- I then used the switch, but this time directly connected to pin 9 instead of the 5V to be able to control the brightness and delay in the LED.
- I controlled the switch instead of using the traditional turn ON and OFF LED to be similar to that of the ATC Tower at the airport. The final outcome video can represent this. 
- I don't exactly know the lights at ATC Tower but in my imaginary world, I would love to use two kind of lights or more in that case, and as the planes probably get a signal of takeOff or landing, the different lights light up at different speeds. 

#### Schematic:

![circuitDiagram](https://user-images.githubusercontent.com/92122776/161696232-ca0e1075-d909-42d8-88e3-e4ac7c54ee27.jpeg)

#### Final Outcome:

https://user-images.githubusercontent.com/92122776/161695928-72a537ec-b0b9-4c79-b336-898d58dbfff2.mov


#### Problems, Solutions, and some thoughts:
- I had a tough time figuring out why my blue LED is not as bright as the red one, turns out its a simple part of the code that I forgot. I just had to include the line of code in ````setup()```` function to set pin 12 as an output:
  ````pinMode(blueLEDPin, OUTPUT);````
- I had a hard time figuring out my way through the mess of wires on the breadboard. However, the circuit diagram has helped me understand better and figure out my way through this problem.

<img src="https://user-images.githubusercontent.com/92122776/161698546-add73ef9-fe09-4047-921d-f50269dba751.png" width=45% height=45%> <img src="https://user-images.githubusercontent.com/92122776/161698567-722f1ee2-fb6d-4dd6-aa06-44f133444a6b.png" width=45% height=45%>

- Even to make a schematic, seeing the breadboard to make a circuit sometimes is a hassle. But I had a lot of learning how to do it. I was even taken back to my 11th and 12th grade physics where I used to prepare these circuits for various tests and quizzes, and I had a very hard time learning them. It makes a lot more sense now when doing it practically. I actually might be wrong with the curcit in the schematic, but atleast I understand what I am doing now to an extent. Indeed, Hands-On learning is Fun!
- While building the circuit for the digital sensor (switch), I also felt it was difficult to navigate my hands through the conjusted circuit to place a resistor or a bulb. My fingers were too big for the small space available for the resistor and bulb. 

#### Discoveries:
- I just realized how complex each circuit is, and this hardly being anything, I cannot imagine how the circuit of Arduino itself is to work this way as it is working now. I mean, we are using it to make our simple circuits, and the different micro-chips used in Arduino etc. I just realized how complex the building and the circuit of Arduino itself is.
