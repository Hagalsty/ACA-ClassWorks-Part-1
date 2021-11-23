class LinkedListNode {
  constructor(value, next = null) {
    this.next = next;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  peek() {
    return this.head;
  }

  append(value) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }

    this.tail.next = node;
    this.tail = node;

    return this;
  }

  find(compare) {
    let currentNode = this.head;

    while (currentNode) {
      if (compare(currentNode.value)) return currentNode.value;
      currentNode = currentNode.next;
    }
  }

  delete(value) {
    let currentNode = this.head;

    while (currentNode.next) {
      if (currentNode.next.value === value) {
        let temp = currentNode.next.next;
        currentNode.next = temp;

        return true;
      }
    }

    return false;
  }

  insert(afterNode, node) {
    let temp = afterNode.next;
    afterNode.next = node;
    node.next = temp;
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      let temp = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = temp;
    }

    this.head = prevNode;
    return this;
  }
}

class HashTable {
  constructor(totalSize = 64, resizeLoadFactor = 0.5) {
    this.table = new Array(totalSize).fill(null).map(() => new LinkedList());
    this.numberOfElements = 0;
    this.resizeLoadFactor = resizeLoadFactor;
  }

  get loadFactor() {
    return this.numberOfElements / this.table.length;
  }

  hash(key) {
    let hashNumber = 0;

    for (const char of key) {
      hashNumber += char.charCodeAt();
    }

    return hashNumber % this.table.length;
  }

  resize() {
    const newTableSize = this.table.length * 2;
    const newHashTable = new HashTable(newTableSize, this.resizeLoadFactor);

    for (const linkedList of this.table) {
      let currentNode = linkedList.head;

      while (currentNode) {
        newHashTable.set(currentNode.value.key, currentNode.value.value);
        currentNode = currentNode.next;
      }
    }

    this.table = newHashTable.table;
  }

  set(key, value) {
    const index = this.hash(key);
    console.log(index);
    let currentNode = this.table[index].head;

    while (currentNode) {
      if (currentNode.value.key === key) {
        currentNode.value.value = value;
        return this;
      }
      currentNode = currentNode.next;
    }

    this.numberOfElements++;

    if (this.loadFactor >= this.resizeLoadFactor) {
      this.resize();
    }

    this.table[index].append({ value, key });

    return this;
  }

  get(key) {
    const index = this.hash(key);

    let currentNode = this.table[index].head;

    while (currentNode) {
      if (currentNode.value.key === key) return currentNode.value.value;
      currentNode = currentNode.next;
    }

    return null;
  }
}

const table = new HashTable(2);
table.set("a", 3);
table.set("b", 4);
table.set("c", 5);
table.set("d", 6);

console.log(table.get("b"));
console.log(table.get("a"));
console.log(table.get("c"));
console.log(table.get("d"));
console.log(table.table.length);
