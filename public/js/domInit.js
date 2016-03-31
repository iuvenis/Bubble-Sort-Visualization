var arrayLength = 1000;
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

var BubbleSort = function () {
  this.bubbleArray = createdDivHeights;
  this.count = 0;
  this.sorter = function() {
    for (var i = 0; i <= bubbleArray.length - 1; i++) {
      if (bubbleArray[i] > bubbleArray[i + 1]) {
        var temp = bubbleArray[i + 1];
        bubbleArray[i + 1] = bubbleArray[i];
        bubbleArray[i] = temp;
        i = -1;
        count++;
      }
    }
    var k = 0;
    return function() {
      while (k < arrayLength) {
        hv[k].style.height = '' + bubbleArray[k] + 'px';
        return k++;
      }
      clearInterval(start);
    };
  };
  return {
      sorter : this.sorter
    };
};

var start = setInterval(BubbleSort().sorter(), 10);

