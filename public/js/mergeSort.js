var arrayLength = 25;
var heightArray = [];
var createdDivHeightsMerge = [];
var hm = document.getElementsByClassName('heightMerge');

(function boxMaker() {
  for (var i = 0; i < arrayLength; i++) {
    var row = document.createElement('div');
    row.className = 'row';
    var heightValue = document.createElement('div');
    divHeight = ((Math.random() * 100) * 6);
    heightArray.push(divHeight);
    heightValue.style.height = divHeight + 'px';
    heightValue.className = 'heightMerge';
    document.getElementById('mainContainer').appendChild(row);
    row.appendChild(heightValue);
  }
})();

for (var j = 0; j < hm.length; j++) {
  createdDivHeightsMerge.push(parseInt(hm[j].style.height));
}

function mergeSort (arr) {
  if (createdDivHeightsMerge.length < 2) return createdDivHeightsMerge;
  var pivot = Math.floor(createdDivHeightsMerge.length / 2);
  var left = createdDivHeightsMerge.slice(0, pivot);
  var right = createdDivHeightsMerge.slice(pivot);
  merge(left, right);
}

function merge (left,right) {
  var result = [];
  while (left.length > 0 && right.length > 0)
    for (i = 0; i < createdDivHeightsMerge; i++) {
      result.push(left[i] < right[i]);
      console.log('in LEFT RIGHT');
      result.concat(left, right);
    }
  console.log(result);
  return function() {
      var k = 0;
      console.log('in K');
      while (k < arrayLength) {
        hv[k].style.height = '' + createdDivHeights[k] + 'px';
        return k++;
      }
      console.log(k);
      while (k >= arrayLength) {
        k = 0;
        return mergeSort();
      }
      console.log('HERE');
    };
}
mergeSort(createdDivHeightsMerge);
