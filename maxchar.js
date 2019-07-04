// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let names = str.split('')
//   let makeObj = names.reduce((acc, el) => {
//     if (el in acc) { //acc
//       acc[el]++;
//     } else {
//       acc[el] = 1;
//     }
//     return acc;
//   }, {})
//   
//   return Object.keys(makeObj).reduce((a, b) => makeObj[a] > makeObj[b] ? a : b )
// }

// function maxChar(str) {
//   const chars = {};

//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1;
//   }

//   return Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b)
// }
// if you try to add 1 to undefined it will end up being NaN
// undefined + 1 === true // false
// function maxChar(str) {
//   const chars = {};

function maxChar(str) {
  let max = 0;
  let maxChar = '';
  const charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max){
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}


module.exports = maxChar;
