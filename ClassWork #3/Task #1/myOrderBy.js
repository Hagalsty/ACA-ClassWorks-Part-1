const myOrderBy = (collection, interates, order) => {
  let i = 0;
  let tmp = [];
  let res = [];

  const sortStr = (a, b) => {
    if (a[interates[i]] > b[interates[i]]) return order[i] === "asc" ? 1 : -1;
    else if (a[interates[i]] < b[interates[i]])
      return order[i] === "asc" ? -1 : 1;
    return 0;
  };

  collection.sort(sortStr);

  const sortNextStr = (a, b) => {
    if (a[interates[i - 1]] == b[interates[i - 1]]) return sortStr(a, b);
    return 0;
  };

  for (i = 1; i < interates.length; i++) collection.sort(sortNextStr);

  collection.map(function (val) {
    tmp = [];
    tmp.push(val[interates[0]]);
    tmp.push(val[interates[1]]);
    res.push(tmp);
  });
  return res;
};

console.log(myOrderBy(users, ["user", "age"], ["asc", "desc"]));
