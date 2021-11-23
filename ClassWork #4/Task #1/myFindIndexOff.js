var users = [
  { user: "barney", active: false },
  { user: "fred", active: false },
  { user: "pebbles", active: true },
];

function fn1(arr, predicate, fromIndex = 0) {
  for (let i = fromIndex; i < arr.length; i++) if (predicate(arr[i])) return i;

  return -1;
}

function fn2(arr, predicate, fromIndex = 0) {
  for (let i = fromIndex; i < arr.length; i++) if (arr[i][predicate]) return i;
  return -1;
}

function fn3(arr, predicate, fromIndex = 0) {
  for (let i = fromIndex; i < arr.length; i++)
    if (JSON.stringify(arr[i]) === JSON.stringify(predicate)) return i;
  return -1;
}

function fn4(arr, predicate, fromIndex = 0) {
  const { key, value } = predicate;

  for (let i = fromIndex; i < arr.length; i++)
    if (arr[i][key] === value) return i;
  return -1;
}

function findIndexOf(arr, predicate, fromIndex = 0) {
  let type = typeof predicate;
  if (Array.isArray(predicate)) type = "array";

  switch (type) {
    case "function":
      return fn1(arr, predicate, fromIndex);
    case "string":
      return fn2(arr, predicate, fromIndex);
    case "object":
      return fn3(arr, predicate, fromIndex);
    case "array":
      return fn4(arr, predicate, fromIndex);
    default:
      return "Invalid input";
  }
}

console.log(findIndexOf(users, function (o) {return o.user == "barney";}));
console.log(findIndexOf(users, ["active", false]));
console.log(findIndexOf(users, "active"));
console.log(findIndexOf(users, { user: "fred", active: false }));
