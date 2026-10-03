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

  /**
   * Gets the first node (head node) of the list
   * @returns The head node of the list
   */
  headNode() {
    if (this.head === null) {
      return undefined;
    }

    return this.head.value;
  }

  /**
   * Gets the last node (tail node) of the list
   * @returns The tail node of the list
   */
  tailNode() {
    if (this.head === null) {
      return undefined;
    }

    let currentNode = this.head;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  }

  /**
   * Returns the value of the node at a given index
   * @param {number} searchIndex The index of the node to find the value of
   * @returns The value of the node at the given index
   */
  at(searchIndex) {
    let currentNode = this.head;
    let currentIndex = 0;

    while (currentNode !== null) {
      if (currentIndex === searchIndex) return currentNode.value;

      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return undefined;
  }

  /**
   * Removes the head node from the list and returns its value
   * @returns The value of the head node
   */
  pop() {
    if (this.head === null) {
      return undefined;
    }

    let headValue = this.head.value;

    this.head = this.head.nextNode;

    return headValue;
  }

  /**
   * Checks, if a given value is in the list
   * @param {*} value The value to search for
   * @returns True, if the value is in the list, false otherwise
   */
  contains(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) return true;

      currentNode = currentNode.nextNode;
    }

    return false;
  }

  /**
   * Finds the index of the first node with the given value
   * @param {*} value The value to search the index for
   * @returns The index of the node with the given value, or -1 if there is no such node
   */
  findIndex(value) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) return index;

      currentNode = currentNode.nextNode;
      index++;
    }

    return -1;
  }

  /**
   * Represents the list as a string
   * @returns A string representing the list
   */
  toString() {
    if (this.head === null) {
      return "";
    }

    let listString = `( ${this.head.value} ) ->`;
    let currentNode = this.head.nextNode;

    while (currentNode !== null) {
      listString = listString.concat(" ", `( ${currentNode.value} ) ->`);
      currentNode = currentNode.nextNode;
    }

    listString = listString.concat(" ", "null");

    return listString;
  }
}

export { LinkedList, Node };
