//  Import the 'inquirer' module, which is command line interface for Node.js
import inquirer from "inquirer";
// Declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your Sentence to count the word: "
    }
]);
const words = answers.sentence.trim().split("");
// Print the array of words to the console 
console.log(words);
// Print the word count of the sentence to the console 
console.log(`your sentence word count is ${words.length}`);
