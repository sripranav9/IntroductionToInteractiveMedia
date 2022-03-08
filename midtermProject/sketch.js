//=====================================================
// Author         : Sri Pranav Srivatsavai
// Course         : Introduction to Interactive Media
// Version        : 1.0
// Date Created   : 28 February 2022
// Date Submitted : _ March 2022
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
  egg = [],
  best = Infinity,
  bestBadge = "",
  //booleans
  won = false,
  lost = false,
  //progress and time
  reach = 0,
  time = 0,
  start,
  current,
  //colours
  fg = 0,
  bg = 0;

let green, red;

const marg = 50,
  //this decides the placing of 0.000 and toggles
  spacing = 20;
//this is the spacing between each letter on screen

//this decides which screen the interface presents to the user
let screenNumber;
//if its 0, its the welcome screen, if its 1, its the game.

//This class is used for the toggles (in the game)
//reference: https://github.com/vincentsijben/p5js-typing-
//game/blob/master/js/sketch.js

class Switch {
  constructor(idx) {
    this.idx = idx;
    this.on = false;
    this.r = 8;
    this.x = 0 + marg + this.r * 2;
    this.y = height - marg - this.r * (1 + 3.5 * idx);
    this.x_ = this.x - this.r;

    this.x__ = this.x_;
    //this is declared for usage in smooth toggle

    this.pct = 0;
  }
  mouseOver() {
    if (dist(mouseX, mouseY, this.x__, this.y) <= this.r) return true;
    return false;
  }
  toggle() {
    if (this.on) {
      this.on = false;
    } else {
      this.on = true;
    }

    this.move();
    if (this.idx === 1 || this.idx === 3) {
      testCheck();
      reach = 0;
      typed.length = 0;
      won = false;
      lost = false;
    }
  }
  move() {
    if (this.on) {
      this.x_ = this.x + this.r;
    } else {
      this.x_ = this.x - this.r;
    }
  }
  colour() {
    if (this.mouseOver()) this.col1 = color(bg, 100);
    else this.col1 = bg;
    if (this.on) this.col2 = lerpColor(green, red, this.pct);
    else this.col2 = lerpColor(red, green, this.pct);
    if (this.idx == 0) this.col2 = fg;
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
    if (this.idx === 0) this.tex = "theme";
    if (this.idx === 1) this.tex = "auto-restart";
    if (this.idx === 2) this.tex = "smooth";
    if (this.idx === 3) this.tex = "random";

    textFormat(LEFT, CENTER, BOLD, 20);
    fill(fg, themeSwitch.on ? 150 : 250);
    text(this.tex, this.x + this.r * 3, this.y);
  }
}

function preload() {
  strings = loadStrings("words.csv"); //the csv file
  mousePointerImg = loadImage("mouse.png"); //the image
  typingSound = loadSound("typeSound.mp3");
  letsBegin = loadSound("letsBegin.mp3");
}

function setup() {
  if (strings == null) {
    print("failed to load the file, stopping here");

    // this is an endless loop; it's a common way
    // to prevent a program from continuing when
    // something is so wrong that there is no sense
    // in continuing
    while (true) {}
  }

  // generateRandomLine();
  //call the function to generate a random
  //line everytime a random line is called by the user

  //this measures the window height and width seprate
  //for each computer
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
  green = color("#98D839");
  red = color("#F25438");

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
  textAlign(CENTER);
  text("--Welcome to SpeedoType--", width/2, height/5);
  
  
  strokeWeight(1);
  textSize(25);
  text("(Inspired from MonkeyType)", width/2, height / 3.5);

  strokeWeight(2);
  textSize(35);
  text("Instructions:", width/2, height / 2.5);

  //instructions to be displayed
  strokeWeight(1);
  textSize(20);
  text("1. This is a typing test game.", width/2, height / 2);
  text(
    "2. If you wish, you can choose to get random words.",
    width /2,
    height / 2 + 25
  );
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
    text(
      join(egg, " ") + " " + bestBadge,
      width * 0.5 - marg,
      height * 0.5 - marg
    ); //easter eggs

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

function keyPressed() {
  if (typed.length > 0 && !restartSwitch.on && lost && keyCode === BACKSPACE) {
    
    typed.pop(); 
    //When the auto-restart is off, the user must be able to 
    //delete the character
    
    reach--;
    lost = false;
  }
}

function keyTyped() {
  if (!lost || typed.length === 0) {
    typed.push(key);
  }
  
  var typedStr = join(typed, "");
  if (won) {
    reach = 0;
    start = floor(millis());
    time = 0;
    current = 0;
    won = false;
  }
  if (lost && restartSwitch.on) {
    lost = false;
  }

  if (!won) {
    if (
      typedStr.toUpperCase().charAt(reach) === test.toUpperCase().charAt(reach)
    ) {
      reach++;
      if (reach == test.length) {
        won = true;
        reach = 0;
        typed.length = 0;
        scoreCheck();
        // eggCheck();
        if (randomSwitch.on) {
          testCheck();
        }
      }
    } else if (
      typedStr.toUpperCase().charAt(reach) !== test.toUpperCase().charAt(reach)
    ) {
      if (restartSwitch.on) {
        reach = 0;
        typed.length = 0;
        if (randomSwitch.on) testCheck();
      } else {
        if (!lost)
          if (reach !== test.length - 1) reach++;
          else typed.pop();
      }
      lost = true;
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
  
  //toggle the switches when mouse is clicked
  if (randomSwitch.mouseOver()) {
    randomSwitch.toggle();
    testCheck();
  }
  if (smoothSwitch.mouseOver()) smoothSwitch.toggle();
  if (restartSwitch.mouseOver()) restartSwitch.toggle();
  if (themeSwitch.mouseOver()) themeSwitch.toggle();
}

function scoreCheck() {
  score[scoreIdx].push(time);
  score[scoreIdx].sort(function (a, b) {
    return a - b;
  });
  score[scoreIdx].pop();
}

function T(t) {
  return (
    floor(t * 0.001) +
    "." +
    floor((t % 1000) * 0.01) +
    floor((t % 100) * 0.1) +
    floor(t % 10)
  );
}

function generateRandomLine() {
  let lineOfWords = []; //an array having the words

  let randomRow = int(random(1, 151));
  // loop over each row in the file
  lineOfWords = split(strings[randomRow], ",");

  let temp = "";
  for (let i = 0; i < lineOfWords.length; i++) {
    
    //this if loop is to ensure that there is no space 
    //at the end of the last word
    if (i == (lineOfWords.length-1)) { 
      temp += lineOfWords[i];
    }
    else {
      temp += lineOfWords[i] + " ";
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
    print(test);
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
  textAlign(align1, align2);
  textStyle(style);
  textSize(size);
}
