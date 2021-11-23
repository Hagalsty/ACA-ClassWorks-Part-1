var users = [
  { user: "barney", age: 36, active: false },
  { user: "fred", age: 40, active: true },
];

const myReject = (arr, interate) => {
  let res = [];

  if (typeof interate == "function") {
    for (let i = 0; i < arr.length; i++)
      if (!interate(arr[i])) res.push(arr[i][Object.keys(arr[i])[0]]);
  } else if (Array.isArray(interate)) {
    for (let i = 0; i < arr.length; i++)
      if (arr[i][interate[0]] != interate[1])
        res.push(arr[i][Object.keys(arr[i])[0]]);
  } else if (typeof interate == "string") {
    for (let i in arr)
      if (!arr[i][interate]) res.push(arr[i][Object.keys(arr[i])[0]]);
  } else if (typeof interate == "object") {
    let isEquel;
    for (let i in arr) {
      isEquel = true;
      for (let j in interate)
        if (arr[i][j] != interate[j]) {
          isEquel = false;
          break;
        }
      if (!isEquel) res.push(arr[i][Object.keys(arr[i])[0]]);
    }
  }
  return res;
};

console.log(
  "Func -->",
  myReject(users, function (o) {
    return !o.active;
  })
);
console.log("Arr -->", myReject(users, ["active", false]));
console.log("String -->", myReject(users, "active"));
console.log("Obj -->", myReject(users, { age: 40, active: true }));
