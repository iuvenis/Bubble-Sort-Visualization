function  quickSort(arr, left, right)
{
  var i = left;
  var j = right;
  var tmp;
  pivotidx = (left + right) / 2;
  var pivot = parseInt(arr[pivotidx.toFixed()]);

  while (i <= j)
  {
    while (parseInt(arr[i]) < pivot)
    i++;
    while (parseInt(arr[j]) > pivot)
      j--;
    if (i <= j)
    {
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      i++;
      j--;
    }
  }
  if (left < j)
    quickSort(arr, left, j);
  if (i < right)
    quickSort(arr, i, right);
  return arr;
}

var array = [8, 2, 4, 6, 10];
// console.log(quickSort(array, 0, array.length - 1));
