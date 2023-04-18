{
  interface Box<T> {
    inside: T;
  }

  let stringyBox: Box<string> = {
    inside: "abc"
  };

  let numberBox: Box<number> = {
    inside: 123
  };

  let incorrectBox: Box<number> = {
    inside: false
    // Error: TS2322: Type 'boolean' is not assignable to type 'number'.
    // 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
  };
}

{
  interface Array<T> {
    /**
     * 배열에서 마지막 요소를 제거하고 그 요소를 반환
     * 배열이 비어 있는 경우 undefined를 반환하고 배열은 수정되지 않음
     */
    pop(): T | undefined;

    /**
     * 배열의 끝에 새로운 요소를 추가하고 배열의 길이를 반환
     * @param items 배열에 추가된 새로운 요소
     */
    push(...items: T[]): number;
  }
}

{
  interface LinkedNode<Value> {
    next?: LinkedNode<Value>;
    value: Value;
  }

  function getLast<Value>(node: LinkedNode<Value>): Value {
    return node.next ? getLast(node.next) : node.value;
  }

  // 유추된 Value 타입 인수: Date
  let lastDate = getLast({
    value: new Date("09-13-1993")
  });

  // 유추된 Value 타입 인수: string
  let lastFruit = getLast({
    next: {
      value: "banana"
    },
    value: "apple"
  });

  // 유추된 Value 타입 인수: number
  // let lastMismatch = getLast({
  //   next: {
  //     value: 123
  //   }
  //   // value: false
  //   // Error: TS2322: Type 'boolean' is not assignable to type 'number'.
  //   // 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)
  // });
}

{
  interface CrateLike<T> {
    contents: T;
  }

  // let missingGeneric: CrateLike = {
  //   // Error: TS2314: Generic type 'CrateLike<T>' requires 1 type argument(s).
  //   inside: "??"
  // };
}

{
  class Secret<Key, Value> {
    key: Key;
    value: Value;

    constructor(key: Key, value: Value) {
      this.key = key;
      this.value = value;
    }

    getValue(key: Key): Value | undefined {
      return this.key === key ? this.value : undefined;
    }
  }

  const storage = new Secret(12345, "luggage"); // 타입: Secret<number, string>

  storage.getValue(1987); // 타입: string | undefined
}

{
  class CurriedCallback<Input> {
    #callback: (input: Input) => void;

    constructor(callback: (input: Input) => void) {
      this.#callback = (input: Input) => {
        console.log("Input:", input);
        callback(input);
      };
    }
    call(input: Input) {
      this.#callback(input);
    }
  }

  // 타입: CurriedCallback<string>
  new CurriedCallback((input: string) => {
    console.log(input.length);
  });

  // 타입: CurriedCallback<unknown>
  new CurriedCallback((input) => {
    console.log(input.length);
    // Error: TS18046: 'input' is of type 'unknown'. ;; 책이랑 에러가 다름..
  });

  new CurriedCallback<string>((input) => {
    console.log(input.length);
  });

  new CurriedCallback<string>((input: boolean) => {
    // Error: TS2345: Argument of type '(input: boolean) => void' is not assignable to parameter of type '(input: string) => void'.
    //   Types of parameters 'input' and 'input' are incompatible.
    //    Type 'string' is not assignable to type 'boolean'.
    // '(input: boolean) => void' 형식의 인수는 '(input: string) => void' 형식의 매개 변수에 할당될 수 없습니다.
    //  'input' 및 'input' 매개 변수의 형식이 호환되지 않습니다.
    //    'string' 형식은 'boolean' 형식에 할당할 수 없습니다.ts(2345)
  });
}

{
  class Quote<T> {
    lines: T;

    constructor(lines: T) {
      this.lines = lines;
    }
  }

  class SpokenQuote extends Quote<string[]> {
    speak() {
      console.log(this.lines.join("\n"));
    }
  }

  new Quote("The only real failure is the failure to try.").lines; // 타입: string
  new Quote([4, 8, 15, 16, 23, 42]).lines; // 타입: number[]

  new SpokenQuote(["Greed is so destructive.", "It destroys everything"]).lines; // 타입: string[]

  new SpokenQuote([4, 8, 15, 16, 23, 42]);
  // Error: TS2322: Type 'number' is not assignable to type 'string'.
  // 'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)

  class AttributedQuote<Value> extends Quote<Value> {
    speaker: string;

    constructor(value: Value, speaker: string) {
      super(value);
      this.speaker = speaker;
    }
  }

  // 타입: AttributedQuote<string>
  // (Quote<string> 확장하기)

  new AttributedQuote(
    "The road to success is always under construction.",
    "Lily Tomlin"
  );
}

{
  interface ActingCredit<Role> {
    role: Role;
  }

  class MoviePart implements ActingCredit<string> {
    role: string;
    speaking: boolean;

    constructor(role: string, speaking: boolean) {
      this.role = role;
      this.speaking = speaking;
    }
  }

  const part = new MoviePart("Miranda Priestly", true);

  part.role; // 타입: string

  class IncorrectExtension implements ActingCredit<string> {
    role: boolean;
    // Error: Property 'role' in type 'IncorrectExtension' is not assignable to the same property in base type 'ActingCredit<string>'.
    // Type 'boolean' is not assignable to type 'string'.
    // 'IncorrectExtension' 형식의 'role' 속성을 기본 형식 'ActingCredit<string>'의 동일한 속성에 할당할 수 없습니다.
    //  'boolean' 형식은 'string' 형식에 할당할 수 없습니다.ts(2416)
    //   속성 'role'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.ts(2564)
  }
}

{
  class CreatePairFactory<Key> {
    key: Key;

    constructor(key: Key) {
      this.key = key;
    }

    createPair<Value>(value: Value) {
      return { key: this.key, value };
    }
  }

  // 타입: CreatePairFactory<string>
  const factory = new CreatePairFactory("role");

  // 타입: { key: string, value: number }
  const numberPair = factory.createPair(10);

  // 타입: { key: string, value: string }
  const stringPair = factory.createPair("Sophie");
}

{
  class BothLogger<OnInstance> {
    instanceLog(value: OnInstance) {
      console.log(value);
      return value;
    }

    static staticLog<OnStatic>(value: OnStatic) {
      let fromInstance: OnInstance;
      // Error: TS2302: Static members cannot reference class type parameters.
      console.log(value);
      return value;
    }
  }

  const logger = new BothLogger<number[]>();
  logger.instanceLog([1, 2, 3]); // 타입: number[]

  // 유추된 OnStatic 타입 인수: boolean[]
  BothLogger.staticLog([false, true]);

  // 유추된 OnStatic 타입 인수: string
  BothLogger.staticLog<string>("You can't change the music of your soul.");
}

{
  type Nullish<T> = T | null | undefined;
}

{
  type CreatesValue<Input, Output> = (input: Input) => Output;

  // 타입: (input: string) => number
  let creator: CreatesValue<string, number>;

  creator = (text) => text.length; // OK

  creator = (text) => text.toUpperCase();
  // Error: TS2322: Type 'string' is not assignable to type 'number'.
}

{
  type Result<Data> = FailureResult | SuccessfulResult<Data>;

  interface FailureResult {
    error: Error;
    succeeded: false;
  }

  interface SuccessfulResult<Data> {
    data: Data;
    succeeded: true;
  }

  function handleResult(result: Result<string>) {
    if (result.succeeded) {
      // result: SuccessfulResult<string>의 타입
      console.log(`We did it! ${result.data}`);
    } else {
      // result: FailureResult의 타입
      console.error(`Awww... ${result.error}`);
    }

    result.data;
    // Error: TS2339: Property 'data' does not exist on type 'Result<string>'.
    // Property 'data' does not exist on type 'FailureResult'.
    // 'Result<string>' 형식에 'data' 속성이 없습니다.
    // 'FailureResult' 형식에 'data' 속성이 없습니다.ts(2339)
  }
}
