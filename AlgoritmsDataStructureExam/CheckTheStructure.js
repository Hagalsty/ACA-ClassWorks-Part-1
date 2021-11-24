function isValid(a) {
  let root = a[0];
  let left = [];
  let rigth = [];
  let i;
  for (i = 1; i < a.length; i++) {
    if (a[i] < root) {
      left.push(a[i]);
    }

    if (a[i] > root) {
      break;
    }
  }

  rigth = a.slice(i);

  for (let value of rigth) {
    if (root > value) {
      return "NO";
    }
  }

  if (isValid(left) === "YES" && isValid(rigth) === "YES") {
    return "YES";
  }

  return "NO";
}
