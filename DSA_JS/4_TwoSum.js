// Ques 4 - Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]


//solution1 using bruteforce
// breakdown: [2,7,11,15] => 2+7, 2+11, 2+15, 7+2,.... => 9, 13, 17,... since target is at arr[0]+arr[1] hence return [0,1]

/* const TwoSum= function(nums, target){
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i]+nums[j] === target) return [i,j];            
        }
        
    }
};

console.log(TwoSum([3, 2, 4], 6)); */

//solution2 using js objects
const twoSum = function (nums, target) {
    var obj = {};
  
    for (let i = 0; i < nums.length; i++) {
      var n = nums[i];
  
      if (obj[target - n] >= 0) {
        return [obj[target - n], i];
      } else {
        obj[n] = i;
      }
    }
  };
  
  console.log(twoSum([2, 7, 11, 15], 26));