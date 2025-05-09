let nums = [1, 4, 5, 6, 7, 878, 44];

// let max = -1;

// for(let i=0; i<nums.length; i++){
//     if(max < nums[i]){
//         max = nums[i];
//     }
// }

// console.log(max);

let ans = nums.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});

console.log(ans);
