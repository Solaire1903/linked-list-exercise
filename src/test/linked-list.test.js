import { LinkedList, Node } from "../linked-list.js";

describe("Linked List Tests", () => {
  test("Empty Node", () => {
    const node = new Node();

    expect(node.value).toBe(null);
    expect(node.nextNode).toBe(null);
  });

  test("Empty List", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBe(null);
  });

  test("Append Node", () => {
    const linkedList = new LinkedList();

    linkedList.append(3);
    expect(linkedList.head.value).toBe(3);

    linkedList.append(5);
    expect(linkedList.head.nextNode.value).toBe(5);

    linkedList.append(7);
    expect(linkedList.head.nextNode.nextNode.value).toBe(7);
  });

  test("Prepend Node", () => {
    const linkedList = new LinkedList();

    linkedList.prepend(3);
    expect(linkedList.head.value).toBe(3);

    linkedList.prepend(5);
    expect(linkedList.head.value).toBe(5);
    expect(linkedList.head.nextNode.value).toBe(3);

    linkedList.prepend(7);
    expect(linkedList.head.value).toBe(7);
    expect(linkedList.head.nextNode.value).toBe(5);
    expect(linkedList.head.nextNode.nextNode.value).toBe(3);
  });

  test("Get List size", () => {
    const linkedList = new LinkedList();
    expect(linkedList.size()).toBe(0);

    linkedList.prepend(3);
    linkedList.append(5);
    linkedList.prepend(1);
    expect(linkedList.size()).toBe(3);
  });

  test("Get first Node in the List", () => {
    const linkedList = new LinkedList();
    expect(linkedList.headNode()).toBe(undefined);

    linkedList.append(3);
    linkedList.append(5);
    expect(linkedList.headNode()).toBe(3);
  });

  test("Get last Node in the List", () => {
    const linkedList = new LinkedList();
    expect(linkedList.tailNode()).toBe(undefined);

    linkedList.append(3);
    linkedList.append(5);
    expect(linkedList.tailNode()).toBe(5);
  });

  test.skip("Get Node at index", () => {
    const linkedList = new LinkedList();
    linkedList.append(3);
    linkedList.append(5);
    linkedList.append(7);
    linkedList.prepend(1);

    expect(linkedList.at(0)).toBe(1);
    expect(linkedList.at(2)).toBe(5);
    expect(linkedList.at(6)).toBe(undefined);
  });

  test.skip("Pop first Node from the List", () => {
    const linkedList = new LinkedList();
    expect(linkedList.pop()).toBe(undefined);

    linkedList.append(3);
    linkedList.append(5);
    expect(linkedList.pop()).toBe(3);
    expect(linkedList.head.value).toBe(5);
  });

  test.skip("Search, if given value is in the List", () => {
    const linkedList = new LinkedList();
    linkedList.append(3);
    linkedList.append(5);

    expect(linkedList.contains(3)).toBe(true);
    expect(linkedList.contains(7)).toBe(false);
  });

  test.skip("Find index of Node with the given value", () => {
    const linkedList = new LinkedList();
    linkedList.append(3);
    linkedList.append(5);
    linkedList.append(7);
    linkedList.append(3);

    expect(linkedList.findIndex(5)).toBe(1);
    expect(linkedList.findIndex(3)).toBe(0);
    expect(linkedList.findIndex(9)).toBe(-1);
  });

  test.skip("Represent List as a string", () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe("");

    linkedList.append(3);
    linkedList.append(5);
    linkedList.append(7);
    expect(linkedList.toString()).toBe("( 3 ) -> ( 5 ) -> ( 7 ) -> null");
  });
});
