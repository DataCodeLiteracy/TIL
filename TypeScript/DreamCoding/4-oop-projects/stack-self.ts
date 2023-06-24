{
  type StackInfo = {
    index: number;
    item: string;
  };

  class Stack {
    length: number;
    constructor(length: number) {
      this.length = length;
    }

    static stackObject(length: number): Stack {
      const stack = new Stack(length);
      return stack;
    }

    push(item: string): StackInfo {
      return {
        index: Stack.length,
        item
      };
    }
    pop(item: string): StackInfo {
      return {
        index: Stack.length,
        item: "JongHyun"
      };
    }
  }

  const stack = Stack.stackObject(20);
  console.log(stack.push("Kim"));
  console.log(stack.push("Lee"));
  console.log(stack);
}
