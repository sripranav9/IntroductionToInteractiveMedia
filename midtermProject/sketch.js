//=====================================================
// Author         : Sri Pranav Srivatsavai
// Course         : Introduction to Interactive Media
// Version        : 1.0
// Date Created   : 28 February 2022
// Date Submitted : 8 March 2022
// Description    : SpeedoType Game
//=====================================================

//switches
var randomSwitch,
  smoothSwitch,
  restartSwitch,
  themeSwitch,
  //strings and arrays
  typed = [],
  //this will be displayed when user chooses
  //not to randomize his test words.
  test0 = "abcdefghijklmnopqrstuvwxyz", //without randomizing
  //our main words are stored in test, for now, we assign
  //the test0 to it to start with.
  test = test0,
  score = [Array(5), Array(5)], //representation of the score
  //declaration of other variables and arrays
  //that will be used later in this program
  scoreIdx = 0,
  // egg = [],
  // best = Infinity,
  // bestBadge = "",
  //booleans
  won = false,
  lost = false,
  //progress and time
  reach = 0,
  time = 0,
  start,
  current,
  //colours
  fg = 0, //foreground color (typing screen)
  bg = 0; //background color

let green, red; //for colors

const marg = 50,
  //this decides the placing of 0.000 and toggles
  spacing = 20;
//this is the spacing between each letter on screen

//this decides which screen the interface presents to the user
let screenNumber;
//if its 0, its the welcome screen, if its 1, its the game.

//This class is used for the toggles (in the game)
//I came across this particular class while doing some research 
//and really wanted the user to have choice with the rangle of toggles
//which further improves interactivity.
class Switch {
  constructor(idx) {
    this.idx = idx;
    this.on = false;
    this.r = 8; //this is to prevent hardcoding the number 8 everytime
    //This also reminds me of Daniel Shiffman's implementations
    
    this.x = 0 + marg + this.r * 2; //0 is not required but it is
    //written to signify that it was for the purpose that its relative
    //to the screen.
    
    this.y = height - marg - this.r * (1 + 3.5 * idx); //similar to x
    
    this.x_ = this.x - this.r; //this is where the toggle's 
    //initial OR OFF position is

    this.x__ = this.x_;
    //this is declared for usage in smooth toggle
    
    this.pct = 0; //for correct and wrong values
  }
  
  //checks if the mouse on the screen is over a certain point or in
  //the area of parameters given in the function, this will be used
  //in other functions below.
  mouseOver() {
    if (dist(mouseX, mouseY, this.x__, this.y) <= this.r) { 
      return true;
    }
    return false; //it automatically means, ELSE do this
  }
  
  toggle() {
    //if the toggle is already ON, turn it OFF
    if (this.on) {
      this.on = false;
    } else { //else, turn the toggle ON since its OFF
      this.on = true;
    }

    this.move(); //the black circle to move
    
    //if these are changed, bring the test back to the start 
    //for this to be done, update necessary variables
    if (this.idx === 1 || this.idx === 3) { 
      //if its auto-restart or random switch
      testCheck(); //call the testCheck function
      reach = 0;
      typed.length = 0;
      won = false;
      lost = false;
    }
  }
  
  move() {
    if (this.on) {
      this.x_ = this.x + this.r; //if toggle should be ON, move to right
      //by given value
    } 
    else {
      this.x_ = this.x - this.r; //if toggle is to be OFF, move to the                                    //left
    }
  }
  
  
  colour() {
    //This is for the user to see that the cursor is actually
    //over the toggle, so it gives a lightened color effect 
    //to show this
    if (this.mouseOver()) {
      this.col1 = color(bg, 100);
    }
    else {
      this.col1 = bg; //if mouse is not over the toggle, color is     
                      //background color
    }
    
    //if the toggle is ON, change the switch to GREEN color
    if (this.on) { 
      this.col2 = lerpColor(green, red, this.pct);
    }
    
    //if the toggle is OFF, chanfe the switch to RED color
    else {
      this.col2 = lerpColor(red, green, this.pct);
    }
    
    //for the theme swtich alone, instead of showing green and red
    //show the theme color for the switch color.
    //again, attention to user experience
    if (this.idx == 0) {
      this.col2 = fg; 
    }
  }
  
  display() {
    
    
    this.x__ += (this.x_ - this.x__) * 0.03;
    this.pct = (abs(this.x_ - this.x__) * 0.5) / this.r;
    this.colour();
    fill(this.col2);
    let k = 1.25;
    rect(this.x, this.y, this.r * 2, this.r * 2 * k);
    circle(this.x - this.r, this.y, this.r * k);
    circle(this.x + this.r, this.y, this.r * k);

    
    fill(this.col1);
    circle(this.x__, this.y, this.r);

    //the swtiches' names correspond to these numbers
    if (this.idx === 0) this.tex = "theme";
    if (this.idx === 1) this.tex = "auto-restart";
    if (this.idx === 2) this.tex = "smooth";
    if (this.idx === 3) this.tex = "random";

    //text options for formatting, color and the text itself
    textFormat(LEFT, CENTER, BOLD, 20);
    fill(fg, themeSwitch.on ? 150 : 250);
    text(this.tex, this.x + this.r * 3, this.y);
  }
}

//the preload function makes sure that the files to be used
//in this program are loaded succesfully before the program run
function preload() {
  strings = loadStrings("words.csv"); //the csv file
  mousePointerImg = loadImage("mouse.png"); //the image
  typingSound = loadSound("typeSound.mp3"); //typingSound at the start
  letsBegin = loadSound("letsBegin.mp3"); //"Let's Begin" sound
}

//required function that runs only once
function setup() {
  
  //if the strings array has no values, there is not need of continuing 
  //with the program as one of the main random funtions wouldn't work
  //so we can terminate the program directly in that case giving an 
  //understandable error on the console, instead of a red p5.js error
  if (strings == null) {
    print("failed to load the file, stopping here");
      
    //this is an endless loop as there is no point in continuing with
    //something that doesn't work or will anyways give an error later
    while (true) {}
  }

  //this measures the window height and width seprate
  //for each computer and creates a canvas
  createCanvas(windowWidth, windowHeight);

  //creating the objects of the switch class
  //for the random, smooth, and two other toggles
  //as you see on the screen (bottom left)
  randomSwitch = new Switch(3);
  smoothSwitch = new Switch(2);
  restartSwitch = new Switch(1);
  themeSwitch = new Switch(0);

  //call the toggle() function for each of these objects
  smoothSwitch.toggle();
  restartSwitch.toggle();
  themeSwitch.toggle();

  //the values inside the bracket are of type Hex color
  //these are alternatives to the RGB version
  green = color("#98D839");
  red = color("#F25438");

  //now takes the first two parameters of rect() to be the center
  //of rectangle to be drawn
  rectMode(CENTER);

  //default, the 3rd and 4th parameters are width and height
  //when its (RADIUS), the 3rd and 4th parameters
  //are half of the width and the height
  ellipseMode(RADIUS);

  //hightlights the stroke of line in rounded edge fashion
  strokeCap(ROUND);
  // noStroke();
  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < score[j].length; i++) {
      score[j][i] = Infinity;
    }
  }
  //set the font
  textFont("Source Sans Pro");

  //initialize the screenNumber
  //set it to 0 as the first screen or the
  //welcome screen
  screenNumber = 0;
}

function WelcomeScreen() {
  background(200);

  //The font sizes are decided upon what is felt
  //right for the screen size and the amount of information
  //presented as instructions
  textSize(50);
  stroke(1);
  strokeWeight(3);
  //13 in width/13 is chosen upon trail and testing
  textAlign(CENTER); //align the text with respect to screen
  text("--Welcome to SpeedoType--", width/2, height/5);
  
  //The sizes are decided upon what is felt
  //right for the screen size and the amount of information
  //presented as instructions
  strokeWeight(1);
  textSize(25);
  text("(Inspired from MonkeyType)", width/2, height / 3.5);
  strokeWeight(2);
  textSize(35);
  text("Instructions:", width/2, height / 2.5);

  //instructions to be displayed
  //The sizes are decided upon what is felt
  //right for the screen size and the amount of information
  //presented as instructions
  strokeWeight(1);
  textSize(20);
  text("1. This is a typing test game.", width/2, height / 2);
  text(
    "2. If you wish, you can choose to get random words.",
    width /2,
    height / 2 + 25
  );
  //since the height of instructions is at a distance of 25 pixels
  //which was found to be optimum after testing, we're incrementing
  //the height by multiples of 25
  
  text("3. Feel free to explore the toggles.", width / 2, height / 2 + 50);
  text(
    "4. You will see your scores recorded on the right.",
    width / 2,
    height / 2 + 75
  );
  text(
    "5. Compete with yourself or your friends and increase",
    width / 2,
    height / 2 + 100
  );
  //the spaces are given to match the point 5 in reading.
  text("your typing speed.", width / 2, height / 2 + 125);

  textSize(35);
  // -20 after testing the text to make it center alligned
  text("Click anywhere to proceed", width / 2, (5 * height) / 6);

  //again, the numbers are chosen upon testing to best fit
  //for the better reading experience of the user
  image(mousePointerImg, width/2, 17.5*height/20, 30, 30);
}

function draw() {
  //Begin with welcome screen
  if (screenNumber == 0) {
    WelcomeScreen();
  }

  //this will be executed when mouseClicked is true
  //and the screenNumber will change to 1
  else {
    theme(); 
    //call the theme function where its default set to dark theme
    
    background(bg);
    ///bg is a variable from the function to store the bg color
    
    //display the switch objects created earlier
    randomSwitch.display();
    smoothSwitch.display();
    restartSwitch.display();
    themeSwitch.display();

    //set the relative point to be the center of the screen
    translate(width * 0.5, height * 0.5);

    if (reach === 0) {
      start = floor(millis());
      if (!won) time = 0;
      current = 0;
    }

    let recCol;
    if (won) recCol = green;
    else if (lost) {
      if (restartSwitch.on) start = floor(millis());
      recCol = red;
      time = floor(millis()) - floor(start);
    } else {
      recCol = fg;
      time = floor(millis()) - floor(start);
    }

    fill(recCol);
    rect(0, 0, width, 100);

    if (smoothSwitch.on) {
      if (current !== reach) current += (reach - current) * 0.1;
    } else current = reach;

    if (reach === test.length) {
      current = 0;
    }

    textFormat(RIGHT, TOP, NORMAL, 30);
    fill(fg, 150);
    for (var i = 0; i < score[scoreIdx].length; i++) {
      if (isFinite(score[scoreIdx][i]))
        text(
          T(score[scoreIdx][i]),
          width * 0.5 - marg,
          marg - height * 0.5 + 30 * i
        );
      //top scores
      else text("-", width * 0.5 - marg, marg - height * 0.5 + 30 * i); //empty score
    }

    textFormat(LEFT, TOP, NORMAL, 30);
    fill(fg, 150);
    text(key, marg - width * 0.5, marg - height * 0.5); //recent key
    textAlign(RIGHT, BOTTOM);
    // text(join(egg, " ") + " " + bestBadge,
    //   width * 0.5 - marg,
    //   height * 0.5 - marg
    // ); //easter eggs

    fill(fg);
    textFormat(CENTER, TOP, BOLD, 50);
    text(T(time), 0, marg - height * 0.5); //time

    translate(-spacing * current, 0);

    for (let i = 0; i < test.length; i++) {
      let opacity = map(spacing * abs(i - current), 0, width * 0.5, 0, 1);
      opacity = 1 - 0.5 * pow(constrain(opacity, 0, 1), 2);
      opacity = 255 * constrain(opacity - (i < reach ? 0 : 0.3), 0, 1);

      fill(bg, opacity);
      textFormat(CENTER, BOTTOM, i < reach ? BOLD : NORMAL, 36);
      text(test.charAt(i), i * spacing, 0); //letters
      stroke(bg, opacity);

      let e;
      if (i === reach) e = 1 - reach + current;
      else if (i === reach - 1) e = reach - current;
      else e = 0;
      strokeWeight(3);
      line(i * spacing, 20, i * spacing, 20 + e * 10);
      noStroke();
    }
  }
}

//when any key is pressed, what should happen?
//This function defines that
//keyPressed involves keys like backspace, return(enter), escape etc.
function keyPressed() {
  
  //if the user started typing and restart switch is OFF and if they 
  //type a backspace
  if (typed.length > 0 && !restartSwitch.on && lost && keyCode === BACKSPACE) {
    
    typed.pop(); 
    //When the auto-restart is off, the user will be able to 
    //delete the character
    
    reach--; //come back in the characters string
    lost = false; //they didnt lose as they have a chance to backspace
    //and program waits for the correct character
  }
}

//when a key is typed, what should happen?
//this function defines that
//keyTyped involves characters like a,b,c,d .. etc.
function keyTyped() {
  if (!lost || typed.length === 0) {
    typed.push(key);
  }
  
  //consider the typed string and join it with the string
  var typedStr = join(typed, "");
  
  //if the user finishes the game go back to start as well
  if (won) {
    reach = 0;
    start = floor(millis());
    time = 0;
    current = 0;
    won = false;
  }
  
  //turn the game back to start as usual
  if (lost && restartSwitch.on) {
    lost = false;
  }
  
  
  
  if (!won) {
    if (
      //convert both to uppercase and then compare
      //this makes the game a little easier
      typedStr.toUpperCase().charAt(reach) === test.toUpperCase().charAt(reach)
    ) {
      reach++; //as a key is typed, if right, proceed forward
      
      //keep proceeding forward and if the the user finishes
      //the test (will be without errors) so they WON.
      //go back to initial state
      if (reach == test.length) {
        won = true;
        reach = 0;
        typed.length = 0;
        scoreCheck();
        if (randomSwitch.on) {
          testCheck(); //check which test the user wants and
          //give that string of test to the user
        }
      }
    } else if (
      //if the characters are not equal, then stay there and flash RED
      typedStr.toUpperCase().charAt(reach) !== test.toUpperCase().charAt(reach)
    ) {
      if (restartSwitch.on) {
        reach = 0;
        typed.length = 0; //auto-restart
        if (randomSwitch.on) {
          testCheck();//check which test is to be shown to the user
          //since random is ON
        }
      } else {
        // if the restartSwitch is OFF and if user doesnt lose, keep
        //going ahead and until the string reaches the last element, 
        //keep incrementing the reach
        if (!lost) // 
          if (reach !== test.length - 1) {
            reach++;
          }
          else {
            //pop the character if reach equals the last character
            typed.pop();
          }
      }
      lost = true; //player lost
    }
  }
}

function mouseClicked() {
  //when the mouse is clicked on welcome screen, 
  //proceed to the next screen, play the sounds.
  if (screenNumber == 0) {
    screenNumber = 1;
    typingSound.play();
    letsBegin.play();
  }
  
  //toggle the different switches when mouse is clicked
  if (randomSwitch.mouseOver()) {
    randomSwitch.toggle();
    testCheck();
  }
  if (smoothSwitch.mouseOver()) {
    smoothSwitch.toggle();
  }
  if (restartSwitch.mouseOver()) {
    restartSwitch.toggle();
  }
  if (themeSwitch.mouseOver()) {
    themeSwitch.toggle();
  }
}

function scoreCheck() {
  //calculate and add the time
  score[scoreIdx].push(time);
  score[scoreIdx].sort(function (a, b) {
    return a - b;
  });
  score[scoreIdx].pop(); //pop the element and store the value
  //to display on the screen
}

function T(t) {
  return (
    //the time is in terms of 0.000
    floor(t * 0.001) + //1st digit
    "." + // .
    floor((t % 1000) * 0.01) + // 3 digits after the point- 1st digit
    floor((t % 100) * 0.1) + //2nd digit
    floor(t % 10) //3rd digit OR decimal
  );
}

function generateRandomLine() {
  let lineOfWords = []; //an array having the words

  let randomRow = int(random(1, 151));
  // loop over each row in the file
  lineOfWords = split(strings[randomRow], ",");

  let temp = ""; //create a temporary string to store and return content
  for (let i = 0; i < lineOfWords.length; i++) {
    
    //this if loop is to ensure that there is no space 
    //at the end of the last word
    if (i == (lineOfWords.length-1)) { 
      temp += lineOfWords[i];
    }
    else {
      temp += lineOfWords[i] + " "; // add a space after every word
      //from the array
    }
  }
  return temp;
}

function theme() {
  
  //if the theme switch is one, make it dark themed
  //else make it light mode
  if (themeSwitch.on) {
    bg = 20; //background color 
    fg = 200; //foreground color with text 
  } else {
    bg = 210;
    fg = 45;
  }
}

//this function checks what kind of test the user wants
//and gives the test to the user. If random is off, it gives 
//test0 and otherwise it gives a random 12 word line from the 
//csv file

function testCheck() {
  //if random is on, take execute this mentioned function
  if (randomSwitch.on) {
    test = generateRandomLine();
    // test = join(testlist, "");
    scoreIdx = 1;
  } 
  
  //otherwise, give the test0 which is the default one
  else {
    test = test0;
    scoreIdx = 0;
  }
}

function textFormat(align1, align2, style, size) {
  //horizontally and vertically align
  textAlign(align1, align2);
  //text styles and sizes are declared 
  textStyle(style);
  textSize(size);
}
