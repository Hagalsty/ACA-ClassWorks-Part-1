function isThisATree(str) {
  let arrOfNodes = str.split(" ");
  let objectOfNodes = {};
  const setOfNodes = new Set(arrOfNodes);

  for (let item of arrOfNodes) {
    let parent = item[1];
    let child = item[3];
    if (objectOfNodes[parent]) {
      if (objectOfNodes[parent].right) return "E1";
      objectOfNodes[parent].right = child;

      if (child < objectOfNodes[parent].left) {
        [objectOfNodes[parent].left, objectOfNodes[parent].right] = [
          objectOfNodes[parent].right,
          objectOfNodes[parent].left,
        ];
      }

      continue;
    }

    objectOfNodes[parent] = {
      left: child,
    };
  }
  if (setOfNodes.size != arrOfNodes.length) return "E2";

  let roots = [];
  let visitedNodes = [];

  const children = Object.values(objectOfNodes).reduce(
    (acc, { left, right }) => {
      if (left) {
        acc.push(left);
      }
      if (right) {
        acc.push(right);
      }

      return acc;
    },
    []
  );

  let setOfChildrens = new Set(children);
  if (setOfChildrens.size != children.length) return "E5";

  loop1: for (let key in objectOfNodes) {
    for (let { left, right } of Object.values(objectOfNodes)) {
      if (key === left || key === right) continue loop1;
    }
    roots.push(key);
  }

  if (roots.length != 1) {
    if (roots.length == 0) return "E5";
    return "E4";
  }

  return getResult(objectOfNodes, roots[0]);
}

function getResult(obj, root) {
  let result = "(" + root;

  if (!obj[root]) {
    return "(" + root + ")";
  }
  if (obj[root].left) {
    result += getResult(obj, obj[root].left);
  }
  if (obj[root].right) {
    result += getResult(obj, obj[root].right);
  }
  return (result += ")");
}

console.log(isThisATree("(A,B) (A,C) (B,G) (C,H) (E,F) (B,D) (C,E)"));
