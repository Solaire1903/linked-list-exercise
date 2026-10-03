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

  /**
   * Adds a new Node with the given value to the head of the list
   * @param {*} value
   */
  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value);
      return;
    }

    const newHead = new Node(value);

    newHead.nextNode = this.head;
    this.head = newHead;
  }

  /**
   * Gets the size of the list
   * @returns The list size
   */
  size() {
    let currentNode = this.head;
    let size = 0;

    while (currentNode !== null) {
      size++;
      currentNode = currentNode.nextNode;
    }

    return size;
  }

  
}

export { LinkedList, Node };
