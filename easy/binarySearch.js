/*

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

*/

let search = (nums, target) => {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    do {
        let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
        if (nums[middlePointer] == target)
            return middlePointer 
        if (target < nums[middlePointer])
            rightPointer = middlePointer - 1;
        else
            leftPointer = middlePointer + 1;
    } while (leftPointer <= rightPointer )
    return -1;
}

console.log(search([2, 5], 5))