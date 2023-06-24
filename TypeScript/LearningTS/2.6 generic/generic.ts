{
  // JS
  // function identity(input) {
  //   return input;
  // }
  // identity("abc");
  // identity(123);
  // identity({ quote: "I think your self emerges more clearly over time." });

  function identity(input: any) {
    return input;
  }

  let value = identity(42); // value: any 타입
}

{
  function identity<T>(input: T) {
    return input;
  }

  const numeric = identity("me"); // 타입: "me"
  const stringy = identity(123); // 타입: 123
}

{
  const identity = <T>(input: T) => input;

  identity(123); // 타입: 123
}

{
  function logWrapper<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
      console.log("Input:", input);
      callback(input);
    };
  }

  // 타입: (input: string) => void
  logWrapper((input: string) => {
    console.log(input.length);
  });

  // 타입: (input: unknown) => void
  logWrapper((input) => {
    // console.log(input.length);
    // Error: 'input' is of type 'unknown'. 에러가 책이랑 다름..
  });

  // 타입: (input: string) => void
  logWrapper<string>((input) => {
    console.log(input.length);
  });

  logWrapper<string>((input: boolean) => {
    // Error:  Argument of type '(input: boolean) => void' is not assignable to parameter of type '(input: string) => void'.
    // Types of parameters 'input' and 'input' are incompatible.
    //  Type 'string' is not assignable to type 'boolean'.
    // '(input: boolean) => void' 형식의 인수는 '(input: string) => void' 형식의 매개 변수에 할당될 수 없습니다.
    // 'input' 및 'input' 매개 변수의 형식이 호환되지 않습니다.
    //  'string' 형식은 'boolean' 형식에 할당할 수 없습니다.ts(2345)
  });

  // 타입: (input: string) => void
  logWrapper<string>((input: string) => {});
}

{
  function makeTuple<First, Second>(first: First, second: Second) {
    return [first, second] as const;
  }

  let tuple = makeTuple(true, "abc"); // value: readonly [boolean, string] 타입
}

{
  function makePair<Key, Value>(key: key, value: value) {
    return { key, value };
  }

  // OK: 타입 인수가 둘 다 제공되지 않음
  makePair("abc", 123); // 타입 { key: string; value: number}

  // OK: 두 개의 타입 인수가 제공됨
  makePair<string, number>("abc", 123); // 타입: { key: string; value: number}
  makePair<"abc", 123>("abc", 123); // 타입: { key: "abc"; value: 123}

  makePair<string>("abc", 123);
  // Error: Expected 2 type arguments, but got 1.
}
