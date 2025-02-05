// Your code goes here
const rapid =(string) => {
    let newString = "";
    for (let i=0; i > string.length; i++ ) {
        if (string(i) != "a" || "e" || "i" || "o" || "u") {
            newString = newString + string(i).toUpperCase();
        }
    }
    return newString;
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
