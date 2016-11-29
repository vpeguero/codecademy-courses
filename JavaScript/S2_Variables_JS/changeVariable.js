/*
Why do we care about variables?

Variables are useful in two ways:

They allow us to use the same value over and over, without having to write a string or other data type over and over.
More importantly, we can assign variables different values that can be read and changed by the program without altering our code.
For example, a weather app can show you a different high temperature every day. Instead of writing a new website everyday, they store the information in a variable and just change the value of that variable.

We can change a variable's value if we want, like this:

  var weatherCondition = 'Monday: Raining cats and dogs';
  weatherCondition = 'Tuesday: Sunny';

  console.log(weatherCondition); 
  // Output: 'Tuesday: Sunny'

We created a variable by using the keyword var and the name weatherCondition.
Then, we took the existing weatherCondition variable, and set its value equal to 'Tuesday: Sunny'.
True to their name, variables are indeed variable.

1.
Create a variable on line 1 named morningAlarm and set it to '6:30AM'.

2.
On line 2, set morningAlarm equal to another time that's better for you, that is not at 6:30AM.

3.
On line 3, use

  console.log('Morning alarm is set to: ', morningAlarm)

to print out your alarm to the console.

Notice that you successfully changed the variable's value because of your code on line 2.

*/

var morningAlarm = "6:30AM";
morningAlarm = "7:00AM";
console.log("morning alarm is set to: ", morningAlarm);

