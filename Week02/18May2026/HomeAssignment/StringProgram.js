// Home Assignment: String
// Learning Objective:
// Learn how to manipulate strings and use looping statements in a programming language to solve practical
// problems.
// Expected Completion Time:
// Best Case: 10 minutes
// Average Case: 5 minutes
// Assignment Details:
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = " fly me to the moon "
// Output: 4
// Explanation: The last word is "moon" with length 4.


// Example 3:
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false
// Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.


// Assignment Requirements:
// Example:1
// 1. Split the string into an array of words.
// 2. Find the last word in the array.
// 3. Calculate the length of this word.

// Example:2
// 1. Trim the String
// 2. Split the String into Words
// 3. Identify the Last Word
// 4. Calculate the Length of the Last Word
// 5. Return the length

// Example:3
// 1. Remove spaces and convert all letters to the same case
// 2. Sort the Characters
// 3. Compare Sorted Strings
// 4. Return the Result

// Expected Outcome:
// Upon completion, you should be able to:
// - Understand how to split strings into arrays of words and how to work with these arrays


// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example:1
// 1. Split the string into an array of words.
// 2. Find the last word in the array.
// 3. Calculate the length of this word.

// Program 1:
/**********************************************************************/
let text = "hello world"
let afterSplit = text.split(" ")
let lenghtOfLastWord = null
for(i=afterSplit.length-1; i>0; i--) {
    console.log(afterSplit[i])
    lenghtOfLastWord = afterSplit[i]
    break;
}
console.log(lenghtOfLastWord.length)
/**********************************************************************/

// Example 2:
// Input: s = " fly me to the moon "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example:2
// 1. Trim the String
// 2. Split the String into Words
// 3. Identify the Last Word
// 4. Calculate the Length of the Last Word
// 5. Return the length

// Program 2:
/**********************************************************************/
let text = " fly me to the moon "
let trimSpaces = text.trim()
// console.log(trimSpaces)
let afterSplit = trimSpaces.split(" ")
let lenghtOfLastWord = null
for(i=afterSplit.length-1; i>0; i--) {
    console.log(afterSplit[i])
    lenghtOfLastWord = afterSplit[i]
    break;
}
console.log(lenghtOfLastWord.length)
/**********************************************************************/

// Example 3:
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false
// Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.

// Assignment Requirements:

// Example:3
// 1. Remove spaces and convert all letters to the same case
// 2. Sort the Characters
// 3. Compare Sorted Strings
// 4. Return the Result

// Program 3:
/**********************************************************************/
let expected = "listen"
let actual = "silent"

let sortExp = expected.split('').sort().toSorted().join()
console.log(sortExp)

let sortAct = expected.split('').sort().toSorted().join()
console.log(sortAct)

isAnagram(sortExp,sortAct)

function isAnagram(sortExp, sortAct) {
    if(sortExp===sortAct) {
        console.log("Expected and Actual given text are Anagram")
    }
}
/**********************************************************************/