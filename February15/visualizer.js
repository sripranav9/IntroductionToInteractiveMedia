function setup() {
  createCanvas(400, 400); //create the canvas to work on
}

function draw() {
  background(255); //create the background

  let objects = [];

  let n = 1; //used to traverse through the array and increment the while loop
  while (n < 6) {
    //create an object everytime the loop is run and pass it into the array
    obj = new Visualizer(50 * n, 300 - 50 * n);
    objects.push(obj);
    n += 1; //increment n by 1: also same as n = n + 1
  }

  //calling flicker function with different colors
  objects[0].flicker(191, 64, 191); //purple shade
  objects[1].flicker(100, 100, 0); //greenish shade
  objects[2].flicker(255, 167, 0); //chrome yellow
  objects[3].flicker(12, 50, 200); //bluish shade
  objects[4].flicker(254, 111, 94); //orangish shade

  //these are necessary to be called
  objects[0].staticRegulator();
  objects[0].rotateRegulator();

  /*always at the end of draw function
  to make sure that the visualizer doesn't occupy entire screen
  here we make an arc and increase the width of the circle*/
  noFill();
  stroke(255);
  strokeWeight(200);
  circle(200, 200, 500);
}

class Visualizer {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.rand = random(600, 900);
  } //end of constructor

  staticRegulator() {
    push(); //remember that I used the translate function here
    translate(width / 2, width / 2); //set the centre for all circles

    //big outer purple circle
    fill(191, 64, 191); //purple color
    stroke(191, 64, 191); //have the same border color as the shape
    circle(0, 0, 130); //at the centre with a radius of 130

    //second black circle
    fill(40); //purple color
    stroke(100); //border color
    circle(0, 0, 120);

    pop(); //now recall where I used translate(), forget that!
  } //end of staticRegulator

  flicker(redValue, greenValue, blueValue) {
    this.red = redValue;
    this.green = greenValue;
    this.blue = blueValue;
    //flickering patters of the visualizer
    for (let i = 0; i < 130; i++) {
      frameRate(0);
      stroke(this.red, this.green, this.blue);
      strokeWeight(4);

      line(this.posX, this.posY, this.rand * sin(i), this.rand * cos(i));
    } //end of for
  } //end of flicker

  rotateRegulator() {
    push();
    translate(CENTRE, CENTRE);
    //moving rectangle
    frameRate(100);
    rotate(radians(frameCount + 180));
    //Begin rotating. start perpendicular to screen, so' +180 '
    fill(150);
    stroke(191, 64, 191); //have the purple border color
    strokeWeight(2);
    rect(-5, -5, 10, 60);
    /*I chose 5 because that's exactly half of the width - 10 as chosen     here*/
    pop();
  } // end of rotateRegulator
} // end of class
