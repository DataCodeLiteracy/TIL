interface IStack {
  readonly size: number;
  push(item: string): void;
  pop(): string;
}

class StackNode {
  item: string;
  next: string | null;
  constructor(item: string, next: string | null) {
    this.item = item;
    this.next = null;
  }
}

class Stack implements IStack {
  head: string | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  push(item: string) {
    if (this.head === null) {
      this.head = new StackNode(item, this.head);

    }
  };
  pop(): string {
    return '1';
  };
}

const stack = new Stack();
