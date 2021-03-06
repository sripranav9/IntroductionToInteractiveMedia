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
