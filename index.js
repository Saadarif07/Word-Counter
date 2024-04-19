#! /usr/bin/env node
import inquirer from "inquirer";
// Display message
console.log("\n\t Welcome to Saad Word counter");
// prompt the user to answer a sentence
let answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter a sentence:",
    }]);
// Trimming the sentence and splitting it into words based on "spaces"
let words = answer.sentence.trim().split(" ");
console.log("-Sentence Words:");
console.log(words);
console.log(`\n - Word Count: ${words.length}`);
