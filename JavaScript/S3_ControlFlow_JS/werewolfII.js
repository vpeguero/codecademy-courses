/*
if/else statements are either this or that for us right now. They answer questions that are either yes or no.

What can we do if we have a question that has multiple yes conditions, or multiple no conditions?

We can add more conditions to our if/else statement with: else if. Check out how this fits into our current knowledge of if/else statements:

  var stopLight = 'green';

  if (stopLight === 'red') {
    console.log('Stop');
  } else if (stopLight === 'yellow') {
    console.log('Slow down');
  } else if (stopLight === 'green') {
    console.log('Go!');
  } else {
    console.log('Caution, unknown!');
  }

1. We created a variable named stopLight that is assigned to the String 'green'.

2. Then, there's an if/else statement with multiple conditions, using else if. else if allows us to find multiple states of the stopLight variable, and output different things based on its color.

3. The whole thing ends with the singular else we know and love. The else is a catch-all for any other situation. For instance, if the stopLight was blinking blue, the last else would catch it and return a default message.

1.
We all know that turning into a werewolf is not an instant thing. It happens in stages. So let's expand our program from before to accommodate that fact.

If the moon is 'mostly full', log 'Arms and legs are getting hairier' If the moon is 'mostly new', log 'Back on two feet'.

If someone enters in an invalid moon phase, make sure to the final else to log 'Invalid moon phase'.

2.
Set moonPhase to 'mostly full' and run your code.

We expect 'Arms and legs are getting hairier' to log to the console.

3.
Set moonPhase to 'mostly new' and run your code.

We expect 'Back on two feet' to log to the console.

4.
Now set moonPhase to 'solar eclipse' and run your code.

Since there is not an else if condition for 'solar eclipse', we expect the default else code block to run. You should see 'Invalid moon phase' print to the console.

5.
Nice work! We just made a decision tree with multiple conditions using an if statement with else if conditions.

*/

var moonPhase = 'solar eclipse';

if (moonPhase === 'full') {
  console.log('Howwwwlll!!');
} 
else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting harier');
}
else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
}
else if (moonPhase === 'not a wolf') {
  console.log('I swear I am not a werewolf...');
}
else {
  console.log('Invalid moon phase');
}

