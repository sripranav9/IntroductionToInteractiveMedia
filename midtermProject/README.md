# SpeedoType
## Mid-Term Project | Introduction to Interactive Media

[SpeedoType](https://editor.p5js.org/sri.pranav/full/MwdQ82b5j) is a minimalistic and customisable typing website. It can save the progress of the user(s) where they can compete with themselves to improve their typing speed. As a college student, I feel speed typing is something everyone should be able to inculcate to efficiently manage the college workload. SpeedoType also has customizable themes which the user can set based on light or dark surroundings upon their choice. The user is intitally given a test of the English alphabet which later can be changed to a randomized 12 word combination upon the user's choice. 


The game starts with a welcome screen displaying a set of instructions for the player(s). The user is encouraged to read the instructions carefully before proceeding.

<p align="center"> <img src="https://user-images.githubusercontent.com/92122776/157114849-443912d8-f275-45ad-9117-351d3afc6957.png" width=90% height=90% >

Upon clicking the screen as per the instruction, the user gets to hear a sound of "Let's Begin" with some background sound. The user is now taken to the game's screen where they can expolore the toggles, take the test, and record the scores.

https://user-images.githubusercontent.com/92122776/157116192-dabae237-746a-4fab-b2b9-5863da8393fd.mov

As shown above, by default the user gets to take the test of the alphabet of the English language and that is timed. But they can toggle the ````random```` switch to generate a string of randomized words from the ````words.csv```` file. This ````words.csv```` file is a csv file containing random words of the English language. (I found this interesting [website](https://onlinerandomtools.com/generate-random-csv) that can generate random English words and generate a csv file for us. We just need to choose the number of rows and columns.)
  

A string of 12 words are chosen at random row-wise from the file and presented for the user as a test upon their choice to be tested on random words. The user again, has an option to ````auto-restart```` as soon as they make a mistake. This will obviously change the string of words as well. Or, they can turn this off (using the toggle: auto-restart), which enables them to *backspace* to correct the error and continue with the test.
  
<p align="center"> <img src="https://user-images.githubusercontent.com/92122776/157117978-6c22bec8-32b2-4341-bc02-e95df49475bf.png" width=48% height=45%> <img src="https://user-images.githubusercontent.com/92122776/157117970-fe4c3851-6a71-46c9-91e9-e4f873239ac0.png" width=48% height=45%>
[Left Image: Observe that the auto-restart is OFF, and it gives us a chance to correct the mistake | Right image: auto-restart is ON and hence the user is back to the start as soon as they make an error] 

The ````theme```` switch changes the theme between light and dark modes as per the user's wish and need. While the ````smooth```` toggle just removes the smooth watery effect in the transition during the game. 
  
#### Essential elements in the Code:
- The toggles that are seen in this program are inspired from an [online source](https://github.com/vincentsijben/p5js-typing-game/blob/master/js/sketch.js). It is brought in as a class called ````Swtich```` and the toggles are objects of this class. Along with this, necessary functions deemed important for this class are also imported. 
- The CSV file, sounds, and the image are pre-loaded into p5.js .
- All the necessary variables and objects are intialized in the ````setup()```` function. 
- Some of the main input functions are: ````keyPressed()```` ````keyTyped()```` ````mouseClicked()````. These functions determine the main part of the program as they are the main elements reacting with the interactivity of the user. 
- The ````generateRandomList()```` function generates a random string from the list of words from the ````words.csv```` file. It first adds the words to an array, then adds them to a string. 
- There are several other functions that are important for the program. They can be found in the code [sketch.js](https://github.com/sripranav9/IntroductionToInteractiveMedia/blob/main/midtermProject/test2.js) where their use is explained.
- The ````draw()```` function checks everytime if the screen is 0 (Welcome Screen) or not 0 / is 1 which is the game screen. 

  
### User Centered Design:
- All the inputs, on-screen texts, and images are placed on the ````cavas```` using the in-built ````width```` and ````height```` variables in p5.js . In fact, the Canvas itself is made using the width and height of the screen of that particular device: using the functions ````windowWidth```` and ````windowHeight````. This will ensure- whatever PC/ Mac of any display size and resolution, the user will be able to see the texts with respect to their screen. 
- The user can choose from a variety of options and choose one that's best fit for them. 
- The green and red colors are chosen to give the visual representation and better cognitive processing of the user to comprehend the error. 
- The font is legible, and spatially arranged to make it less clumsy for the user.

### User Testing and Feedback:
- I have created a [Full-screen Version](https://editor.p5js.org/sri.pranav/full/MwdQ82b5j) of the game, and shared it with some of my friends without saying anything about the game itself. 
- One annoying thing from the user's end was that the program expects a space even after the last word. This was happening because I was adding a space after taking each word from the array and hence, even for the last word.
````
for (let i = 0; i < lineOfWords.length; i++) {
    temp += lineOfWords[i] + " ";
}
````

The solution to this was pretty simple, I just had to check when the last word was being added, and then NOT add a space after adding the last word.
````
for (let i = 0; i < lineOfWords.length; i++) {
    //this if loop is to ensure that there is no space 
    //at the end of the last word
    if (i == (lineOfWords.length-1)) { 
      temp += lineOfWords[i];
    }
    else {
      temp += lineOfWords[i] + " ";
    }
}
````
- On a positive note, users loved how the game's instructions, text, and image align with the screen irrespective of the display size of the machine they are using. As iterated earlier, this is because the program implements all the functions related to these using the in-built ````height```` and ````width```` variables.
- Users have also loved the switch toggle feedback and attention to detail, as they cruise their mouse over the toggle, the toggle changes its color to a lighter or darker version compared to its color based on the theme to show that the cursor is actually over the toggle. 

### Other useful links:
#### Journal:
I have documented my intital concept, complications, and solutions in a [journal](https://github.com/sripranav9/IntroductionToInteractiveMedia/blob/main/midtermProject/journal.md).
#### p5.js Sketch:
https://editor.p5js.org/sri.pranav/sketches/MwdQ82b5j
#### Full Screen Version of SpeedoType:
https://editor.p5js.org/sri.pranav/full/MwdQ82b5j

#### References:
Generating a CSV file of random words: https://onlinerandomtools.com/generate-random-csv 

Sound in the beginning of the game: https://elements.envato.com/cartoon-katie-saying-lets-begin-2SDCUFJ 
  
GitHub code for parts of the UI, Switch class and related functions : https://github.com/vincentsijben/p5js-typing-game/blob/master/js/sketch.js
