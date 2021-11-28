const mySome = (arr, predicate) => {
  let res = [];

  if (typeof predicate == "function") {
    for (let i = 0; i < arr.length; i++) if (!predicate(arr[i])) return true;
  } else if (Array.isArray(predicate)) {
    for (let i = 0; i < arr.length; i++)
      if (arr[i][predicate[0]] == predicate[1]) return true;
  } else if (typeof predicate == "string") {
    for (let i in arr) if (arr[i][predicate]) return true;
  } else if (typeof predicate == "object") {
    let isEquel;
    for (let i in arr) {
      isEquel = true;
      for (let j in predicate)
        if (arr[i][j] !== predicate[j]) {
          isEquel = false;
          break;
        }
      if (isEquel) return true;
    }
  }
  return false;
};

console.log(
  "Func -->",
  mySome(users, function (o) {
    return !o.active;
  })
);
console.log("Arr -->", mySome(users, ["active", false]));
console.log("String -->", mySome(users, "active"));
console.log("Obj -->", mySome(users, { age: 40, active: true }));
console.log(mySome([null, 0, "yes", false], Boolean));
