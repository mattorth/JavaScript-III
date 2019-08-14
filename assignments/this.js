/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: When in the global scope, the 'this' keyword will show all of the window object.
* 2. Implicit Binding: When calling a function. 'this' refers to the object in the dot notation.
* 3. New binding: When an object is created using the new keyword, the 'this' keyword will refer to the new object.
* 4. Explicit binding: when using call or apply, 'this' is overwritten to whatever object is called.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function speak(words) {
    console.log(this);
    return words; 
}

speak("hello");

// Principle 2

// code example for Implicit Binding
const obj = {
    hometown: 'Burlington',
    origin: function(profession) {
        console.log(`Hello, I am a ${profession} from ${this.hometown}`);
    }
};
obj.origin('developer');

// Principle 3

// code example for New Binding

function Developer(name, language) {
    this.name = name;
    this.favoriteLanguage = language;
    this.speak = function() {
        console.log(`My name is ${this.name} and my favorite language is ${this.favoriteLanguage}`)
    };
}

const matt = new Developer('Matt', 'Javascript');
matt.speak();
const ben = new Developer('Ben', 'Python');
ben.speak();

// Principle 4

// code example for Explicit Binding

matt.speak.call(ben); // this changes to ben
ben.speak.call(matt); // this changes to matt