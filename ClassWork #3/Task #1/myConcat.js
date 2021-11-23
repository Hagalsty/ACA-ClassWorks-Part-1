const myConcat = (arr, ...vals) => {
  let res = [...arr];

  for (let i = 0; i < vals.length; i++)
    if (Array.isArray(vals[i]))
      for (let j = 0; j < vals[i].length; j++) res.push(vals[i][j]);
    else res.push(vals[i]);

  return res;
};
