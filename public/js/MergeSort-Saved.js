// var arrayLength = 10;
// var heightArray = [];
// var createdDivHeightsMerge = [];
// var hm = document.getElementsByClassName('heightMerge');

// (function boxMaker() {
//   for (var i = 0; i < arrayLength; i++) {
//     var row = document.createElement('div');
//     row.className = 'row';
//     var heightValue = document.createElement('div');
//     divHeight = ((Math.random() * 100) * 6);
//     heightArray.push(divHeight);
//     heightValue.style.height = divHeight + 'px';
//     heightValue.className = 'heightMerge';
//     document.getElementById('mainContainer').appendChild(row);
//     row.appendChild(heightValue);
//   }
// })();

// for (var j = 0; j < hm.length; j++) {
//   createdDivHeightsMerge.push(parseInt(hm[j].style.height));
// }

// function mergeSort (arr) {
//   if (arr.length < 2) return arr;
//   var pivot = Math.floor(arr.length / 2);
//   var left = arr.slice(0, pivot);
//   var right = arr.slice(pivot);
//   left  = mergeSort(left);
//   right = mergeSort(right);
//   merge(left, right)();
// }

// function merge (left,right) {
//   debugger;
//   var result = [];
//   while (left.length > 0 && right.length > 0) {
//     if (left[0] < right[0]) {
//       result.push(left[0]);
//       left.splice(0, 1);
//     } else {
//       result.push(right[0]);
//       right.splice(0, 1);
//     }
//   }
//   return result; () {
//         var k = 0;
//         while (k < arrayLength) {
//           hv[k].style.height = '' + createdDivHeights[k] + 'px';
//           return k++;
//         }
//         console.log(k);
//         while (k >= arrayLength) {
//           k = 0;
//           return mergeSort();
//         }
//       };
// }
// mergeSort(createdDivHeightsMerge);
