const isPalindrom = (str) => {
  let len = str.length;

  if (len == 0) return "No";
  for (let i = 0; i <= len; i++) {
    if (str[i] != str[len - 1]) return "No";
    len--;
  }
  return "Yes";
};

console.log(isPalindrom("racecar"));
console.log(isPalindrom("T"));
console.log(isPalindrom(""));
console.log(isPalindrom("palindrom"));
