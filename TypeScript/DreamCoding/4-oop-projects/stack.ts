interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  // next: StackNode | undefined; // next는 있을 수도 있고 없을 수도 있다.
  readonly next?: StackNode;
  // readonly -> 불변성 유지?
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {}
  get size() {
    return this._size;
  }
  push(value: string) {
    if (this.size === this.capacity) {
      console.log("Stack is Full!");
      return;
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    // null == undefined, null !== undefined
    if (this.head == null) {
      throw new Error("Stack is Empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(2);

stack.push("sss");

stack.push("ssss");
stack.push("sssss");

console.log(stack);

while (stack.size !== 0) {
  console.log(stack.pop());
}
