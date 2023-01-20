/*
    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

    Return the running sum of nums.
    
    https://leetcode.com/problems/running-sum-of-1d-array
*/

let nums = [1, 2, 3, 4] // output => [1, 3, 6, 10]
let runningSum = nums => {
    nums.reduce((accumulator, 
                currentValue,
                index) => nums[index] += accumulator)
    return nums;
}

console.log(runningSum(nums));