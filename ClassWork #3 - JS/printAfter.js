const printAfter = (f) => {
  console.log("hello world");
  f();
};

const print = () => console.log("Elon Musk");

printAfter(print)
