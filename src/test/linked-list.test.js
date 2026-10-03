import { LinkedList, Node } from "../linked-list.js";

describe("Linked List Tests", () => {
  const linkedList = new LinkedList();
  const node = new Node();

  test("Empty Node", () => {
    expect(node.value).toBe(null);
    expect(node.nextNode).toBe(null);
  });

  test("Empty List", () => {
    expect(linkedList.head).toBe(null);
  });
});
