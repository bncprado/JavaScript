// // OBJECTS 

// //syntax
// const product = {//object name
//   name: 'socks',//property: value pair
//   price: 1090//property: value pair 
// }

// console.log(product)
// console.log(product.name)// To access a value inside an object we use the DOT NOTATION that consists in the object name DOT the property
// console.log(product.price)

// //changing the value of a property in an object
// product.name = 'cotton socks'
// console.log(product.name)

// //creating a new property and value pair
// product.newProperty = true
// console.log(product)

// //removing a property from an object
// delete product.newProperty
// console.log(product)

// // Objects are just another TYPE OF VALUE
// console.log(typeof product)

// /* WHY WE USE OBJECTS
// - make our code more organized
// - allow us to group multiple values together
// - allow us to use multiple values together
// */ 

/*------------------------------------------------------------------*/

// /* OBJECTS PART2
// Another way of accessing the values inside an object is using BRACKET NOTATION
// */

// const product2 = {
//   name: 'shirt',
//   ['delivery-time']: '1 day'
// }
// console.log(product2)

// //USING BRACKET NOTATION
// console.log(product2['name'])//does the same thing as DOT NOTATION

// /* When do we use BRACKET NOTATION instead of DOT NOTATION?
// - BRACKET NOTATION lets us use properties that don't work with DOT NOTATION
// EX: */
// // console.log(product2.delivery-time) // in this case, JS thinks the dash separating the words is a minus sign, and will try to do a math operation instead of calling the property of the object. SO WE HAVE TO USE BRACKET NOTATION (EVEN TO CREATE THE PROPERTY)
// console.log(product2['delivery-time'])

// /* we can use anything that results in a value inside the brackets, like a calculation, etc.*/

// /* BRACKET VS DOT NOTATION. WHICH SHOULD WE USE?
// - We use DOT notation by default cause it's shorter and easy to read
// - BRACKET notation for properties that don't work with DOT notation
// */

/*------------------------------------------------------------------*/

// /* We can save any type of value inside an object, as well as another objects*/

// const product2 = {
//   name: 'shirt',
//   ['delivery-time']: '1 day',
//   rating: { 
//     stars: 4.5,
//     count: 87 
//   } //this is called NESTED OBJECT, or an object inside an object. We can use NESTED OBJECTS to make our values more organized
// }
// console.log(product2)
// console.log(product2.name)
// console.log(product2['name'])
// console.log(product2['delivery-time'])

// // To access values inside the inner object, we use dot or bracket notation multiple times. EX:
// console.log(product2.rating.count)

/*------------------------------------------------------------------*/


// /* Another type of value we can put inside an object is a FUNCTION*/

// const product2 = {
//   name: 'shirt',
//   ['delivery-time']: '1 day',
//   rating: { 
//     stars: 4.5,
//     count: 87 
//   },
//   fun: function function1(){
//     console.log('function inside object')
//   }
// }

// console.log(product2)
// console.log(product2.name)
// console.log(product2['name'])
// console.log(product2['delivery-time'])
// console.log(product2.rating.count)
// product2.fun()//calling the function FUN insode the object product2

// /* When we save a function inside an object, we call it METHOD. We've been using methods the whole time. 
// console.log is actually a method. 
// Console is an object provided by JS and log is a function tha is saved inside the console object
// */

// console.log(typeof console)
// console.log(typeof console.log)

// /* Math.random() is another example of a method (function inside an object). Math is also an object provided by JS and random() is a function saved inside the Math object
// */

/*-------------------------------------------------------------------------------------------------*/

//BUILT IN OBJECTS
// console and math objects are built in objects. Built in objects are objects already defined inside the JS language itself. 

/* JSON (JS Object Notation)
It's basically a syntax
It's a similar syntax to a JS Object, but with less features
*/

// //JS Object Syntax
//   {
//   name: 'shirt',
//   ['delivery-time']: '1 day',
//   rating: { 
//     stars: 4.5,
//     count: 87 
//   },
//   fun: function function1(){
//     console.log('function inside object')
//   }
// }

/* JSON Syntax 
DIFFERENCES:  
- all properties and strings must use double quotes (""). JSON doesn't support single quotes ('')
- JSON also doesn't support functions
- It's basically a JS syntax with less features
*/

//   {
//   "name": "shirt",
//   "delivery-time": "1 day"
//   "rating": { 
//     "stars": 4.5,
//     "count": 87 
//   },
// }

/* WHY USE JSON INSTEAD OF JS
JS Object only makes sense only in JS and JSON syntax can be understood by almost every programming language. 
We use JSON:
- when we send data between computers
- when we store data
*/

/*-------------------------------------------------------------------------------------------------*/

//BUILT IN JSON OBJECT

/*-------------------------------------------------------------------------------------------------*/

// //Converting from JS to JSON

// const product2 = {
//   name: 'shirt',
//   ['delivery-time']: '1 day',
//   rating: { 
//     stars: 4.5,
//     count: 87 
//   },
//   fun: function function1(){
//     console.log('function inside object')
//   }
// }

// console.log(product2)
// console.log(product2.name)
// console.log(product2['name'])
// console.log(product2['delivery-time'])

// console.log(product2.rating.count)
// product2.fun()

// console.log (typeof console.log)

// const jsonString = JSON.stringify(product2)

// console.log(JSON.stringify(product2))//note the function inside product2 it's not here cause JSON doesn't support functions
// console.log(typeof JSON.stringify(product2))//One thing to note about stringify is that it results in a string.

/*-------------------------------------------------------------------------------------------------*/

// //Converting back from JSON to JS

// const product2 = {
//   name: 'shirt',
//   ['delivery-time']: '1 day',
//   rating: { 
//     stars: 4.5,
//     count: 87 
//   },
//   fun: function function1(){
//     console.log('function inside object')
//   }
// }

// const jsonString = JSON.stringify(product2)

// JSON.parse(JSON.stringify(product2))

// console.log(JSON.parse(jsonString))

/*-------------------------------------------------------------------------------------------------*/

//BUILT IN OBJECT: localStorage
// Used to save values more permanently

//REFER TO: 8.rock-paper-scissors.html

/*-------------------------------------------------------------------------------------------------*/

// MORE DETAILS ABOUT OBJECTS

/*-------------------------------------------------------------------------------------------------*/

// /*NULL VS UNDEFINED

// null is one of the falsy values in JS, it's similar to the value undefined. They both represent that something doesn't have a value. 

// We use null and we intentionally want something to be empty

// If a function has parameters, we can give a parameter a default value. If the parameter is undefined, it'll use the default value. 

// If we set the parameter to null, it won't use the defalt value
// EX.      */

// function sabor (sabor = 'qualquer'){
//   console.log(`Me ve uma pizza sabor ${sabor}`)
// }

// sabor('queijo')
// sabor()
// sabor(undefined)
// sabor(null)

/*-------------------------------------------------------------------------------------------------*/

/*AUTO-BOXING

How strings can have PROPERTIES and METHODS if they aren't an OBJECT?
WITH AUTO-BOXING
JS automatically wraps the string in a special object first, and this object has the property lenght and the method uppercase.
*/

console.log('hello'.length)//lenght is a PROPERTY that tells the number of characters. In this case, 5
console.log('hello'.toUpperCase())//toUpperCase() is a METHOD that converts the string to UPPER CASE. In this case, HELLO

/*
Auto-boxing also works with other types of values like numbers and booleans. 

It DOESN'T work with null and undefined. It'd return an error if we tried*/

/*-------------------------------------------------------------------------------------------------*/

//OBJECTS ARE REFERENCES (THIS IS REALLY IMPORTANT)

const object1 = {
  message: 'hello'
}
/*  When we create an object, the value of the object is stored somewhere in the computer's memory.
*/

const object2 = object1 //this variable doesn't make a copy of the object. It just makes a copy of the reference that points to the object. This is called 'copy by reference`.

object2.message = 'Good job'/*we changed the value inside object1, cause the value is in the computer's memory, not in the variable. 
Mind that 'object2' is a constant. Even though, we were able to change the value inside the property 'message' because objects are stored in the computer's memory, not in the variable 
"Const" prevents us from changing the values inside a variable, but it doesn't prevent us from reaching into the reference and changing the object that it's pointing to.
*/

//When you create a variable, you store the value inside the variable and that's it. When you create an object, even though we use a variable to name the object, the properties and values inside the object are stored in the computer's memory, not in the variable. The variable is just a shortcut to the object

console.log(object2)
console.log(object1)

//WE CAN'T COMPARE OBJECTS DIRECTLY

const object3 = {
  message: 'Good job'
}

console.log(object3 === object1)
//it'll return false cause we're comparing the reference (shortcut) and not the values inside the object. Even though the object3 has the same property and values, they're stored in a different place in the computer's memory

console.log(object2 === object1)
//it'll return true cause they both refer to the same place in the computer's memory

//to compare the values inside, we must do it manually
console.log(object3.message === object1.message)
//now it returns true

//SHORTCUT FOR OBJECTS https://youtu.be/SBmSRK3feww?t=20615

const object4 = {
  message: 'Object 4',
  price: 799
}

// DESTRUCTURING

//const message = object4.message
const{message,price}= object4
console.log(message)
console.log(price)

// SHORTHAND PROPERTY

const object5 = {
  //message: message
  message, //If property and variable name are the same, you can use just one
  
  //SHORTHAND METHOD
  // method: function function1(){
  //   console.log('method')
  // }
  method(){
    console.log('method') 
  } // this code does the same as the function that starts in the 329 and ends in the 331
}

console.log(object5)
object5.method()  

/* IN THIS LESSON
We learned another type of value called objects.

1. Objects = group related values together.
2. Added a score to Rock Paper Scissors.
3. Built-in objects (JSON, localStorage).
4. More details (null, auto-boxing, references).
5. Shortcuts (destructuring, shorthand property, shorthand method).

EXERCISES: https://prod.liveshare.vsengsaas.visualstudio.com/join?EFF7BF6723340D3190B464511139F2C8A7F1

*/