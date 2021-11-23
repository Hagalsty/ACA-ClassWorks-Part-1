const students = [
  {
    name: "Steve",
    notes: [5, 5, 3, -1, 6],
  },
  {
    name: "John",
    notes: [3, 2, 5, 0, -3],
  },
];

const getNotesDistribution = (obj) => {
  let notes = [];
  const res = {};
  obj.map((el) => {
    notes = [...notes, ...el["notes"]]
      .filter((num) => num >= 1 && num <= 5)
      .map((key) => {
        res[key] = res[key] ? res[key] + 1 : 1;
      });
  });

  return res;
};

console.log(getNotesDistribution(students));
