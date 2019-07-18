// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// [a, short, sentence] => [A, Short, Sentence] 
// Solution #1
// function capitalize(str) {
//   let strBowl = '';
//   let arr = str.split(' '); // str => arr type
//   for (let piece of arr) {
//     strBowl += piece[0].toUpperCase() + piece.slice(1) + ' '; 
//   } return strBowl.slice(0, strBowl.length - 1)
// }

// Solution #2
// function capitalize(str) {
//   let strBowl = [];
//   for (let piece of str.split(' ')) {
//     strBowl.push(piece[0].toUpperCase() + piece.slice(1)); 
//   }
//   return strBowl.join(' ') //using join(' '), you can join with blank spaces
// }

// Solution #3
function capitalize(str) {
  let someStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' || i === 0) {
      someStr += str[i].toUpperCase()
    } else {
      someStr += str[i];
    }
  }
  return someStr;
}
module.exports = capitalize;
