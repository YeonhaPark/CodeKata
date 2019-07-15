// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   let objA = {};
//   let objB = {};
//   let num = 1;
//   let modifiedA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   let modifiedB = stringB.replace(/[^\w]/g, "").toLowerCase();
//   for (let keyA of modifiedA) {
//     if (keyA in objA) {
//       objA[keyA] ++;
//     } else {
//       objA[keyA] = num;
//     }
//   }
//   num = 1;
//   for (let keyB of modifiedB) {
//     if (keyB in objB) {
//       objB[keyB] ++;
//     } else {
//       objB[keyB] = num;
//     }
//   }

//   let keysA = Object.keys(objA);
//   let keysB = Object.keys(objB);
//   if (keysA.every((el) => objA[el] === objB[el]) && keysB.every((el) => objA[el] === objB[el])) {
//     return true;
//   } else { return false;}

// }

// function anagrams(stringA, stringB) {

//   const modifiedA = stringA.replace(/[^\w]/g, "").toLowerCase().split("")
//   const modifiedB = stringB.replace(/[^\w]/g, "").toLowerCase().split("")
//   const objOfstringA = modifiedA.reduce((acc, el) => {
//     (el in acc) ? acc[el]++ : acc[el] = 1;
//     return acc}, {})
//   const objOfstringB = modifiedB.reduce((acc, el) => {
//     (el in acc) ? acc[el]++ : acc[el] = 1;
//     return acc}, {})

//   let keysA = Object.keys(objOfstringA);
//   let keysB = Object.keys(objOfstringB);
//   if (keysA.every((el) => objOfstringA[el] === objOfstringB[el]) && keysB.every((el) => objOfstringA[el] === objOfstringB[el])) {
//     return true;
//   } else { return false;}

// }

// function anagrams(stringA, stringB) {
// // 주어진 stringA 와 stringB을 plain한 lowercase string형태로 바꿉시다. 우리의 목표는 반복을 최대한 줄이는 것!
//   const turnToObj = (str) => {
//     let obj = {};
//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//       obj[char] = obj[char] || 1; //obj[char] 가 undefined일 시 obj[char] 에 1을 대입합니다.
//     }
//     return obj;
//   }

//   const objA = turnToObj(stringA);
//   const objB = turnToObj(stringB);
  
//   if (Object.keys(objA).length !== Object.keys(objB).length) {
//     return false;
//   }

//   for (char in objA) {
//     if (objA[char] !== objB[char]) {
//       return false;
//     }
//   }
//   return true;

// }

// function anagrams(stringA, stringB) {
//   return letClean(stringA) === letClean(stringB);
// }

// const letClean = (str) => {
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join('');
// }


module.exports = anagrams;
