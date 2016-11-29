/*
There are two more extremely useful comparisons we can make. Often times, we might want to check if two things are equal, or if they are not.

To check if two things equal each other, we can use === (three equals in a row).

To check if two things do not equal each other, we can write !== (exclamation with two equals in a row).

Slow down here, this can be easily confused with creating variables. Variables use one equals sign = to assign a value to a variable. When you're comparing two variables, make sure to use three ===.

How can we utilize === or !== and an if/else statement to write a program to see whether a werewolf will turn into its wolf form this evening?

Instructions

1.
Write a variable named moonPhase and set it equal to 'full'.

2.
Write an if/else statement that checks if the moon is full. If the moonPhase is 'full', log 'Howwwwlll!!' to the console, and if it is anything else, log 'I swear I am not a werewolf...'.

3.
Notice the code inside the first block of curly braces { } ran. That's because moonPhase equals 'full', and therefore the condition evaluates to true.

*/

var moonPhase = 'full';
if (moonPhase === 'full') {
  console.log('Howwwwlll!!');
} else {
  console.log('I swear I am not a werewolf...');
}

