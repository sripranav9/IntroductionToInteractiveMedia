# Interactive Media (Prof. Michael Shiloh)
### Assignment 2 (February 8)
#### Abstract Computer Art:

<img src="https://user-images.githubusercontent.com/92122776/152655963-dc207433-747a-48d9-91fb-fca0ddf32843.png" width=50% height=50%> | <img src="https://user-images.githubusercontent.com/92122776/152657119-d8e1f207-a6ed-46f6-87da-cf66b58b7911.png" width=25% height=25%>


#### Process:

1. I intially started with creating the static elements first that will not change at all. I have used the functions ````rect()```` ````circle()```` ````arc()```` ````line()```` mainly here. 
2. I have then concentrated on the randomized elements that keep changing after every run sequence. The main functions used here apart from the ones mentioned above are: ````random()```` ````stroke()````. I have also employed ````for()```` loops for every randomised pattern I wanted to present. Some of the most used random numbers have been stored in variables: ````randomOne```` and ````randomTwo```` other than some of the others used in the program.
3. The random numbers have been used in such a way that the design will remain constant except for the minor changes in the background and everything is scaled to either 180 degrees or 90 degrees. The for loops have been used in the similar way as well, where the counter is not the default and changed accordingly to achieve the desired results. Here's a snippet from the code to explain this:
````
  let randThree = random(2, 5);
  for (let i = 250; i < 360; i += randThree) //the counter is a random number
  {
    let randomTwo = random(220); //randomTwo is a variable for another random number declared above
    stroke(60);
    line(i, 0, (i += randThree), 400); //line's origin and dimensions given by random variables
  }
  ````

#### Problems:

1. I did not find an easier workaround for increasing the thickness of the line, or on the other hand draw a rectangle with an inclination of an angle.
2. I was wondering if there is a way we could color between two lines.
3. I was also exploring to employ gradients or shaded colors for better presentation but couldn't find any.

#### Background:

This piece has been inspired from the daily elements in our life as a portrayal of things that play a little or major role. The art consists largely of elements- form, colour, line, tone, and texture. In this piece, the three main elements can be taken in two ways: one where they depict the biological essentials of human life, namely oxygen, carbon, and hydrogen. The other is the philosophical perspective where the elements depict growth, knowledge, and hardships in life. The background keeps changing after every run time portraying the lack of control we have on every situation.
