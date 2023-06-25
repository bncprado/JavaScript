// //DATA TYPES

// /*
// Number = 1, 2, 100, 3.452
// string = 'hello' or "hello"
// Boolean = true and false
// Null = explicitly set a variable with no value
// undefined = for variables that have not yet been defined 
// Object = Complex data structures - Arrays, Dates, Literals, etc 
// Symbol = Used with objects 
// */

// // STRINGS
// console.log('hello, world')

// let email = 'mario@thenetninja.co.uk'
// console.log(email)

// // STRING CONCATENATION
// let firstName = 'Bruno'
// let lastName = 'Prado'
// let fullName = firstName + lastName
// console.log(fullName)//without space in the console
// fullName = firstName + ' ' + lastName
// console.log(fullName)//with space in the console

// // GETTING CHARACTERS
// console.log(fullName[0])//zero based language, like Python
// console.log(fullName[2])//zero based language, like Python = 3rd character

// // STRING LENGTH
// console.log(fullName.length)//11 cause the space counts as an space

// // STRING METHODS
// console.log(fullName.toUpperCase())

// let result = fullName.toLowerCase()

// console.log(result, fullName)

// /* Some methods don't alter the original value used beforehand, like the methods we use above */

// let index = email.indexOf('@')
// /* When we pass a value to a method we call it an argument */

// console.log(index) // = 5 = mario@ 
//                           //-----5
//                           //012345

/*--------------------------------------------------------------------------*/

// //COMMON STRING METHODS

// let email = 'mario@thenetninja.co.uk'

// let result = email.lastIndexOf('n')

// console.log(result)

// result = email.slice(0,10)

// console.log(result)

// result = email.substring(4,10)

// console.log(result)

// result = email.replace('n', 'w')//replaces the first 'n' in the string

// console.log(result)

/*--------------------------------------------------------------------------*/

// //NUMBERS

// let radius = 10

// const pi = 3.14

// console.log(radius, pi)

// //MATH OPERATORS = 

// /*

// + plus
// - minus
// * multiplication
// / division
// ** to the power of
// % reminder

// */

// console.log(10/2)

// let result = radius % 3

// result = pi * radius ** 2

// console.log(result)

// //ORDER OF OPERATION = 
// /*
// BIDMAS
// brackets
// indices
// division
// multiplication
// addition 
// subtraction 
// */

// result = 5 * (10-3) ** 2

// console.log(result)

// let likes = 10

// likes = likes + 1 //or likes ++1
// console.log(likes) // 11

// likes ++ //plus 1
// console.log(likes) // 12

// likes -- 
// console.log(likes) // 11

// likes -= 1
// console.log(likes) // 10

// likes *= 2
// console.log(likes) // 20

// likes /= 2
// console.log(likes) // 10

// //NaN - not a number

// console.log(10 / 'hello')
// console.log(10 * 'hello')

// result = 'the blog has ' + likes + ' likes'

// console.log(result)

/*--------------------------------------------------------------------------*/

// // TEMPLATE STRINGS

// const title = 'Best reads of 2019'
// const author = 'Mario'
// const likes = 30

// // CONCATENATION WAY
// // let result = 'The blog called ' + ' by' + author + 'has ' + likes + ' likes' //gigantic string

// // TEMPLATE STRING WAY
// let result = `The blog called ${title} by ${author} has ${likes} likes`
// console.log(result)

// // creating HTML templates

// let html = `
//   <h2>${title}</h2>
//   <p>${author}</p>
//   <span> This blog has ${likes} liles </span>
// `;
  
// console.log (html)

/*--------------------------------------------------------------------------*/

// ARRAYS
// we use arrays to store collections of things like strings, numbers, etc

// let ninjas = ['shaun', 'ryu', 'chun-li']
// // console.log(ninjas[1])// JavaScript is zero based

// // ninjas[1] = 'ken'
// // console.log(ninjas[1])

// // let ages = [20, 25, 30, 35]
// // console.log(ages[2])

// // let random = ['shaun', 'crystal', 30, 20]
// // console.log(random)

// // console.log(ninjas.length)

// // ARRAY METHODS

// // let result = ninjas.join('-')
// // console.log(result)

// // result = ninjas.indexOf('chun-li')
// // console.log(result)

// // result = ninjas.concat(['ken', 'crystal'])
// // console.log(result)

// result = ninjas.push('ken')
// console.log(ninjas)

// result = ninjas.pop()//removes 
// console.log(ninjas)
// console.log(result)

/*--------------------------------------------------------------------------*/

// // NULL AND UNDEFINED
// // Null is an empty value by purpose
// // undefined is a value that hasn't been defined yet

// let age
// console.log(age, age + 3, `the ${age} is age`)

// age = null

// console.log(age, age + 3, `the ${age} is age`)//note that null works as a 0 number value. So 3+0 equals 3. 

/*--------------------------------------------------------------------------*/

// // Booleans = TRUE or FALSE

// // Booleans and comparisons
// console.log(true, false, 'true', 'false')

// // methods can return booleans

// let email = 'luigi@thenetninja.co.uk'

// let result = email.includes('!')
// result = email.includes('@')

// let names = ['mario', 'luigi', 'toad']
// result = names.includes('luigi')
// console.log(result)

// result = names.includes('bowser')
// console.log(result)

// // comparison operators
// let age = 25

// console.log(age == 25)
// console.log(age == 30)
// console.log(age != 30)
// console.log(age != 25)
// console.log(age > 20)
// console.log(age < 20)
// console.log(age <= 25)
// console.log(age >= 25)

// let name = 'shaun'

// console.log(name == 'shaun')
// console.log(name == 'Shaun')
// console.log(name > 'crystal')//true cause S comes after C, so it considers GREATER
// console.log(name > 'Shaun')//true cause lowercase letters are greater than ANY uppercase letters in JS
// console.log(name > 'William')//even though W cames later in the alphabet, lower case is always greater than upper, it doesn't matter the letter

/*--------------------------------------------------------------------------*/
// let age = 25

// // loose comparison (different types can still be equal)
// console.log(age == 25) //true
// console.log(age == '25') //also true cause JS is converting the string into a number to compare
// console.log(age != 25) 
// console.log(age != '25') //it's not differenciating the string from the number, even though a number is a different data type than a string


// // strict comparison (different types cannot be equal)

// console.log (age === 25)
// console.log (age === '25')// false cause it's checking the data type as well
// console.log (age !== 25)
// console.log (age !== '25')// true cause the data types are different so age is not equal (!==) to the string 25

// // type conversion

// let score = '100'
// console.log(score + 1)//it'll return 1001 cause it's concatenating 100 + 1 

// score = Number(score)
// console.log(score + 1)//now it's going to do the math cause we converted the string 100 to the number 100

// console.log(typeof score)
// score = String(101)
// console.log(typeof score)

// let result = Number('hello')
// console.log(result)//NaN

// result = String(50)
// console.log(result, typeof result)//String

// result = Boolean(100)
// console.log(result) //it's a truthy value
// console.log(result, typeof result)
// result = Boolean(0) //it's a falsy value
// console.log(result, typeof result)

// result = Boolean('0')//truthy
// console.log(result, typeof result)

// result = Boolean('')//falsy
// console.log(result, typeof result)

/*--------------------------------------------------------------------------*/

// CONTROL FLOW

// FOR LOOPS

// for (let i = 0; i < 5; i++){
// console.log('in loop:', i)
// }
// console.log('loop finished')

// const names = ['shaun', 'mario', 'luigi']

// for(let i = 0; i < names.length; i++){
//   // console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// WHILE LOOPS

// const names = ['shaun', 'mario', 'luigi']

//let i = 5
// while (i < 5){
//   console.log('in loop:', i)
//   i++
//   }

// while(i<names.length){
//   console.log(names[i])
//   i++
// }

//DO WHILE LOOPS

// do{
//   console.log('val of i is: ', i)
//   i++
// } while(i<5)

// IF STATEMENTS
// const age = 20

// if (age > 20){
//   console.log('you are over 20 years old')
// }

// const ninjas = ['shaun', 'mario', 'luigi', 'yoshi']

// if(ninjas.length>3){
//   console.log("That's a lot of ninjas")
//}

// const password = 'password'

// if (password.length >= 12){
//   console.log('that passowrd is might strong')
// } else if (password.length >= 8){
//   console.log('that password is long enough')
// } else {
//   console.log('that password is not long enough')
// }

// LOGICAL OPERATORS - OR || and AND &&

// const password = 'password'

// if (password.length >= 12 && password.includes('@') ){
//   console.log('that password is might strong')
// } else if (password.length >= 8 || password.includes('@') && password.length >= 5){
//   console.log('that password is strong enough')
// } else {
//   console.log('that password is not strong enough')
// }

// LOGICAL NOT (!)

// let user = false
// if(!user){
// console.log('you must be logged in to continue')
// }
// console.log(!true)
// console.log(!false)

// // BREAK AND CONTINUE
// const scores = [50, 25, 0, 30, 100, 20, 10]

// for(let i = 0; i < scores.length; i++){

//   if(scores[i] === 0){
//     continue
//   }

//   console.log('your score: ', scores[i])

//   if(scores[i] === 100){
//     console.log('congrats. you got the top score!')
//     break
//   } 
// }

// // SWITCH STAEMENTS

// const grade = 'A'
// switch(grade){
//   case 'A': 
//     console.log('You got an A')
//     break
//   case 'B': 
//     console.log('You got an B')
//     break
//   case 'C': 
//     console.log('You got an C')
//     break
//   case 'D': 
//     console.log('You got an D')
//     break
//   case 'E': 
//     console.log('You got an E')
//     break
//   default:
//     console.log('Not a valid grade')
// }

// // VARIABLES AND BLOCK SCOPE

// let age = 30 //global scope


// if (true){
//   let age = 40//using without the LET before the variable will change the global variable inside and outside as well. If use the LET, will basically create a new variable that works only inside the code block. It's named LOCAL SCOPE. We can only access the variable inside
//   let name = 'shaun'
//   console.log('inside 1st code block: ', age, name)
//   if(true){
//     const age = 50 //it doesn't matter if it's let or const cause they're inside of their each scope
//     console.log('inside 2nd code block: ', age)//it's getting the age inside the first block cause we haven't declared a new age. If I use age with or without LET inside this very specific block of code, it'll redefine the variable but JUST INSIDE THIS BLOCK
//     var global = '\"var\" variables ignore the concept of local scope and can be accessed everywhere. I believe that\'s one of the reasons it\'s not used anymore'
//   }
// }

// console.log('outside code block: ', age, name,) //the name only exists inside the code block. It's not global. It's local
// console.log(global)//\"var\" variables ignore the concept of local scope and can be accessed everywhere. I believe that\'s one of the reasons it\'s not used anymore

/*--------------------------------------------------------------------------*/

// //FUNCTIONS

// //FUNCTION DECLARATION
// function greet //name
// (){
//   console.log('hello there')
// }

// // FUNCTION EXPRESSION(when we store inside a variable)
// const speak = function()//no name cause the name is now the constant or variable
// {
//   console.log('good day!')
// }

// //callind or invoking the functions
// greet()
// greet()
// greet()
// speak()//name of the CONSTANT followed by the parentesis, like calling a function

// // HOISTING 
// //   When we declare a function using FUNCTION DECLARATION, it can be declared in the top or bottom of the code and it'll still work anywhere before or after the function declaration. It can be called anywhere.
// //   However, when we use FUNCTION EXPRESSION, it'll only work if called AFTER the declaration. 

/*--------------------------------------------------------------------------*/

// // ARGUMENTS & PARAMETERS
// const speak = function(name = 'Luigi', time){//creates a variable inside the function and can only be used inside. It's called function PARAMETER
//   console.log(`good ${time} ${name}!`)
// }

// speak()//it will output 'good day undefined' cause we haven't passed the value inside the function call
// speak('Mario')//the name MARIO is called an ARGUMENT
// speak('Mario', 'morning')//it must follow the order in the function declaration
// speak()//when we declare without passing any value as argument, we see undefined in the console UNLESS we create a default value
// speak('Bruno', 'evening')

/*--------------------------------------------------------------------------*/

// // RETURNING VALUES

// const calcArea = function(radius){
//   let area = 3.14 * radius**2
//   return area
// }

// const area = calcArea(5)
// console.log(area)

// //simplifying the function

// const calcArea = function(radius){
//   return 3.14 * radius**2
// }

// const area= calcArea(5)
// console.log(area)

// const calcVol = function(area){

// }

// calcVol(area)

/*--------------------------------------------------------------------------*/

// // regular function

// const calcArea = function(radius){
//   return 3.14 * radius**2
// }

// // arrow function
// const calcArea = (radius) => 3.14 * radius**2


// const area = calcArea(5)
// console.log('area is:', area)

// // PRACTICE ARROW FUNCTIONS

// const greet = () => 'hello world' 

// console.log(greet())

// const bill = (products, tax) => {
//   let total = 0
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax
//   }
//   return total
// }

// console.log(bill([10,15,30], 0.2));

/*--------------------------------------------------------------------------*/

// //METHODS AND FUNCTIONS
// //  Are kind of synonimous cause they do the same thing. What distinguishes a method is the way we invoke and the way they're defined
// // 
  

// const name = 'shaun'

// // FUNCTIONS
// // we call a function by just typing it and we can pass arguments on them

// const greet = () => 'hello'

// let resultOne = greet()
// console.log(resultOne)

// // METHODS
// // we use dot notation to call methods (that are functions) and we can pass arguments on them

// let resultTwo = name.toUpperCase()
// console.log(resultTwo)

/*--------------------------------------------------------------------------*/

// CALLBACKS % FOREACH