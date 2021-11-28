const fibo = (n) => {
  let arr = [0, 1];
  let i = 2;

  for (i; i <= n; i++) arr[i] = arr[i - 1] + arr[i - 2];

  return n == 1 ? arr[0] : arr[n];
};

console.log(fibo(10));
