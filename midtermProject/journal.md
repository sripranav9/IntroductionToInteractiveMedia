# Journal
## Mid-Term Project:
### Introduction to Interactive Media | New York University Abu Dhabi

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
