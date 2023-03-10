// We are introducing ourselves again. Same setup but with ARRAYS
// Create 2 array variables. One with only strings and the other with only numbers.
// The string array will have our firstName, lastName, and programming language
// The number array will have the date
var string = ["firstName","lastName","javascript"]
const numbers = ["1/7/2023"]
// Create a function that introduces yourself BUT with ARRAYS : It should take 2 parameters: a string array and a number array
function person(){
 const name =["chris"]
 const age =[24]
 name.push("age");
 age.push("graduateYear")
 console.log(`Hello! My name is ${age}`)
}
 person();
// add a new value to the string array using the square brackets, **remember what index to use
// add a new value to the number array using the square brackets **remember what index to use
// let's introduce ourself with console.log and template literals i.e. `I am an example of a template literal`
console.log(`Hello! My name is ${name[0]}`)
// ex. Hello! My name is stringArray[index] stringArray[index] < what index would the first and last name be?
// ex. The date is the numberArray[index] of currentMonth, numberArray[index]  < what index would the date, month, and year be?
// console.log(The date is the numberArray[0])
// ex. I am currently learning how to program in stringArray[index] < What index would the language be?
// console.log(I am currently learning how to program in stringArray[2])

//  change the value at the index the programming language is at to "HTML/CSS" ????????????????
string.splice(2,1, "HTML/CSS");
console.log(string)

// Add a console.log to output programming language
// ex. And I'm learning stringArray[index]
// ex. I now know how to make a variables and functions
// exit out of the function
// Call the function

// What would be the length of the string array?
// Create a function that re-introduces yourself with ARRAYS : using the push, pop, and join array methods
// function reintroduceMyself = ["HTML", "CSS", "JavaScript", "React", "Bananas"]{

// }
// console.log ("I am learning these langauages "personArray)

// Create a string array with these values: "HTML", "CSS", "JavaScript", "React", "Bananas"
// use console.log to let everyone know what languages you are learning and JOIN all the items of the array into a string
// ex: I want to say that I am learning stringArray.
// You are not learning Bananas! POP that item out of the Array
// reintroduceMyself.pop();
// ex: Wait! I'm not learning bananas
// PUSH a new language, Node, into the stringArray
// reintroduceMyself.push("Node")
// ex: I am leaning this stringArray < convert the stringArray into a string
// exit out of the function
// call the re-introduce function
// function reintroduceMyself()
// In the reintroduceMyself function what would happen if we called the stringArray variable that we defined in the function block?