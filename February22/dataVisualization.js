let data; // to store the contents of the file

//pre-load makes sure that file is loaded before the program is run
function preload() {
  data = loadTable("Health Data.csv", "csv", "header");
  /* the first argument is the file name.
     "csv" denotes file type.
     "header" denotes it has a header row
  */
}

function setup() {
  createCanvas(400, 400);
  noLoop(); //do not repeat the draw() function. Run only ONCE.
    
  if (data == null) {
    print("Failed to load the file, stopping here");

    // this is done to prevent the program from running
    //since there is no point in running the program
    //with an empty dataset
    while (true) {}
  }
  print("Data loaded from file successfully!" );
}

function draw() {
  background(20); //create a background

  //create a legend
  push(); //remember am using translate now.
  translate(width - width / 4, height / 30); //top right position for a legend on a graph

  //white box to contain legend
  fill(220);
  //these numbers 4.5 and 8 are chosen in such a way that 
  //it does not coincide with the bars.
  rect(0, 0, width / 4.5, height / 8);
  //Dark Gray box of the legend denoting Low Resp. Rate
  fill(70);
  rect(5, 7, 15, 15); //cautiously chosen numbers to prevent overlapping
  //Light gray box of the legend denoting High Resp. Rate
  fill(130);
  rect(5, 28, 15, 15); //cautiously chosen numbers to prevent overlapping
  //Text Font to describe colors in legend
  fill(0);
  textSize(8); //set the text size
  textFont("Courier New"); //set the font style
  text("Low Resp.Rate", 24, 14); //Put the text at this position
  textSize(7.5);
  text("High Resp.Rate", 24, 35);
  pop(); //forget the translate that I used before.

  //this is to make sure there is content in data
  if (data) {
    //get the amount of rows in the CSV
    let numRows = data.getRowCount();
    print(numRows); //print the number of rows in the console

    //get the column titled Respiratory Rate (count/min)
    let respRates = data.getColumn("Respiratory Rate (count/min)");
    //get the column titled Start
    let startStamp = data.getColumn("Start");

    //print the dates
    fill(240);
    textSize(10);
    /*-2 removes from the year since its -2021 etc. So we can          
    only get the date and month*/
    //get the initial date
    let splitStartDate = split(startStamp[0], "-2");
    text(splitStartDate[0], 10, 22);

    /*since numRows includes header as well but the startStamp         
    doesn't we have only (numRows - 1) values in the array */
    let splitEndDate = split(startStamp[numRows - 1], "-2"); //get the final date
    text(splitEndDate[0], 10, 388);

    /*this is being printed to see the arrays being imported. We     
    can check the values here */
    print(respRates);
    print(startStamp);

    /*pass the arguments - array of values of a column and number of rows
      to find the avg*/
    let avg = findAvg(respRates, numRows);

    //iterate over the number of rows
    for (let i = 0; i < numRows; i++) {
      let x = 50;
      /*i*5 will increment by 5 each time the loop runs
        this will make sure the bars are below each other*/
      let y = 15 + i * 5;

      //miles by itself was small, so *8 to get a bigger bar
      let w = respRates[i] * 8; //width of the bar
      let h = 5; //height of the bar

      /*it prints the rates below and above avg value
        in different colors*/
      if (respRates[i] < avg) {
        fill(70);
      }
      if (respRates[i] > avg) {
        fill(130);
      }
      rect(x, y, w, h);
    }
  } else {
    print("No file found.");
  }
}

//pass the array and total rows
function findAvg(array, totalRows) { 
  let avg = 0;
  let sum = 0;

  for (let i = 0; i < totalRows; i++) {
    //convert string to int to perform operations
    //keep track of sum of all elements and add
    //for every iteration
    sum += int(array[i]); 
  }
  avg = sum / totalRows;

  return avg; //this returns a value
  //after executing the function
}
