const findAndRemove = (obj) => {
  let res = {};
  let tmp = {};

  for (let i in obj) {
    tmp = {};
    for (let j in obj[i]) {
      if (!Number.isNaN(Number(obj[i][j]))) {
        tmp[j] = Number(obj[i][j]);
      }
    }
    res[i] = tmp;
  }

  return res;
};

console.log(
  findAndRemove({
    bedroom: {
      slippers: "10000",
      piano: "550",
      call: "vet",
      travel: "world",
    },
  })
);
