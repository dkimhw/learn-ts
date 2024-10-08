import { Sorter } from './Sorter';

class Node {
  data: number;
  next: Node | null = null;

  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add (data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;

    let node = this.head;
    let counter = 1;
    while (node.next) {
      node = node.next;
      counter++;
    }

    return counter;
  }

  at (index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) return node;
      node = node.next;
      counter++;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty')
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftHand = this.at(leftIndex);
    let rightHand = this.at(rightIndex);

    // only the data has to change
    let leftHandData = leftHand.data;
    leftHand.data = rightHand.data;
    rightHand.data = leftHandData;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
