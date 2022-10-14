// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// use describe to start the test and build out the structure of the test with arrow functions.
describe("codedMessage", () => {

    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c" 
    // it statement here describes what the expected output of the function should be.
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
    })

    // ReferenceError: codedMessage is not defined
    // This is a good error. Now we should define the function and make this test pass.


// b) Create the function that makes the test pass.

// INPUT: "String"
// OUTPUT: String with any a, e, i, and o replaced with 4, 3, 1, and 0.

// For the function to know what character to replace we have to do a series of if/elseif/else statements for each of the given variables.
// We can't just scan through the message as a whole string to be evaluated, at least.. I don't think so.. and since we have to compare individual letters we will need to first split up the message into individual letters inside of an array. We can use .split() to do this.
// We then have to iterate through each of the values inside the array and apply if/elseif/else conditional statements to replace all a, e, i, and o with 4, 3, 1, and 0..

// I decided to use a function declaration instead of const just to see what differences it would make between the two. I think in this case, it wouldn't matter which one, but essentially, the main difference between using 'const' or 'function' declaration is that we can declare the function first before actually calling on it. (hoisting)

// I name the function 'codedMessage' and passed in a value 'message'.  Since we are using a function declaration instead a const, we don't need the arrow function.
function codedMessage(message) {
    // the method/logic of this function will return the message modified.
    // to isolate each character of the message so we can add conditions to the logic we will use .split("") to split the message up into an array of the message characters.
    // from there we link in the .map() function to it with if, elseif, and else conditionals to set up the logic.
    //the .map() function will take in each value of the array we just created, which are individual string characters. We'll call that value 'letter'
    return message.split("").map((letter) => {
        // we'll start our logic with the if conditional statement followed by else if/else conditionals of the requested conditions. This logic will replace all vowels to the corresponding given integer.
        if (letter === "a") {
          return 4;
          // we have to append .toLowerCase() the letter variable so it will equate regardless of whether the given message contains capitalized letters or not.
        } else if (letter.toLowerCase() === "e") {
          return 3;
        } else if (letter.toLowerCase() === "i") {
          return 1;
        } else if (letter.toLowerCase() === "o") {
          return 0;
        } else {
          return letter;
        }
      })
      // once the message has iterated through the if/elseif/else conditionals, we use .join("") function to rejoin the individual values of the array that was created by .map() back into one string.  And, since there is an implicit return, we don't need to imply a return value in the end of our function.
      .join("");
  };

//   Test Suites: 1 passed, 1 total
//   Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
// use describe to start the test and build out the structure of the test with arrow functions.
describe("particularWord", () => {

    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]    
    // it statement here describes what the expected output of the function should be.
    
it("Takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
    expect(particularWord(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(particularWord(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
})
})

// OUTPUT: ReferenceError: particularWord is not defined

// This is a good error... now we just have to create the function.

// b) Create the function that makes the test pass.

// INPUT: fruitArray, "letterA" or "letterE"
// OUTPUT: ["Mango", "Apricot", "Peach"] or
        // ["Cherry", "Blueberry", "Peach"]

// This function is going to take in two arguments/parameters
    // array and letter
    // I'm going to name it particularWord
function particularWord(array, letter) {
  // inside of this function i'll declare a new variable that contains an array of the values we are going to push into it.
    // the method is we are going to use .filter on the array to iterate and filter through each element in the array.
  let newArr = array.filter((word) => {
    // it then returns the element/word that includes the letter given in the second parameter/argument. we .toLowerCase() everything so we don't get any errors regarding capitalization. 
    return word.toLowerCase().includes(letter.toLowerCase());
  });
  // we then return the newArr that has been filtered and sorted through. 
  return newArr;
};

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("isFullHouse", () => {
const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true
it("takes in an array of 5 numbers and determines whether or not the array is a Full House", () => {
  expect(isFullHouse(hand1)).toEqual(true)
  expect(isFullHouse(hand2)).toEqual(false)
  expect(isFullHouse(hand3)).toEqual(false)
  expect(isFullHouse(hand4)).toEqual(true)
})
})

// ReferenceError: fullHouse is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total

// This is a good fail. Now we'll define the method.

// b) Create the function that makes the test pass.

// INPUT: array of 5 numbers [5, 5, 5, 3, 3]
// OUTPUT: fullHouse = true 'Your hand is a Full House'
//         fullHouse = false 'Your hand is not a Full House'

// We have to declare the function and name it 'isFullHouse' that takes in an array of cards.
function isFullHouse(cards) {
// In order to make it a full house there should be exactly 3 same numbers(cards) along with 2 same numbers(cards). So, we have to use an iteration method that will iterate through each element of the array of numbers(cards) and see if there are any duplicates. I wasn't sure of what sorting method to use but saw there two were that were frequently shown, .sort() and .forEach().  The difference is that .sort() iterates through the array in place and returns the same array now sorted. And .forEach() iterates through element and operates a method on each element. I'm not sure which one to do or even what the correct syntax will be.. but lets gOoOo... we'll use .sort() to sort through the numbers(cards) and compare the indexes to return true or false.
// we'll call the cards our 'hand'.
  let hand = cards.sort()
    //we need a series of if conditionals to setup the logic for the full house conditions. We'll achieve this by evaluating the indexes of the 'hand'.
    // we will say if the [0] index of the hand is equal to the [2] and the [3] index is equal to the [4] index, return true. this meets our 3x2 full house condition.
    if (hand[0] === hand[2] && hand[3] === hand[4]){
      return true
      // now, we need an else if statement for the flip side 2x3 condition of the indexes.
    } else if (hand[0] === hand[1] && hand[2] === hand[4]){
      return true
      // else statement will return false.
    } else {
      return false
    }
}


// YAy.. we passed. 
// PASS  ./code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total