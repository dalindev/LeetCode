/*

  ✅ Like Merge Sort, QuickSort is a Divide and Conquer algorithm.

  It picks an element as pivot and partitions the given array around the picked pivot.
  There are many different versions of quickSort that pick pivot in different ways.

  1. Always pick first element as pivot.
  2. Always pick last element as pivot (implemented below)
  3. Pick a random element as pivot.
  4. Pick median as pivot.

  The key process in quickSort is partition(). Target of partitions is,
  given an array and an element x of array as pivot, put x at its correct
  position in sorted array and put all smaller elements (smaller than x) before x,
  and put all greater elements (greater than x) after x. All this should be done in linear time.

*/

function quickSort (arr, low, high) {
  if (low < high) {
    let p = partition(arr, low, high)

    quickSort(arr, low, p - 1);  // Before pi
    quickSort(arr, p + 1, high); // After pi
  }
}
/*
  This function takes last element as pivot, places
  the pivot element at its correct position in sorted
  array, and places all smaller (smaller than pivot)
  to left of pivot and all greater elements to right
  of pivot

  5 6 1 2 4 9
  *

*/
function quickSort (arr, low, high) {
  let idx = partition(arr, low, high);

  if (low < idx - 1) {
    quickSort(arr, low, idx - 1); // Before pi
  }

  if (high > idx) {
    quickSort(arr, idx, high); // After pi
  }

}

function partition (arr, low, high) {
  let pindex = low;

  while (low <= high) {
    // from left find
    while (arr[low] < arr[pindex]) {
      low++;
    }
    while (arr[pindex] < arr[high]) {
      high--;
    }
    if (low <= high) {
      [arr[low], arr[high]] = [arr[high], arr[low]];
      low++;
      high--;
    }
  }
  return low;
}

// TEST
let a = [3, 5, 1, 7, 8, 9, 4, 2, 6, 10];
console.log(a);
quickSort(a, 0, a.length - 1);
console.log(a);
