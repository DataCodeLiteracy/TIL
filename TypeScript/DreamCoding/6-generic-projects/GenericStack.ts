{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    // next: StackNode | undefined; // next는 있을 수도 있고 없을 수도 있다.
    readonly next?: StackNode<T>;
    // readonly -> 불변성 유지?
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }
    push(value: T) {
      if (this.size === this.capacity) {
        console.log("Stack is Full!");
        return;
      }
      // const node: StackNode<T> = { value, next: this.head };
      const node = { value, next: this.head }; // 타입추론
      this.head = node;
      this._size++;
    }
    pop(): T {
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

  const stack = new StackImpl(5);

  stack.push(1);

  stack.push(2);
  stack.push(3);

  console.log(stack);

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
