// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   if (n >= 0) {
//     return Number(n.toString().split('').reduce((acc, el) => el + acc, ''))
//   } else {
//     let positive = n * ( - 1);
//     return Number(positive.toString().split('').reduce((acc, el) => el + acc, '')) * (- 1)
//   }
// }

// function reverseInt(n) {
//   let absolute = n * Math.sign(n);
//   let string = absolute.toString().split('').reduce((acc, el) => el + acc, '')
//   if (n < 0) {
//     return Number(string) * -1
//   } else { return Number(string) }

    
// }

function reverseInt(n) {
  let reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)

    
}

module.exports = reverseInt;
