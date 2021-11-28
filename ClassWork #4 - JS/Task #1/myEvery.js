function fn1(arr, predicate) {
  for (let item of arr) if (!predicate(item)) return false;
  return true;
}

function fn2(arr, predicate) {
  for (let item of arr) if (!item[predicate]) return false;
  return true;
}

function fn3(arr, predicate) {
  for (let item of arr)
    for (let key in object) if (object[key] != item[key]) return false;
  return true;
}

function fn4(arr, predicate) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i][predicate[0]] != predicate[1]) return false;
  return true;
}

function every(arr, predicate) {
  let type = typeof predicate;
  if (Array.isArray(predicate)) type = "array";

  switch (type) {
    case "function":
      return fn1(arr, predicate);
    case "string":
      return fn2(arr, predicate);
    case "object":
      return fn3(arr, predicate);
    case "array":
      return fn4(arr, predicate);
    default:
      return "Invalid input";
  }
}
