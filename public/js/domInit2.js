var arrayLength = 100;
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

var count = 0;
var sorter = function() {
    for (var i = 0; i <= createdDivHeights.length - 1; i++) {
      if (createdDivHeights[i] > createdDivHeights[i + 1]) {
        var temp = createdDivHeights[i + 1];
        createdDivHeights[i + 1] = createdDivHeights[i];
        createdDivHeights[i] = temp;
        count++;
      }
    }
    var k = 0;
    return function() {
      while (k < arrayLength) {
        hv[k].style.height = '' + createdDivHeights[k] + 'px';
        return k++;
      }
    };
  };

var start = setInterval(sorter(), 50);
