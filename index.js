function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord === word;
}
/* 
  Add your pseudocode here

  // 1. Initilize new empty string
  // 2. Reverse loop the given word
  // 3. Add current letter to the reversed word
  // 4. Return the check of identical of given and reversed word

*/

/*
  Add written explanation of your solution here
  // Input: Hello
  // Initialize reversedWord = ""
  // Loop:  Begin with the length of "Hello" and go down i--
  // Add current letter "o" to begining of reversedWord 
  // Return the check
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
