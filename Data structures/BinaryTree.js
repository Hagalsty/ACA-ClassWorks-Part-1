class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  dfs(node = this.root) {
    if (node.left) this.dfs(node.left);
    if (node.right) this.dfs(node.right);
    console.log(node.value);
  }

  bfs() {
    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      const node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      console.log(node.value);
    }
  }
}

const A = new TreeNode("A");
const B = new TreeNode("B");
const C = new TreeNode("C");
const D = new TreeNode("D");
const E = new TreeNode("E");
const F = new TreeNode("F");
const G = new TreeNode("G");
const H = new TreeNode("H");

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.right = G;
C.left = F;
D.left = H;

const binaryTree = new BinaryTree(A);
binaryTree.bfs();
binaryTree.dfs();
