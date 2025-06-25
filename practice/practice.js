// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 3
let secondCard = 11

let sum = firstCard + secondCard

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "John",
    age: 18,
    country: "Kenya"
}

function logData() {
    let dataString = person.name + " is " + person.age + " years old and lives in " + person.country
    console.log(dataString)
}

let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
    console.log("Free")
} else if (age < 18) {
    console.log("Child Discount")
} else if (age < 26) {
    console.log("Student Discount")
} else if (age < 66) {
    console.log("Full Price")
} else {
    console.log("Senior citizen Discount")
}

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
console.log("The 5 largest countries in the world:")
for (let i = 0; i < largeCountries.length; i++)  {
    console.log("- " + largeCountries[i])
}

let moreLargeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
moreLargeCountries.pop()
moreLargeCountries.push("Pakistan")

moreLargeCountries.shift()
moreLargeCountries.unshift("China")

////////////
let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (weekday === "Friday" && dayOfMonth === 13) {
    console.log("😱")
}

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let item = arr[randomIndex]
    return item
}

let choice = getHand(hands)
console.log(choice)

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let newAge = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (newAge < 21) {
    console.log("You cannot enter the club!")
} else {
    console.log("Welcome")
}

// Check if the person is elegible for a birthday card from the King! (100)

let anotherAge = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (anotherAge < 100) {
    console.log("Not eligible")
} else if (anotherAge === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}

let isVegan = false

console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false

let educationArray = [
    "St. Mary's Sportsview Academy",
    "Hillside School, Utawala",
    "Alliance High School"
]
// Array - ordered list of items - composite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)
let personalArry = [
    "John Wesley",
    18,
    true
]
//.push() method adds an item to the end of an array while the .pop() method removes an item from the end of an array
let card = [7, 4]
card.push(8)

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)
messages.pop()
console.log(messages)