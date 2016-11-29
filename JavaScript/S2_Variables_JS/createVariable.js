/*

Let's dive in and see a variable in the wild. Here is how you declare a variable:

  var myName = 'Arya';
  console.log(myName);
  // Output: Arya

You can almost read it aloud: "Variable myName is equal to Arya."

Let's dissect that statement and look at its parts:

var, short for variable, is the JavaScript keyword that will create a new variable for us.
myName is chosen by a developer (that's you!). Notice that the word has no spaces, and each new word is capitalized. This is a common convention in JavaScript, and is called camelCase.
= means to assign whatever's next to the variable.
'Arya' is the value that the equals = assigns into the variable myName.
After the variable is declared, we can print the variable with: console.log(myName). This will print 'Arya' to the console.

Instructions

1.
Variables must be strong to hold all of our stuff. Exactly how strong are they?

Create a variable named strength, and assign the string '50,000 pounds' to it.
2.
Now, under the strength variable, type

console.log('How much stuff can a variable hold? ', strength);
Now we know: What can a variable hold? Just about anything!

*/

var strength = '50,000 pounds';
console.log('How much stuff can a variable hold?', strength);
// Output 50,000 pounds


