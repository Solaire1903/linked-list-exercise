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
});
