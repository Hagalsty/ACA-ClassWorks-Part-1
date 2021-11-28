const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];

const myConcatArr = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
};

const arr3 = myConcatArr(arr1, arr2);
console.log(arr3);
