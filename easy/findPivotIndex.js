/* 
    Given an array of integers nums, calculate the pivot index of this array.
    The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
    If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
    Return the leftmost pivot index. If no such index exists, return -1.

    https://leetcode.com/problems/find-pivot-index/description/
*/
5
let nums = [1, 7, 3, 6, 5, 6]; // output => 3

const pivotIndex = (nums) => {
    let leftSum = 0;
    let rightSum = 0;

    nums.forEach((v) => rightSum += v)

    for (let i = 0; i < nums.length; i++) {
        let currentValue = nums[i];
        rightSum -= currentValue;
        if (leftSum == rightSum) return i;
        leftSum += currentValue;
    }

    return -1;
}

console.log(pivotIndex(nums));