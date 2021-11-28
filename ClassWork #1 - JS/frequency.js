const frequency = (arr) => {
  let count;
  let dup = [];
  let check = 0;
  let output = "";

  for (let i = 0; i < arr.length; i++) {
    check = 0;
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == dup[j]) check = 1;
      if (check == 1) continue;
      if (arr[i] == arr[j]) count++;
    }
    if (!check) {
      dup.push(arr[i]);
      output += arr[i] + ": " + count / arr.length + "\n";
    }
  }

  return output;
};

console.log(
  frequency([1, 1, 2, 1, 5, 2, 3, 1, 4, 5, 6, 2, 3, 4, 1, 1, 2, 3, 5, 2])
);
