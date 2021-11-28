const compose =
  (...funcs) =>
  (item) =>
    funcs.reduceRight((elem, fn) => fn(elem), item);

const f1 = () => "hello";
const f2 = () => () => "world";
const f3 = () => () => () => "user";

const getCount = (func, count) => {
  if (typeof func == "function") {
    count++;
    count = getCount(func(), count);
  }
  return count;
};

const funcSort = (...funcs) => {
  const result = [...funcs];

  return result.sort((a, b) => {
    let first = getCount(a, 0);
    let second = getCount(b, 0);
    return first - second;
  });
};

console.log(funcSort(f1, f3, f2, "ssss"));
