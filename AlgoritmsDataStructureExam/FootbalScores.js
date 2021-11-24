function counts(teamA, teamB) {
  let sortedA = teamA.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < teamB.length; i++) {
    let start = 0;
    let end = teamA.length;
    let mid;
    while (start < end) {
      mid = Math.floor((start + end) / 2);
      if (sortedA[mid] > teamB[i]) end = mid;
      else start = mid + 1;
    }

    if (start === end) res.push(start);
    res.push(mid);
  }
  return res;
}
