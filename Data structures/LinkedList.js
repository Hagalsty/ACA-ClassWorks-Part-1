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
