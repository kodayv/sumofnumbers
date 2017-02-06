/**
 * Solving Experience E26.
 * Created by koday on 2/5/2017.
 */

const testNum = [1, 2, 3, 4];

function sumFor(nums){
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNum));

function sumWhile(nums){
  let total = 0;
  let i = 0;
  while (i < nums.length){
    total += nums [i];
    i ++;
  }
  return total;
}

console.log(sumWhile(testNum));

function sumRecursion(nums) {
  if (nums.length === 0){
    return 0;
  }
  return nums[0]+ sumRecursion(nums.slice(1, nums.length));
 }

console.log(sumRecursion(testNum));

function sumTheSimpleWay(nums){
    return _.reduce(nums, function memoizer(memo, num){ return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNum));
