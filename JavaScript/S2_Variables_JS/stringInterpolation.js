/*
In the previous lessons, we've put strings into variables. Now, let's put a variable's value into a string!

Putting a variable in a string uses concepts we've already learned. The JavaScript term for this idea is interpolation.

Interpolwhat?! —Possibly the most fun JavaScript term to say.

We can use the + operator from earlier to interpolate (insert) a variable into a string, like this:

  var myPet = 'armadillo';
  console.log('I own a pet ' + myPet + '.'); 
  // Output: 'I own a pet armadillo.'

Instructions

1.
Create a variable named favoriteAnimal and set it equal to your favorite animal.

2.
Then, use console.log to print: 'My favorite animal: Koala', but replace 'Koala' with your favoriteAnimal variable.

*/

var favoriteAnimal = 'Wolf';
console.log('My favorite animal: ' + favoriteAnimal);
// Output: My favorite animal: Wolf

