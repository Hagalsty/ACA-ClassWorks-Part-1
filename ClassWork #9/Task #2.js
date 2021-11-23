const swap = (arr, i, j) => {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const getPivot = (arr, start, end) => {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);

  return swapIndex;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) return;

  let p = getPivot(arr, start, end);

  quickSort(arr, p + 1, end);
  quickSort(arr, start, p - 1);
};

let arr = [4, 7, 9, 1, 0, 10, 8, 3];
quickSort(arr);
console.log(arr);
