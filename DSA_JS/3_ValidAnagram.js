// Ques 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

//solution 1
/* const isAnagram= function(s,t){
    s= s.split("").sort().join("");
    t= t.split("").sort().join("");

    return s === t;
}; */

//solution2 using for and for-in loop(by checking the no of repetitions of the letter in each word if all repetions match the true else false)
const isAnagram= function(s,t){
    if(s.length !== t.length) return false; //edge case

    let obj1= {}; //creating object to store the no of repetitions of the string present in the variable s
    let obj2= {}; //creating object to store the no of repetitions of the string prsent in the varibale t

    //for loop to store the repetions of the each word of the string in the obj1 and obj2
    for (let i = 0; i < s.length; i++) {
        obj1[s[i]]= (obj1[s[i]] || 0) + 1; //here the increment by +1 for a every new charecter present in the string else itll increment the value of that charecter with 1 
        obj2[t[i]]= (obj2[t[i]] || 0) + 1;
    }

    //for-in loop to check if the repetiotions in the obj1= repetioton in obj2
    for (const key in obj1) {
        if(obj1[key]!== obj2[key]) return false;
    }

    return true;
}

console.log(isAnagram("car","ac"));
