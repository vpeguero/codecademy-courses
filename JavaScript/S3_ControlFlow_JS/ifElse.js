/*
If you think about what we've been doing so far, we've been writing instructions for computers.

That's all programming really is: a list of instructions for computers.

The main difficulty of being a developer is translating our ideas in human-speak into ideas in computer-speak.

Let's learn how we can ask JavaScript to think like us and make decisions like us.

Let's start with human-speak. Many decisions we make everyday boil down to this sentence in some form:

"If something is true, let's do option 1, or else, if it is false, let's do option 2."

This sentence looks fairly similar when we write it with JavaScript. See for yourself:

  var needCoffee = true;
  if (needCoffee) {
      console.log('Finding coffee');
  } else {
      console.log('Keep on keeping on!');
  }

If the variable needCoffee is true, JavaScript will run one code block, and if a variable is false, it will run another.
needCoffee is the condition we are checking inside the if's parentheses. Since it is equal to true, our program will run the code between the first opening curly brace { (line 2) and the first closing curly brace } (line 4). It will completely ignore the else { ... } part. In this case, we'd see 'Finding coffee' log to the console.

Note: Code between curly braces are called blocks. if/else statements have two code blocks.
If we adjusted needCoffee to be false, only the else's console.log will run.
if/else statements are how we can process yes/no questions programmatically.

Instructions

1.
Create a variable named harryPotterFan and set it equal to a boolean, based on your preference.

2.
Then, write an if/else statement that uses harryPotterFan as its condition. If it is true, then log, 'Mischief managed.'. If it is false, then log, 'I lead a muggle\'s life.'.

Note: Why is there a \ in 'I lead a muggle\'s life.'? Since the string is surrounded by single quotes, we can use a back slash to add a single quote within the string. This is called escaping a character.

3.
Nice job!

You just taught JavaScript to make a decision for you.
*/

var harryPotterFan = false;
if (harryPotterFan) {
  console.log('Mischief managed.'); // true output
} else {
  console.log('I lead a muggle\'s life.'); // use \ to escape a character aka include ' inbetween single quotes
  // false output
}

