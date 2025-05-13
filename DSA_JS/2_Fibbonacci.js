// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2


//solution1 using for loop
/* var fib = function(x) {
const arr= [0,1]; //creating array with defult values 0,1

    //iteratiion will start from 2nd array element
    for (let i = 2; i <= x; i++) { 
        arr.push(arr[i-1] + arr[i-2]); //push() will add array elemens into the array where the other elements in the series will be [n-1] + [n-2]       
    }

    return arr[x];
};

const res= fib(5);
console.log(res) */
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//solution2 using reccursion
/* const fib= function(n) {
    if(n<= 1) return n;
    return fib(n-1) + fib(n-2);
}
const res= fib(5);
console.log(res)  */

//solution3 one liner for solution2
const fib= (n)=> (n<= 1 ? n: fib(n-1) + fib(n-2));