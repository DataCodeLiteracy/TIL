{
  interface Quote<T = string> {
    value: T;
  }

  let explicit: Quote<number> = { value: 123 };

  let implicit: Quote = {
    value: "Be yourself. The world worships the original."
  };

  let mismatch: Quote = { value: 123 };
  // Error: TS2322: Type 'number' is not assignable to type 'string'.
  // 'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)
}

{
  interface KeyValuePair<Key, Value = Key> {
    key: Key;
    value: Value;
  }

  // 타입: KeyValuePair<string, number>
  let allExplicit: KeyValuePair<string, number> = {
    key: "rating",
    value: 10
  };

  // 타입:  KeyValuePair<string, string>
  let oneDefaulting: KeyValuePair<string> = {
    key: "rating",
    value: "ten"
  };

  let firstMissing: KeyValuePair = {
    // Error: S2707: Generic type 'KeyValuePair<Key, Value>' requires between 1 and 2 type arguments.
    // 제네릭 형식 'KeyValuePair<Key, Value>'에 1 및 2 사이의 형식 인수가 필요합니다.ts(2707)
    key: "rating",
    value: 10
  };
}

{
  function inTheEnd<First, Second, Third = number, Forth = string>() {} // OK

  function intheMiddle<First, Second = boolean, Third = number, Fourth>() {}
  // Error: S2706: Required type parameters may not follow optional type parameters.
  // 필수 형식 매개 변수는 선택적 형식 매개 변수 다음에 올 수 없습니다.ts(2706)
}

{
  interface WithLength {
    length: number;
  }

  function logWithLength<T extends WithLength>(input: T) {
    console.log(`Length: ${input.length}`);
    return input;
  }

  logWithLength("No one can figure out your worth but you."); // 타입: string
  logWithLength([false, true]); // 타입: boolean[]
  logWithLength({ length: 123 }); // 타입: { length: number }

  logWithLength(new Date());
  // Error: TS2345: Argument of type 'Date' is not assignable to parameter of type 'WithLength'.
  //  Property 'length' is missing in type 'Date' but required in type 'WithLength'.
  // 'Date' 형식의 인수는 'WithLength' 형식의 매개 변수에 할당될 수 없습니다.
  //  'length' 속성이 'Date' 형식에 없지만 'WithLength' 형식에서 필수입니다.ts(2345)
}

{
  function get<T, Key extends keyof T>(container: T, key: Key) {
    return container[key];
  }

  const roles = {
    favorite: "Fargo",
    others: ["Almost Famous", "Burn After Reading", "Nomadland"]
  };

  const favorite = get(roles, "favorite"); // 타입: string
  const others = get(roles, "others"); // 타입: string[]

  const missing = get(roles, "extras");
  // Error: TS2345: Argument of type '"extras"' is not assignable to parameter of type '"favorite" | "others"'.
  // '"extras"' 형식의 인수는 '"favorite" | "others"' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
}

{
  function get<T>(container: T, key: keyof T) {
    return container[key];
  }

  const roles = {
    favorite: "Fargo",
    others: ["Almost Famous", "Burn After Reading", "Nomadland"]
  };

  const found = get(roles, "favorite"); // 타입: string | string[]
}
