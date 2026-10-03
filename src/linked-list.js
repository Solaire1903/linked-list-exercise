/**
 * Represents a single Node in the Linked List
 */
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

/**
 * Represents a Linked List structure
 */
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /**
   * Appends a new Node with a given value to the end of the list
   * @param {*} value The value of the Node to append
   */
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }

    let currentNode = this.head;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = new Node(value);
  }
}

export { LinkedList, Node };
