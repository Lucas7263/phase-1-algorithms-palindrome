function isPalindrome(word) {
  // Write your algorithm here
  let wordSplit = word.split("");
  let reverseWord = wordSplit.reverse();
  let joinWord = reverseWord.join("");

  console.log(joinWord)
  if(word === joinWord){
    return true
  } else {
    return false
  }
 
}

/* 
  Add your pseudocode here
  function should take argument and compare it to the logic within said function.
  When the argument is passed in it should return "true" if successful and return "false" if 
  not successful passing the logic.
*/

/*
  Add written explanation of your solution here
  Step 1

  Take the the string passed in as an argument and save it to a new variable within the function
   and using the .split() method to seperate out the
  individulal characters of the "word" that is passed in and places them in an array of string characters.
  
  Step 2

  Then defining a second variable that we use to take the result fo the first variable and use the .reverse() method
  to flip the order of the newly created array. 

  Step 3

  Then defining a third variable that we use to take the result of the second variable and use the .join() method 
  to join the now reversed ordered array back into a "string".

  Step 4

  The final step is using a if else statemnt that takes the "string" that is used as an argument when the 
  function is invoked and using the strict comparative operater "===" compares it to the "new" string
  we created using steps 1-3. If the orginal string is equal to the new string that is created the function
  return true, and if it is not equal the function will return false. 

  

  Then using 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotator"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("expecting: true");
  console.log("=>", isPalindrome('dad'))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("dog"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("runner"));
}

module.exports = isPalindrome;
