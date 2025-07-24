/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.split('').map((e) => {
    if(/^[a-zA-Z0-9]+$/.test(e)){
      return e.toLowerCase();
    }
  }).join('');
  
  for(let i = 0; i < str.length; i++){
    if(i >= str.length/2){
      return true;
    }
    if(str[i] != str[str.length - i -1]){
      return false;
    }
  }
  return true;
}




module.exports = isPalindrome;
