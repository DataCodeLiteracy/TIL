{
  class PromiseLike<Value> {
    constructor(
      executor: (
        resolve: (value: Value) => void,
        reject: (reason: unknown) => void
      ) => void
    ) {}
  }

  // 타입: Promise<unknown>
  const resolveUnknown = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
  });

  // 타입: Promise<string>
  const resolveString = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
  });
}

{
  // 타입: Promise<string>
  const textEventually = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
  });

  // 타입: Promise<number>
  const lengthEventually = textEventually.then((text) => text.length);
}

{
  // 타입: (text: string) => Promise<number>
  async function lengthAfterSecond(text: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return text.length;
  }

  // 타입: (text: string) => Promise<number>
  async function lengthImmediately(text: string) {
    return text.length;
  }
}

{
  // OK
  async function givesPromiseForString(): Promise<string> {
    return "Done!";
  }

  async function givesString(): string {
    // Error: The return type of an async function or method must be the global Promise<T> type. Did you mean to write 'Promise<string>'?
    return "Done!";
  }
}

{
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

  let person: Person = new Person("John", 25);
  console.log(person.name); // 출력: John
  let person2: Person = new Person("jonh", true);
}

{
  function logInput<Input extends string>(input: Input) {
    console.log("Hi!", input);
  }
}

{
  function logInput(input: string) {
    console.log("Hi!", input);
  }
}

{
  // L과 V는 과연 무엇일까요?
  function labelBox<L, V>(l: L, v: V) {}
}

{
  // 좀 더 명확합니다.
  function labelBox<Label, Value>(l: Label, v: Value) {}
}
