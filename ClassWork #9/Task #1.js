const selectionSort = (arr) => {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) if (arr[j] < arr[minIndex]) minIndex = j;

    if (minIndex != i) {
      let tmp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = tmp;
    }
  }

  return arr;
};

arr = [5, 4, 9, 7, 8, 6, 1, 2, 3];
console.log(arr);
console.log(selectionSort(arr));
console.log(arr);
