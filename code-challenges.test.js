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


describe("codedMessage", () => {

    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c" 
    
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
          // we have to append .toLowerCase() the letter variable so it will equate whether the given message contains capitalized letters or not.
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
//   Snapshots:   0 total
//   Time:        0.185 s
//   Ran all test suites.
//   ✨  Done in 0.89s.


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// describe("particularWord", () => {

//     const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

//     const letterA = "a"
//     // Expected output: ["Mango", "Apricot", "Peach"]
//     const letterE = "e"
//     // Expected output: ["Cherry", "Blueberry", "Peach"]    
    
//     it("Takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
//         expect(particularWord(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
//         expect(particularWord(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
//     })

// OUTPUT: ReferenceError: particularWord is not defined
// This is a good error... now we just have to create the function.

// b) Create the function that makes the test pass.

// INPUT: fruitArray, "letterA" or "letterE"
// OUTPUT: ["Mango", "Apricot", "Peach"] or
        // ["Cherry", "Blueberry", "Peach"]

// This function is going to take in two arguments
function particularWord(fruitArray, letterA){
    
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.
