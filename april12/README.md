## Assignment 7 (April 12)
### Making a Musical Instrument using Digital and Analog sensors:

### Polyphony

#### Group: Daniel, Basil, and Pranav

#### Description:
This particular assignment is inspired from the concept of polyphony in the subject of music. The objective is to use three different arduinos (of each group member) to change the speed of the melodies using the potentiometer (analog sensor), and change the notes of the music using the switch (digital sensor). 

#### Development Process:
- We played with the rythms of the example on Arduino, made several other rythms on computational media and could finalize 3 ryhthms to be used in this assignment.
- We first tried to implement the buzzer using a potentiometer, intitally using the examples of Arduino to test the circuit. 
- Once we were successful on getting it to work, we played with music notes and later calculated the necessary elements for the further implementation of the program like: BPM (beats per minute). 
- A delay of 1 second was added at the end of for loop to give a gap before the next sound is being played. 
- We decided to play with the ````noteDuration```` by changing the value of 1 second to 2 seconds. a variable called ````tempo````.
  
  It was intitally:
   
   ````int noteDuration = 1000 / noteDurations[thisNote]; //1000 milliseconds - 1 second````
  
  Changed to:
  
  ````int noteDuration = 2000 / noteDurations[thisNote]; //2000 milliseconds - 2 seconds````
- Using the [online beats per minute finder](https://www.beatsperminuteonline.com), we found the beats per minute for 1000 milliseconds is 184 BPM, and for 2000 milliseconds it is found to be 92 BPM.
- Using this ratio between the ones being compared, each 1 millisecond is 0.092 BPM (As 1000ms is 184BPM and 2000ms is 92BPM).
  #### Analog Sensor:
- Then we built the circuit to include a potentiometer which controls the speed of the melody.
- A variable called ````tempo```` was created to control using a mapped value between the potentiometer's pot values and the number of milliseconds.
- For this we used the ````map()```` function to map the values between 1000ms & 2000ms, and the minimum and maximum pot values 0 & 1023.
  ````tempo = map(potPosition, 0, 1023, 1000,2000);````
  #### Digital Sensor:
- We later added a push button into the circuit.
- The push button when it is clicked, changes the rythm of the melody to another one out of the three we have here in this assignment. 
- Another reason why we chose exactly three rythms is for three different arduinos that we are using.
- We used ````buttonPushCounter == 0```` or ````buttonPushCounter == 1```` to articulate the action of the buzzer with respect to its rythm.
   

