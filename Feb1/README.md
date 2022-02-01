# Interactive Media (Prof. Michael Shiloh)
### Assignment 1 (February 1)
#### Self Portrait:

<img src="https://user-images.githubusercontent.com/92122776/151812679-1c095272-fd2a-474a-9e38-0c4ec73c2c13.png" width=50% height=50%>

#### Code:

````
function setup() {
  createCanvas(400, 400);
  background(215);
  
  fill(250, 220, 175)
  //rectangle for hair skin
  rect(150, 168, 99, -20)
  
  //rectangle for neck
  rect(187, 185, 25, 80);
  
  //rectangle for t-shirt
  fill(171, 214, 230)
  rect(133, 261 ,28, 42) //his right hand
  rect(239, 261 ,28, 42) // his left hand
  rect(160, 261, 80, 95)
  
  //chin or bottom part of the face
  fill(250, 220, 175)
  arc(200, 170, //center of the arc
      100, 150, //width and height 
      radians(360), radians(180) ) // start and stop angle
  
  
  //ears 
  arc(150, 175, 20, 20, HALF_PI, PI + HALF_PI, OPEN); //left
  arc(250, 175, 20, 20, PI + HALF_PI, HALF_PI, OPEN); //right
  
  //specs
  fill(80);
  line(163, 173, 150, 165); //left
  line(237, 173, 250, 164); //right 
  line(195, 176, 205, 176);
  rect(163, 166, 32, 19); //left
  rect(205, 166, 32, 19); //right 
  
  //hair
  triangle(210,149,169,162,150,147);
  triangle(248, 147, 210, 147, 225, 168);
  arc(200, 149, 100, 100, PI, 0);
  
  //nose
  fill(250, 220, 175);
  arc(200, 200, 10, 10, 0, PI, OPEN);
  
  //mouth 
  arc(200, 220, 25, 25, radians(30), radians(150), OPEN);
  
  //hands 
  rect(140, 303, 10, 40) //his right hand
  rect(251, 303, 10, 40) // his left hand
  
}

// function draw(){
//   print(mouseX, mouseY)
// }

````

#### Interesting things found:
1. I could check the RGB ratios of a particular color that I wish to have and convert those percentages with respect to scale of 255 to get the required color. 
2. I added another argument 'radius' into the ````rect()```` function to have rounded corners for the reactangle. 

#### Challenges Faced:
1. I have estimated the canvas size incorrectly and now it is hard to change the canvas size alone as it changes its dimensions with respect to (0,0) co-ordinates. 
2. It was not possible for me to orient a rectangle in a different angle (for the hands of the T-shirt).
3. I tried to color between two lines but wasn't sure how that works.
