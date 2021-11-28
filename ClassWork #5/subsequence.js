const filterRes = (comp, arr) => {
  return comp
    .map((subArr) => {
      const subArrLen = subArr.length;
      const check = [];
      for (let i = 2; subArrLen * i <= arr.length; i++) {
        if (subArrLen * i != arr.length) check.push(false);
        else check.push(true);
      }
      if (check.some((el) => el == true)) return subArr;
      return null;
    })
    .filter((el) => el != null);
};

const getOptinons = (arr) => {
  const halfLen = arr.length % 2 == 0 ? arr.length / 2 : arr.length / 2 + 0.5;
  const comp = [];

  for (let i = 2; i <= halfLen; i++) comp.push(arr.slice(0, i));

  return comp;
};

const checkValid = (res, arr) => {
  return res
    .map((el) => {
      let elLen = el.length;
      for (let i = 0; i < arr.length - el.length; i++)
        if (arr[i] == arr[i + elLen]) continue;
        else return false;
      return true;
    })
    .some((el) => el == true);
};

const completeBracelet = (arr) => {
  return checkValid(filterRes(getOptinons(arr), arr), arr);
};

const subsequence = (arr) => {
  const halfLen = arr.length % 2 == 0 ? arr.length / 2 : arr.length / 2 + 0.5;
  const comp = [];

  // getOptinons
  for (let i = 2; i <= halfLen; i++) {
    comp.push(arr.slice(0, i));
  }

  // filter part, check valids and return
  return comp
    .map((subArr) => {
      const subArrLen = subArr.length;
      const check = [];
      for (let i = 2; subArrLen * i <= arr.length; i++) {
        if (subArrLen * i != arr.length) check.push(false);
        else check.push(true);
      }
      if (check.some((el) => el == true)) return subArr;
      return null;
    })
    .filter((el) => el != null)
    .map((el) => {
      let elLen = el.length;
      for (let i = 0; i < arr.length - el.length; i++)
        if (arr[i] == arr[i + elLen]) continue;
        else return false;
      return true;
    })
    .some((el) => el == true);
};

console.log(subsequence([1, 2, 3, 3, 1, 2, 3, 3]));
console.log(subsequence([1, 2, 1, 2, 1, 2, 1, 2]));
console.log(
  subsequence([1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7])
);
console.log(subsequence([4, 4, 3, 4, 4, 4, 4, 3, 4, 4]));
console.log(subsequence([1, 2, 2, 2, 1, 2, 2, 2, 1]));
console.log(subsequence([1, 1, 6, 1, 1, 7]));
console.log(subsequence([1, 2, 2, 1, 2, 2]));
console.log(subsequence([5, 1, 2, 2]));
console.log(subsequence([5, 5, 5]));
console.log("----------------------------------------");
console.log(completeBracelet([1, 2, 3, 3, 1, 2, 3, 3]));
console.log(completeBracelet([1, 2, 1, 2, 1, 2, 1, 2]));
console.log(
  completeBracelet([1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7, 1, 1, 6, 1, 1, 7])
);
console.log(completeBracelet([4, 4, 3, 4, 4, 4, 4, 3, 4, 4]));
console.log(completeBracelet([1, 2, 2, 2, 1, 2, 2, 2, 1]));
console.log(completeBracelet([1, 1, 6, 1, 1, 7]));
console.log(completeBracelet([1, 2, 2, 1, 2, 2]));
console.log(completeBracelet([5, 1, 2, 2]));
console.log(completeBracelet([5, 5, 5]));
