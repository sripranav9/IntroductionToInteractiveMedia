### Assignment 4 (February 22)
#### Data Visualization:

The horizontal bar graph represents my respiratory rates over a few months. I have used the data from the Health app and exported it in .csv format to visualize the data. The graph represents the respiratory rates above and below the average respiratory rate in different colors. 
_Some data which had no values were removed from the file for the purpose of this assignment._

<img src="https://user-images.githubusercontent.com/92122776/155027778-52a5a968-e69e-4b59-919a-6c7cd8ed96e0.png" width=50% height=50%> 

#### Process:
1. This is a visualization of my respiratory data since 29th September 2021, until date. I have exported the data from my health app through a .csv file.
2. Once imported, I deleted the columns where there was no data (I did not wear the watch then perhaps).
3. Once uploaded, I have calculated the average respiratory rate using a function passing an array (of a column) and the total number of rows as arguments.
````
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
````
Once this returns the average value, this is the fundamental input used to graph the data. The respiratory rates below and above the average rate is plotted accordingly in different colors.
4. For every iteration in the for loop, there is an increment to print the rectangles as bars representing a horizontal bar graph at the end. 

#### Problems and learnings:
1. The ````loadTable()```` function creates a p5.table whose columns can be accessed using the function ````getColumn()````.
2. Some of the new functions I learnt are: ````getRowCount()```` ````getColumn()```` ````split()````.
3. The ````translate()```` function has saved my day.
