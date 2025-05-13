// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

const isPalindrome= function(x){ //this type of functions which are stored in a variable is known as anonymous function 
    return x<0 ? false: x=== +x.toString().split("").reverse().join("");
    //+ converts the string into a number and then store it in the variable x
    //toString() converts the number into a string
    //split() splits the string according to the given parameter ex: x= 121 and x.split("") will return ["1","2","1"]
    //reverse() reverses the string
    //join() concatenates the string according to the parameter given ex: x=["1","3","1"] and x.join(.) will return  1.3.1 if it was .join("") then itll return "131"
};
const res= isPalindrome(121); //will return true 
const res1= isPalindrome(10); //will return false
console.log(res);
console.log(res1);