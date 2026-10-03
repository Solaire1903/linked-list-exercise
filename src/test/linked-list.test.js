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
});
