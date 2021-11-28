const name = document.getElementById("name");
const age = document.getElementById("age");
const grade = document.getElementById("averageGrade");
const tbody = document.getElementsByTagName("tbody");
const ageTh = document.getElementById("ageTh");
const students = [];

document.addEventListener("keypress", function (e) {
  if (e.key != "Enter") return;

  const nameVal = name.value;
  const ageVal = age.value;
  const gradeVal = grade.value;

  if (!nameVal || !ageVal || !gradeVal) {
    alert("Missing input");
    return;
  }
  for (let i = 0; i < nameVal.length; i++) {
    if (
      !(nameVal[i] >= "a" && nameVal[i] <= "z") &&
      !(nameVal[i] >= "A" && nameVal[i] <= "Z")
    ) {
      alert("Wrong Name");
      return;
    }
  }
  if (!Number(ageVal)) {
    alert("Wrong Age");
    return;
  }
  if (!Number(gradeVal)) {
    alert("Wrong Average Grade");
    return;
  }

  name.value = "";
  age.value = "";
  grade.value = "";

  students.push({
    name: nameVal,
    age: ageVal,
    grade: gradeVal,
  });

  const trElement = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdAge = document.createElement("td");
  const tdGrade = document.createElement("td");

  tdName.innerText = nameVal;
  tdName.className = "nameTd";
  tdAge.innerText = ageVal;
  tdAge.className = "ageTd";
  tdGrade.innerText = gradeVal;
  tdGrade.className = "gradeTd";

  trElement.append(tdName, tdAge, tdGrade);
  tbody[0].append(trElement);
});

ageTh.addEventListener("click", function () {
  const names = document.getElementsByClassName("nameTd");
  const ages = document.getElementsByClassName("ageTd");
  const grades = document.getElementsByClassName("gradeTd");
  const newTbody = document.createElement("tbody");
  const ageArr = [];

  for (let i = 0; i < ages.length; i++) {
    ageArr.push(ages[i].innerText);
  }

  const checkArray = (arr) => {
    if (arr.every((x, i) => i === 0 || x >= arr[i - 1])) {
      return "Ascending";
    }
    if (arr.every((x, i) => i === 0 || x <= arr[i - 1])) {
      return "Descending";
    }
    return "Unsorted";
  };

  const arrSort = checkArray(ageArr);

  if (arrSort == "Ascending") {
    for (let i = ageArr.length - 1; i >= 0; i--) {
      const trElement = document.createElement("tr");
      const tdName = document.createElement("td");
      const tdAge = document.createElement("td");
      const tdGrade = document.createElement("td");

      tdName.innerText = names[i].innerText;
      tdName.className = "nameTd";
      tdAge.innerText = ages[i].innerText;
      tdAge.className = "ageTd";
      tdGrade.innerText = grades[i].innerText;
      tdGrade.className = "gradeTd";

      trElement.append(tdName, tdAge, tdGrade);
      newTbody.append(trElement);
    }
  } else if (arrSort == "Descending") {
    for (let i = 0; i < students.length; i++) {
      const trElement = document.createElement("tr");
      const tdName = document.createElement("td");
      const tdAge = document.createElement("td");
      const tdGrade = document.createElement("td");

      tdName.innerText = students[i].name;
      tdName.className = "nameTd";
      tdAge.innerText = students[i].age;
      tdAge.className = "ageTd";
      tdGrade.innerText = students[i].grade;
      tdGrade.className = "gradeTd";

      trElement.append(tdName, tdAge, tdGrade);
      newTbody.append(trElement);
    }
  } else {
    const tempObj = [...students].sort((a, b) => Number(a.age) - Number(b.age));

    for (let i = 0; i < tempObj.length; i++) {
      const trElement = document.createElement("tr");
      const tdName = document.createElement("td");
      const tdAge = document.createElement("td");
      const tdGrade = document.createElement("td");

      tdName.innerText = tempObj[i].name;
      tdName.className = "nameTd";
      tdAge.innerText = tempObj[i].age;
      tdAge.className = "ageTd";
      tdGrade.innerText = tempObj[i].grade;
      tdGrade.className = "gradeTd";

      trElement.append(tdName, tdAge, tdGrade);
      newTbody.append(trElement);
    }
  }
  tbody[0].replaceWith(newTbody);
});
