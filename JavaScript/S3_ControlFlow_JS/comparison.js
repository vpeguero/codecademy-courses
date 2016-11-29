/*
if/else statements are made even more powerful with comparison operators.

There are two comparisons you might be familiar with:

Less than: <
Greater than: >

You may also recognize these:

Less than or equal to: <=
Greater than or equal to: >=

Comparisons need two things to compare and they will always return a boolean (true or false).

How can we use comparisons and an if/else statement to see if it's time to eat?

Instructions

1.
Write a variable named hungerLevel and set it equal to 5.

2.
Write an if/else statement that checks if hungerLevel is greater than 7. If so, log 'Time to eat!', and if it is less than 7, log 'Let\'s eat later.'.

3.
Notice that since hungerLevel is 5, the if statement evaluates to false, therefore the else's code block runs.

Now set the hungerLevel variable equal to 10 and run your code again.

4.
Now it's 'Time to eat!'

We can use the <, >=, and <= to compare variables in an if/else statement, which is a powerful way to make decisions in JavaScript.

Play around with these operators and values to see how exactly they work.
*/

var hungerLevel = 10; //initially set to 5
if (hungerLevel > 7) { 
    console.log('Time to eat!');
} else {
    console.log('Let\'s eat later');
}
