function superStack(operations) {
  let result = "";
  const stack = [];

  const opers = {
    push: (x) => {
      x = parseInt(x);
      stack.push(x);
      result += stack[stack.length - 1] + "\n";
    },
    pop: () => {
      stack.pop();
      if (stack.length != 0) {
        result += stack[stack.length - 1] + "\n";
      } else {
        result += "EMPTY" + "\n";
      }
    },
    inc: (elems, value) => {
      elems = parseInt(elems);
      value = parseInt(value);
      for (let i = 0; i < elems; i++) {
        stack[i] += value;
      }
      result += stack[stack.length - 1] + "\n";
    },
  };

  for (let operation of operations) {
    let operators = operation.split(" ");
    opers[operators[0]](operators[1], operators[2]);
  }
  console.log(result.slice(0, result.length - 1));
}
