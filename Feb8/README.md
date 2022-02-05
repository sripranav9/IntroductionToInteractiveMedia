# Interactive Media (Prof. Michael Shiloh)
### Assignment 2 (February 8)
#### Abstract Computer Art:

<img src="https://user-images.githubusercontent.com/92122776/152655963-dc207433-747a-48d9-91fb-fca0ddf32843.png" width=50% height=50%> | <img src="https://user-images.githubusercontent.com/92122776/152657119-d8e1f207-a6ed-46f6-87da-cf66b58b7911.png" width=25% height=25%>


#### Code:

````
function setup() {
  //create the canvas and background
  createCanvas(400, 400);
  background(220);

  //static throughout
  for (let i = 20; i < 100; i += 6) {
    fill(100);
    rect(i, 0, 3.5, 400);
  }
  for (let i = 320; i < 390; i += 4.5) {
    fill(120);
    rect(0, i, 400, 2.5);
  }
  
  //abstract material
  fill(255,239,199);
  rect(160,250,80,130);
  arc(200, 250, 80, 80, PI, PI+PI);
  fill(137, 216, 230);
  arc(260, 385, 120, 120 , PI, PI+PI)
  
  //left across
  line(0, 300, 350, 0);
  line(0, 301, 351, 0);
  line(0, 302, 352, 0);
  line(0, 303, 353, 0)
  line(0, 304, 354, 0)
  line(0, 305, 355, 0)
  line(0, 306, 356, 0)
  //right across
  line(220, 0, 400, 150);
  line(219, 0, 400, 149);
  line(218, 0, 400, 148);
  line(217, 0, 400, 147);
  line(216, 0, 400, 146);
  line(215, 0, 400, 145);
  line(214, 0, 400, 144);
  

  //random patterns begin
  
  //red circle 
  

  let randomOne = random(120);

  fill(120);
  //straight line design: left 1
  for (let i = 75; i < 75 + randomOne; i += 3) {
    let randomTwo = random(220);
    line(i, randomTwo, i, randomTwo + 200);
  }

  //straight line design: top 1
  for (let i = 75; i < 75 + randomOne; i += 2) {
    let randomTwo = random(220);
    line(randomTwo, i, randomTwo + 200, i);
  }
  
  for (let i = 75; i < 75 + randomOne; i += 2) {
    let randomTwo = random(220);
    line(i, randomTwo, i, randomTwo + 200);
  }

  //straight line design: top 2
  for (let i = 75; i < 75 + randomOne; i += 3) {
    let randomTwo = random(220);
    line(randomTwo, i + 200, randomTwo + 300, i + 200);
  }

  //right straight lines: top to bottom
  let randThree = random(2, 5);
  for (let i = 250; i < 360; i += randThree) {
    let randomTwo = random(220);
    stroke(60);
    line(i, 0, (i += randThree), 400);
  }
   
  fill(148,35,20);
  circle(270, 170, 80);

  //right straight lines: half size
  for (let i = 250; i < 360; i += 2) {
    let randomTwo = random(220);
    stroke(60);
    line(i, 100, (i += randThree), 275);
  }

  //top straight lines
  for (let i = 25; i < 120; i++) {
    let randomTwo = random(220);
    stroke(30);
    line(0, i, 400, (i += randThree));
  }

  //straight line design below top
  for (let i = 175; i < 275 + randomOne; i += 2) {
    let randomTwo = random(220);
    line(randomTwo, i, randomTwo + 200, i);
  }
}
````
#### Process:

1. I intially started with creating the static elements first that will not change at all. I have used the functions ````rect()```` ````circle()```` ````arc()```` ````line()```` mainly here. 
2. I have then concentrated on the randomized elements that keep changing after every run sequence. The main functions used here apart from the ones mentioned above are: ````random()```` ````stroke()````. I have also employed ````for()```` loops for every randomised pattern I wanted to present. Some of the most used random numbers have been stored in variables: ````randomOne```` and ````randomTwo```` other than some of the others used in the program.
3. The random numbers have been used in such a way that the design will remain constant except for the minor changes in the background and everything is scaled to either 180 degrees or 90 degrees. The for loops have been used in the similar way as well, where the counter is not the default and changed accordingly to achieve the desired results.

#### Problems:

1. I did not find an easier workaround for increasing the thickness of the line, or on the other hand draw a rectangle with an inclination of an angle.
2. I was wondering if there is a way we could color between two lines.
3. I was also exploring to employ gradients or shaded colors for better presentation but couldn't find any.

#### Background:

This piece has been inspired from the daily elements in our life as a portrayal of things that play a little or major role. The art consists largely of elements- form, colour, line, tone, and texture. In this piece, the three main elements can be taken in two ways: one where they depict the biological essentials of human life, namely oxygen, carbon, and hydrogen. The other is the philosophical perspective where the elements depict growth, knowledge, and hardships in life. The background keeps changing after every run time portraying the lack of control we have on every situation.
