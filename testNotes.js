const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"];

    const letterA = "a";
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e";
    // Expected output: ["Cherry", "Blueberry", "Peach"] 

function newFunction() {
    const getWordsThatContainLetter = (arr, ltr) => {
        return arr.filter((word) => {
            return word.toLowerCase().indexOf(ltr) !== -1;
        });
    };
}

console.log(newFunction(fruitArray, letterA));