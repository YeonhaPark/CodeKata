// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   let outerArr = [];
//   let repeat = Math.ceil(array.length / size);
//   for (let i = 0; i < repeat; i ++){
//     if (size < array.length) {
//       let subArray = array.slice(0, size);
//       array.splice(0, size)
//       outerArr.push(subArray)
//     } else {
//       outerArr.push(array)
//     }
//   }
//   return outerArr;
// }

// function chunk(array, size) {
//   let outerArr = [];
//   for (let element of array) {
//     const last = outerArr[outerArr.length - 1]; //last 는 마지막 어레이
// // 껍데기에 아무것도 없거나, 껍데기 마지막 인덱스 값의 길이가 size랑 같으면
//     if (!last || last.length === size) {
//       outerArr.push([element])
//       //마지막 값이 size보다 작으면 더 넣어줘야해
//     } else {
//       last.push(element);
//     }
//   }
//   return outerArr;
// }

function chunk(array, size) {
    let outerArr = [];
    let index = 0;
    while (index < array.length) {
      outerArr.push(array.slice(index, index + size));
      index += size;
      // array 사이즈보다 slice의 index값이 커도 괜찮아.
    }
    return outerArr;
  }
  

module.exports = chunk;
