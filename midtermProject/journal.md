# Journal
## Mid-Term Project:
### Introduction to Interactive Media | New York University Abu Dhabi

#### Date: 28 Feb 2022

#### Initial Concept:
The idea is to create something that involves an object hitting some other objects (maybe in stacks) and the physics involved in the latter part. The user will score points based on the number of objects that have fallen out of place. The game will involve a single user. 

#### Most unknown and complicated part of the program:
- The biggest question I had in my mind was: How do I make the objects act naturally when they interact with another object? Basically, how do I code the physics of when an object interacts with another object? Let us consider these objects as bricks for now. If two bricks collide, how do I make them interact in a natural way?

#### How I solved it:
So this was when I researched about this and I found a wonderful and really helpful library called [Matter.js](https://brm.io/matter-js/docs/).
- It did take me quite sometime to go through the documentation and several videos on this module for understanding a wide variety of functions provided by this library.
- For this library to be imported, I have copied and pasted this: ````<script src="https://unpkg.com/matter-js@0.18.0/build/matter.min.js"></script> ```` in the ````index.html```` file on [p5.js](https://editor.p5js.org). It should be written as follows (line 6):

<img src="https://user-images.githubusercontent.com/92122776/156059163-98edbd31-0222-45a6-a444-30a5d7c5777b.png" width=50% height=50%>
 
- This will let us use the library [Matter.js](https://brm.io/matter-js/docs/) in our program ````sketch.js````.
- Using the functions provided by this library, I have implemented the following code.

#### Code Implemention:
- I have created classes called ````Brick```` and ````Ground````.
- In the ````setup()```` function , I have made an array for bricks. I've also created and called the necessary functions of the class. 
- Once we create a new engine and call the world using the imported library, we can see that there is now an element of gravity.

https://user-images.githubusercontent.com/92122776/156060827-9290233b-fd45-4c01-a93f-22c4f4b41649.mp4

- By adding ````this.body.isStatic = true;```` to the constructor of the Ground class, we can see that the objects created in Ground will now be static. Observe the event now when the ground is static. 

https://user-images.githubusercontent.com/92122776/156061681-405fa561-63af-4b86-b2ba-e8f650b42f30.mp4

- Now we can see that the objects are exactly following the laws of physics when it comes to interacting with other dynamic and static objects. 

#### References:

[Matter.js](https://brm.io/matter-js/) : Matter.js is a 2D physics engine for the web.

#### Date: 03 March 2022

#### Problems I faced: 
- Matter.js is an amazing library. It is a very powerful resource to create physics engines in p5.js. However, to collaborate what we learnt in class with Matter.js looks like a hassle. 
- For example: I don't see how to use the ````rect()```` function without using the ````Matter.Bodies.rectangle()```` function. 
- Hence, it needs a lot of time for me to go through the documentation, even if I am going to revamp my idea now, I am sure this will be a learning and not just an ambitious attempt. 
- I will now brainstorm for more ideas, which may or may not involve the above mentioned ideas.

#### Date: 07 March 2022

#### Concept:
I use [monkeytype](https://monkeytype.com) a lot. This is has really improved my typing speed. So inspired from MonkeyType, I wanted to make a game that can improve the user's speed in typing by practicing with random words generated on the screen. The user must be able to time his test and should be able to compare it with other tests he has given at that time. The good part here is: Users can compete with themselves or they can compete with their friends which makes it a 1 or 1+ player game. 

#### Sources I found:
I have a useful resource in the path am thinking the game should be in. It has several implementations that I learnt a lot from, and found them useful. The GitHub link for the resource is [here](https://github.com/vincentsijben/p5js-typing-game/blob/master/js/sketch.js ).

#### Problems, complicated parts, and solutions:
- I want the test to be a randomized worded test. Should I import the words? How do I do that? Should I store them in arrays? or CSV files?
- I have then created a CSV file with random words in the English language using this [website](https://onlinerandomtools.com/generate-random-csv). It just asked me the number of rows and columns, and gave me a CSV file. It might be useful for our future projects. Using this, I have preloaded the CSV file as ````words.csv```` into the ````sketch.js````. 
- Since I wanted to refer to the class from the sketch mentioned above, I had a problem with defining the ````mouseClicked()```` function, but turns out it was already pre-defined and I just had to add the code to the same function. Since the class requires several functions, those functions needed to be imported as well. The class ````Switch```` I took inspiration from is for the toggles of various uses as presented. 
- Checklist:
  - Inspired from ````Switch```` class and necessary functions for the game to be more user friendly and interactive. 
  - Add a ````welcomeScreen()````.
  - Import the ````words.csv```` file and generate random words as and when required. 
  - Let the Default test be the alphabet without spaces and the test randomizes upon user's choice. 
  - Add an image.
  - Add sound(s) when the game exactly begins. 
