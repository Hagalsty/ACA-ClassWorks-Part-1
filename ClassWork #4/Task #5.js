total = [
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
];

const champions = (total) => {
  const compareArr = [];
  let points = 0;
  let goalDiff = 0;

  for (let i = 0; i < total.length; i++) {
    let { name, wins, loss, draws, scored, conceded } = total[i];
    points = 3 * wins + 0 * loss + 1 * draws;
    goalDiff = scored - conceded;
    compareArr.push({
      name: name,
      points: points,
      goalDiff: goalDiff,
    });
  }

  compareArr.sort((a, b) => {
    return -a["points"] + b["points"];
  });

  if (compareArr[0]["points"] != compareArr[1]["points"])
    return compareArr[0].name;

  return compareArr[0]["goalDiff"] > compareArr[1]["goalDiff"]
    ? compareArr[0].name
    : compareArr[1].name;
};

console.log(champions(total));
