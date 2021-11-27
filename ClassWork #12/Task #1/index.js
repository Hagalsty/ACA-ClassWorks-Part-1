const buttonElement = document.getElementById("b1");
const pElement = document.getElementById("p1");

buttonElement.addEventListener("click", function () {
  if (pElement.innerText == "") {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const year = new Date().getFullYear();
    const day = new Date().getDate();
    const month = months[new Date().getMonth()];
    pElement.innerText = `${day}/${month}/${year}`;
  } else {
    pElement.innerText = "";
  }
});
