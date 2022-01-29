function setup() {
  createCanvas(400, 400);
  background(215);
  
  fill(250, 220, 175)
  arc(200, 170, //center of the arc
      100, 150, //width and height 
      radians(360), radians(180) ) // start and stop angle
  
  //Ears 
  arc(150, 175, 20, 20, HALF_PI, PI + HALF_PI, OPEN); //left
  arc(250, 175, 20, 20, PI + HALF_PI, HALF_PI, OPEN); //right
  
}

// function draw(){
//   print(mouseX, mouseY)
// }
