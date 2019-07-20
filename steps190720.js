// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
// Solution #1
// function steps(n) {
//   let str = '';
//   for (let i = 1; i <= n; i++) {
//     str = '#'.repeat(i) + ' '.repeat(n - i);  // '#' * 1 === NaN 
//     console.log(str);
//   }
// }
// Solution #2
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }

// HOW TO SOLVE RECURSION
// THINK WHAT KIND OF INFO YOU WANT TO PASS LOOP TO LOOP
// DEFINE REASONABLE DEFAULT VALUE
// CHECK BASE CASE. IF THERE'S NO WORK LEFT TO DO, RETURN
// CALL YOUR FUNCTION AGAIN. MAKE SURE THE ARGUMENTS HAVE CHANGED IN SOME FASHION.

function steps(n, row = 0, stair = '') {
  if (n === row) { // 루프에서 나오기
    return;
  }
  if (n === stair.length) { // 콘솔로그 찍기(n === stair.length)
    console.log(stair);
    return steps(n, row + 1);

  }
  if (stair.length <= row) { //로그 찍기 전에 스트링을 완성.
    stair += '#';
  } else {
    stair += ' '; 
  }
  steps(n, row, stair); //스트링 완성하면서도 function 호출해야
}
 
module.exports = steps;
