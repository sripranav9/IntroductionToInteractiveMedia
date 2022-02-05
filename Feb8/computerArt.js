function setup() {
  //create the canvas and background
  createCanvas(400, 400);
  background(220);
  
  //static throughout
  for (let i =20; i < 100; i+=6){
    fill(100);
    rect(i,0,3.5,400);
  }
  for (let i = 320; i < 390; i+=4.5){
    fill(120);
    rect(0,i,400,2.5);
  }
  
  //random patterns begin
  
  let randomOne = random(120);
  
  //straight line design: left 1
  for (let i =75; i < 75+randomOne; i+=3){
  let randomTwo = random(220);
  line(i,randomTwo, i, randomTwo + 200)
  }
  
  //straight line design: top 1
  for (let i =75; i < 75+randomOne; i+=2){
  let randomTwo = random(220);
  line(randomTwo,i, randomTwo+200, i)
  }
  
  //straight line design: top 2
  for (let i =75; i < 75+randomOne; i+=3){
  let randomTwo = random(220);
  line(randomTwo,i+200, randomTwo+300, i+200)
  }
  
  //right straight lines: top to bottom
  let randThree = random(2,5);
  for (let i = 250; i < 360; i+=randThree){
  let randomTwo = random(220);
  stroke(60);
  line(i, 0, i+=randThree, 400);
  }
  
  //right straight lines: half size 
  for (let i = 250; i < 360; i+=2){
  let randomTwo = random(220);
  stroke(60);
  line(i, 100, i+=randThree, 275);
  }
  
  //top straight lines
  for (let i = 25; i < 120; i++){
  let randomTwo = random(220);
  stroke(30);
  line(0, i, 400, i+=randThree);
  }
  
  //rectangles random
  for (let i=0; i < 8; i++){
    fill(random(20,45));
    rect(random(0,400), random(0,400), random(5,12), random(50,200));
    rect(random(0,400), random(0,400), random(50,200), random(5,12));
    fill(0);
    rect(random(0,400), random(0,400),5,5)
    
  }

}

function draw() {
  
}
