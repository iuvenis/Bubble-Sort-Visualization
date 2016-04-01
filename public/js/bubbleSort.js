var arrayLength = 25;
var heightArray = [];
var createdDivHeights = [];
var hv = document.getElementsByClassName('heightValueClass');

(function boxMaker() {
  for (var i = 0; i < arrayLength; i++) {
    var row = document.createElement('div');
    row.className = 'row';
    var heightValue = document.createElement('div');
    divHeight = ((Math.random() * 100) * 6);
    heightArray.push(divHeight);
    heightValue.style.height = divHeight + 'px';
    heightValue.className = 'heightValueClass';
    document.getElementById('mainContainer').appendChild(row);
    row.appendChild(heightValue);
  }
})();

for (var j = 0; j < hv.length; j++) {
  createdDivHeights.push(parseInt(hv[j].style.height));
}

function sorter() {
  for (i = 0; i <= arrayLength - 1; i++) {
    if (createdDivHeights[i] > createdDivHeights[i + 1]) {
      var temp = createdDivHeights[i + 1];
      createdDivHeights[i + 1] = createdDivHeights[i];
      createdDivHeights[i] = temp;
    }
  }
  var k = 0;
  return function() {
      while (k < arrayLength) {
        hv[k].style.height = '' + createdDivHeights[k] + 'px';
        return k++;
      }
      while (k >= arrayLength) {
        k = 0;
        return sorter();
      }
      clearInterval(start);
    };
}

var start = setInterval(sorter(arrayLength), 1);
