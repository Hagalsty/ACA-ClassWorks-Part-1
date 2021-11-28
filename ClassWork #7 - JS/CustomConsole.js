class CustomConsole {
  constructor(prefix = "", historyLength) {
    this.prefix = prefix;
    this.historyLength = historyLength;
    this.hist = [];
  }

  log(...args) {
    const res = [];

    function arrStr(arr) {
      const res = [];
      let str = "[";
      for (let j = 0; j < arr.length; j++) {
        if (!Array.isArray(arr[j])) str += JSON.stringify(arr[j]);
        else str += arrStr(arr[j]);
        if (j != arr.length - 1) str += ",";
      }
      str += "]";

      return str;
    }

    for (let i = 0; i < args.length; i++) {
      if (!Array.isArray(args[i])) res.push(JSON.stringify(args[i]));
      else res.push(arrStr(args[i]));
      if (res.length <= this.historyLength)
        this.hist.unshift(JSON.stringify(args[i]));
      else {
        this.hist.pop();
        this.hist.unshift(JSON.stringify(args[i]));
      }
    }
    return this.prefix + res.join(" ");
  }
  history() {
    return this.hist.join(" ");
  }
  clearHistory() {
    this.hist = [];
    return true;
  }
}

const myConsole = new CustomConsole("Regular : ", 5);
console.log(
  myConsole.log(1, { x: 1, y: 2, z: { w: 3, f: 4 } }, [1, 2, 3, [4, 5]], "str")
);
console.log(myConsole.history());
console.log(myConsole.clearHistory());
console.log(myConsole.history());
