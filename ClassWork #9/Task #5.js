const binarySearch = (arr, num) => {
  let changableLen = arr.length;
  let index = 0;

  while (changableLen > index) {
    let mid = index + Math.floor((changableLen - index) / 2);

    if (arr[mid] == num) return mid;

    if (arr[mid] > num) changableLen = mid;
    else if (arr[mid] < num) index = mid + 1;
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
