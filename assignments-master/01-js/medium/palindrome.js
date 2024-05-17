/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowerCaseStr = str.toLowerCase();
  lowerCaseStr = lowerCaseStr.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g, '');

  // console.log(lowerCaseStr);

  for(let i=0; i<lowerCaseStr.length / 2; i++){
    if(lowerCaseStr[i] !== lowerCaseStr[lowerCaseStr.length - 1 - i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;


console.log(isPalindrome('Eva, can I see bees in a cave?'))