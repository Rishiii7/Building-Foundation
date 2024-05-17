/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length != str2.length){
    return false;
  }
  
  let letters = new Map();

  str1 = str1.toLowerCase();
  // console.log(str1);
  str2 = str2.toLowerCase();
  // console.log(str2);

  for(let i=0; i<str1.length; i++){
    if(letters.has(str1[i])){
      letters.set(str1[i], letters.get(str1[i])+1);
    }
    else{
      letters.set(str1[i], 1);
    }
  }

  for(let i=0; i<str2.length; i++){
    if(letters.has(str2[i])){
      letters.set(str2[i], letters.get(str2[i])-1);
    }
    else{
      return false;
    }
  }

  const keys = letters.keys();

  for(key in keys){
    if(letters.get(key) != 0){
      return false;
    }
  }

  return true;

}

console.log(isAnagram('Debit Card', 'Bad Credit'))

module.exports = isAnagram;
