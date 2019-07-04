// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let someStr = '';
//   for (let i = str.length - 1; i >= 0; i --){
//     someStr += str[i]
//   } return someStr
// } // 2.438s

// function reverse(str) {
//   return str.split('').reverse().join('')
// } //2.465s 

function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
    debugger;
  } return reversed;
} 

reverse('asdf');
// function reverse(str) {

//   return str.split('').reduce((acc, el) => el + acc, '');
// }


//reduce method 첫째 파라미터는 배열의 각 요소에 대해 실행할 함수
//두번째 파라미터는 initial value.

module.exports = reverse;
