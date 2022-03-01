//Declaring the GLOBAL VARIABLES
let ground; //this is for the ground

let arrBricks = []; //this array saves the objects of Bricks
let world, engine;
//these are necessary for matter.js to run
//matter.js has 3 main components: a world,
// an engine, and body/bodies.
// world and engine are declared above.
// the bodies are delcared in the array of bodies

//Declare a class of Ground
class Ground {
  //the constructor creates a rectangle, and adds a body to the world.
  constructor(x, y, wdth, hght) {
    this.body = Matter.Bodies.rectangle(x, y, wdth, hght);
    Matter.World.add(world, this.body);
    
    //initialises the width and height of the body
    this.wdth = wdth; //wdth is the width
    this.hght = hght; //hght is the height
    
    //when there is gravity, the colleciton of bodies just fall
    //But, we want to the ground to stay static or in its place. 
    this.body.isStatic = true;
  }

  //well, the Body is created. How do I show it on
  //the screen? This function shows the body on the screen
  show() {
    //the position and angle are kept constant
    const pos = this.body.position;
    const angle = this.body.angle;
    push(); //remember I used translate now
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    //this is done so that the arguemnts of the rect function
    //map to the center of the rectangle now, and not the left
    //corner how its usually done
    rectMode(CENTER); 
    rect(0, 0, this.wdth, this.hght);
    pop(); //recall where I used translate?! Forget that
  }
}

//Declare a class of Bricks:
//This class is extremely similar to the Ground Class.
class Brick {
  constructor(x, y, wdth, hght) {
    this.body = Matter.Bodies.rectangle(x, y, wdth, hght);
    Matter.World.add(world, this.body);
    this.wdth = wdth; //wdth is the width
    this.hght = hght; //hght is the height
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    rect(0, 0, this.wdth, this.hght);
    pop();
  }
}

//delcaring the size of the array
//this number is chosen randomly for testing purposes
const arrSize = 15;

function setup() {
  createCanvas(600, 400);

  //this is a function of matter-js that
  //intitates or creates a new engine in the world
  engine = Matter.Engine.create();

  //world is created automatically upon creation
  //of the engine. So we can directly call it
  world = engine.world;

  //creating a new object of the class ground
  ground = new Ground(width / 2, height - 10, width, 20);

  //insert the objects into the arrBricks
  for (let i = 0; i < arrSize; i++) {
    //create a new object Brick for every iteration
    //the parameters are randomised to show the physics
    //involved in this motion after every runtime
    let brick = new Brick(
      random(200, 400),
      random(0, 300),
      random(10, 30),
      random(50, 100)
    );

    //add this object into the array
    arrBricks.push(brick);
  }
  //since the brick object is created in the loop, its
  //forgetten after each iteration, so one brick object
  //acts as a temporary storehouse of an object to put
  //into the loop
}

function draw() {
  //create a new background everytime
  background(0);

  //this function of matter moves the simulation forward
  Matter.Engine.update(engine);

  //call the show function to show the ground
  ground.show();

  //call the show funciton for all the Brickses
  //so traverse through the array using a for loop
  //and call the show the function of each object
  for (let i = 0; i < arrSize; i++) {
    arrBricks[i].show();
  }
}
