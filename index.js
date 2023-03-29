function hasTargetSum(array, target) {
  // Write your algorithm here
  array.sort((a, b) => a - b);

  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === target) {
      return true;
    }
    else if (sum < target) {
      left++;
    }
    else {
      right--;
    }
  } 
    return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity of this function is O(n log n) because of the sorting step.
  The while loop takes O(n) time to complete in the worst case, but this is dominated
  by the sorting step, which takes O(n log n) time in the worst case.

*/

/* 
  Add your pseudocode here
 1. Sort the input array in ascending order.
  2. Initialize two pointers, one at the start and one at the end of the array.
  3. Loop through the array while the left pointer is less than the right pointer.
    a. Calculate the sum of the two values pointed to by the left and right pointers.
    b. If the sum is equal to the target, return true.
    c. If the sum is less than the target, move the left pointer one position to the right.
    d. If the sum is greater than the target, move the right pointer one position to the left.
  4. If the loop completes without finding a sum equal to the target, return false.
*/

/*
  Add written explanation of your solution here
  This function uses the two-pointer approach to find two numbers in the array that add up to the target.
  First, the input array is sorted in ascending order to make it easier to find pairs of numbers that add up to the target.
  Then, two pointers are initialized, one at the start of the array and one at the end.
  These pointers are used to point to pairs of numbers in the array that might add up to the target.
  The while loop continues until the left pointer is greater than or equal to the right pointer.
  At each iteration, the sum of the numbers pointed to by the left and right pointers is calculated.
  If the sum is equal to the target, the function returns true.
  If the sum is less than the target, the left pointer is moved one position to the right to try a larger value.
  If the sum is greater than the target, the right pointer is moved one position to the left to try a smaller value.
  If the loop completes without finding a sum equal to the target, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
console.log("")
console.log("Expecting: true");
console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25))
console.log("")
console.log("=>", hasTargetSum([4],5))