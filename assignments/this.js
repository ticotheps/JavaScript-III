/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding

        This type of binding sets the context of the "this" keyword to the 'window,'
        which is, essentially, the outer-most scoped object of JavaScript.

* 2. Implicit Binding

        This type of binding automatically sets the context of the "this" keyword to
        whatever object directly precedes the dot in the invocation of a function.
        For instance, in the function invocation "myObj.sayHello('Tico')", the 
        "this" keyword is referring to the "myObj".

* 3. New Binding

        This type of binding sets the context of the "this" keyword to the specific
        instance of the object that has been created and is returned by the constructor
        function.

* 4. Explicit Binding

        This type of binding requires manually setting (by the developer) the context
        of the "this" keyword with JavaScript's ".call()" and ".apply" methods.
        
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// const hooper = {
//     name: 'Jake Thomas',
//     shoes: 'Nike',
//     buckets: function() {
//         // With window binding, 'shoes' cannot be found
//       console.log(`${this.name} loves to wear ${shoes} sneakers when hooping.`);
//     }
//   };
  
//   hooper.buckets();

// Principle 2

// code example for Implicit Binding

const hooper = {
    name: 'Jake Thomas',
    shoes: 'Nike',
    buckets: function() {
        // With Implicit binding, 'name' and 'shoes' can be found because the 'this' keyword is referring to the 'hooper' object
      console.log(`${this.name} loves to wear ${this.shoes} sneakers when hooping.`);
    }
  };
  
  hooper.buckets();

// Principle 3

// code example for New Binding

function allStar(player) {
    this.allStar = player;
    this.team = "West-Conference All Stars";
    this.announcement = function() {
      console.log(`${this.allStar} has just been named one of 2019's ${this.team}!`);
    };
  }
// The 'new' keyword binds the context of the 'this' keyword to the 'allStar' constructor function above
const durant = new allStar('Kevin Durant');

// console.log(durant);
durant.announcement();

// Principle 4

// code example for Explicit Binding

const james = {
    name: 'LeBron James',
};

const skills = ['out-of-this-world athleticism', 'exceptional play-making abilities', 'sick handles' ];

function announcer(skills1, skills2, skills3) {
    console.log(`Ladies and Gentlemen! Let me tell you why ${this.name} will dominate
    in today's basketball game! This guy has: ${skills1}, ${skills2}, and ${skills3}!`);
}

announcer.call(james, ...skills);