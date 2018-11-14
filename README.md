# Premier League Predictor Game
Predict sports table with friends, points are calculated on how accurate you are, person with the fewest points wins. 

## Intro
I started coding this as my first JavaScript project on 30/9/2018 to help calculate who's 2018/19 Premier League table prediction was more correct, mine or a friend's. For each position a predicted team is away from its actual position, 1 point is added to that person's total score, making the person with the fewest points the winner.

## Progression

I started by creating arrays of the current and prediction tables in JavaScript. The score is calculated logging the predicted position of the top team, finding the actual position of that team, finding the team's position difference by subtracting the actual position from the predicted position and then adding those points to a points total. The JavaScript cycles through the array and does the same for each team using a for loop.

Once I had the calculation system set up, I created the HTML & CSS files to properly display the tables and clearly show the total score for each player in an attractive layout. The HTML for the current and predicted tables are generated as the script cycles through the array, allowing changes like adding a new team to be completed without having to add any additional HTML.

I added the points each team is adding to the total beside its ranking in the UI, so the user can see how accurate each team is and therefore how many points they are adding to their total. The lower the team's points, the more transparent the number is, making it clearer which predictions are having the biggest effects on the user's total score.

By having each team's full and shortened name's stored in JavaScript objects, I used CSS to switch between the two depending on what screen resolution the user is using. This means the tables are a lot narrower when viewed on a mobile device, where as previously the tables would extend off the screen.

## To do list
1) Continue to streamline the code as my JavaScript ability improves;
2) Allow the teams to be dragged and dropped, allowing the user to alter the current/prediction tables;
3) Have the current table update in real-time via an API to cease the need of manual input;
4) Improve appearance on all devices;
5) Allow user to build their own table to test how accurate it is in comparison to the current table;
6) Add additional comments to the JavaScript file

## Built With

* [Brackets](http://brackets.io/) - IDE
* [Codepen](https://codepen.io/) - Used for additional testing

## Author
* **David Price** - [Website](https://davidwillprice.com)
