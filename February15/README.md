# Interactive Media (Prof. Michael Shiloh)
### Assignment 3 (February 15)
####  Object Oriented Programming- Art (Visualizer):

https://user-images.githubusercontent.com/92122776/154000322-e6b05e19-1bee-4c50-9273-27c0eded15d1.mp4

#### Process:
1. This program is basically representing an audio visualizer. The moving rectangle (regulator) is always in the centre and the object is called once to create a static regulator at the beginning.
2. The ````translate()```` function has helped ideate a position better and in an easier manner. The ````push()```` and ````pop()```` functions help the interpretor to remember and forget the ````translate()```` function accordingly.
3. The class is called ````Visualizer````. It has a default ````constructor```` which takes in two arguments which change the flickering technique.
4. The other functions it has are: ````staticRegulator()```` ````flicker```` ````rotateRegulator````.
5. Most of the functions have constant ````CENTRE```` as the two arguments of ````translate()```` to keep most of them to the middle of the canvas.


#### Problems and learnings:
1. I have learned C++ in Fall 2021 and currently doing it in the course: Data Structures as well. There are some keywords like ````this.<variable>```` that sometimes confuse me. But its fun to learn such things.
2. Implementing the pattern in Object Oriented Programming was a good task and taught me a lot in terms of coding and logic.
3. There is one function that I tried to execute but it didn't work even after so many tries. Basically, I wanted to use:
 ````
   star(x,y)
  {
    this.starX = x;
    this.starY = y;
    rect(this.starX,this.starY,50,50);
    rect(this.starX,this.starY,50,50);
    rotate(radians(45));
    rotate(radians(frameCount));
  }
 ````
 I wanted to create objects for stars to be rotating in 4 corners but executing this function of the object created is creating a problem with the entire visual of the output. 
 
 
