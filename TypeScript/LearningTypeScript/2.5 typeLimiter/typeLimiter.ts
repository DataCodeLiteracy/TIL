{
  let anyValue: any;
  anyValue = "Lucille Ball"; // OK
  anyValue = 123; // OK

  console.log(anyValue); // OK
}

{
  function greetComedian(name: any) {
    // 타입 오류 없음
    console.log(`Announcing ${name.toUpperCase()}!`);
  }

  // greetComedian({ name: "Bea Arthur" });
  // Runtime error: name.toUpperCase is not a function
}

{
  function greetComedian(name: unknown) {
    // console.log(`Announcing ${name.toUpperCase()}!`);
    // Error: 'name' is of type 'unknown'.
    // 'name'은(는) 'unknown' 형식입니다.ts(18046)
  }
}

{
  function greetComedianSafety(name: unknown) {
    if (typeof name === "string") {
      console.log(`Announcing ${name.toUpperCase()}!`); // OK
    } else {
      console.log(`Well, I'm off.`);
    }
  }

  greetComedianSafety("Betty White"); // Logs: 4
  greetComedianSafety({}); // 로그 없음
}

{
  function isNumberOrStinrg(value: unknown) {
    return ["number", "string"].includes(typeof value);
  }

  function logVlalueIfExists(value: number | string | null | undefined) {
    if (isNumberOrStinrg(value)) {
      // value: number | string | null | undefined의 타입
      // value.toString();
      // Error: Object is possibly undefined.
    } else {
      console.log("value doesnot exist:", value);
    }
  }
}

{
  // function typePredicate(input: WideType): input is NarrowType;
}

{
  function isNumberOrString(value: unknown): value is number | string {
    return ["number", "string"].includes(typeof value);
  }

  function logVlalueIfExists(value: number | string | null | undefined) {
    if (isNumberOrString(value)) {
      // value: number | string의 타입
      value.toString(); // OK
    } else {
      // value: null | undefined의 타입
      console.log("value does not exist:", value);
    }
  }
}

{
  interface Comedian {
    funny: boolean;
  }

  interface StandupComedian extends Comedian {
    routine: string;
  }

  function isStrandupComedian(value: Comedian): value is StandupComedian {
    return "routine" in value;
  }

  function workWithComedian(value: Comedian) {
    if (isStrandupComedian(value)) {
      // value: StandupComedian의 타입
      console.log(value.routine); // OK
    }
    // value: Comedian의 타입
    // console.log(value.routine);
    // Error: Property 'routine' does not exist on type 'Comedian'.
    // 'Comedian' 형식에 'routine' 속성이 없습니다.ts(2339)
  }
}

{
  function isLongString(input: string | undefined): input is string {
    return !!(input && input.length >= 7);
  }

  function workWithText(text: string | undefined) {
    if (isLongString(text)) {
      // text: string의 타입
      console.log("Long text:", text.length);
    } else {
      // text: undefined의 타입
      // console.log("Short text:", text?.length);
      // Error: Property 'length' does not exist on type 'never'.
      // 'never' 형식에 'length' 속성이 없습니다.ts(2339)
    }
  }
}

{
  interface Ratings {
    audience: number;
    critic: number;
  }

  function getRating(rating: Ratings, key: string): number {
    return ratings[key];
    // Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Ratings'.
    // No index signature with a parameter of type 'string' was found on type 'Ratings'.
  }

  const ratings: Ratings = { audience: 66, critic: 84 };

  getRating(ratings, "audience"); // OK

  getRating(ratings, "not valid"); // 허용되지만 사용하면 안 됨
}

{
  interface Ratings {
    audience: number;
    critic: number;
  }

  function getRating(ratings: Ratings, key: "audience" | "critic"): number {
    return ratings[key]; // OK
  }

  const ratings: Ratings = { audience: 66, critic: 84 };

  getRating(ratings, "audience"); // OK

  getRating(ratings, "not valid");
  // Error: Argument of type '"not valid"' is not assignable to parameter of type '"audience" | "critic"'
}

{
  interface Ratings {
    audience: number;
    critic: number;
  }

  function getCountKeyof(ratings: Ratings, key: keyof Ratings): nubmer {
    return ratings[key]; // OK
  }

  const ratings: Ratings = { audience: 66, critic: 84 };

  getCountKeyof(ratings, "audience"); // OK

  getCountKeyof(ratings, "not valid");
  // Error: Argument of type '"not valid"' is not assignable to parameter of type 'keyof Ratings'.
}

{
  const original = {
    medium: "movie",
    title: "Mean Girls"
  };

  let adaptation: typeof original;

  if (Math.random() > 0.5) {
    adaptation = { ...original, medium: "play" }; // OK
  } else {
    adaptation = { ...original, medium: 2 };
    // Error: Type 'number' is not assignable to type 'string'.
    // 'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)
  }
}

{
  const ratings = {
    imdb: 8.4,
    metacritic: 82
  };

  function logRating(key: keyof typeof ratings) {
    console.log(ratings[key]);
  }

  logRating("imdb"); // OK

  logRating("invalid");
  // Error: Argument of type '"invalid"' is not assignable to parameter of type '"imdb" | "metacritic"'.
  // '"invalid"' 형식의 인수는 '"imdb" | "metacritic"' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
}

{
  const rawData = '["grace", "frankie"]';

  // 타입: any
  JSON.parse(rawData);

  // 타입 : string[]
  JSON.parse(rawData) as string[];

  // 타입: [string, string]
  JSON.parse(rawData) as [string, string];

  // 타입: ["grace", "frankie]
  JSON.parse(rawData) as ["grace", "frankie"];
}

{
  const rawData = '["grace", "frankie"]';

  // 타입: any
  JSON.parse(rawData);

  // 타입 : string[]
  JSON.parse(rawData);

  // 타입: [string, string]
  JSON.parse(rawData);

  // 타입: ["grace", "frankie]
  JSON.parse(rawData);
}

{
  try {
    // 오류를 발생시키는 코드
  } catch (error) {
    console.warn("Oh no!", (error as Error).message);
  }
}

{
  try {
    // 오류를 발생시키는 코드
  } catch (error) {
    console.warn("Oh no!", error instanceof Error ? error.message : error);
  }
}

{
  // 타입 유추: Date | undefined
  let maybeDate = Math.random() > 0.5 ? undefined : new Date();

  // 타입이 Date라고 간주됨
  maybeDate as Date;

  // 타입이 Date라고 간주됨
  maybeDate!;
}

{
  const seasonCounts = new Map([
    ["I Love Lucy", 6],
    ["The Golden Girls", 7]
  ]);

  // 타입: string | undefined
  const maybeValue = seasonCounts.get("I Love Lucy");

  console.log(maybeValue.toUpperCase());
  // Error: 'maybeValue' is possibly 'undefined'.

  // 타입 : string  -> 지금 책이랑 타입이 안 맞음.. 다시 봐야 함
  const knownValue = seasonCounts.get("I Love Lucy")!;

  console.log(knownValue.toUpperCase()); // OK
}

{
  const seasonCounts = new Map([
    ["Broad City", 5],
    ["community", 6]
  ]);

  // 타입 : string
  const knownValue = seasonCounts.get("I Love Lucy")!;

  console.log(knownValue.toUpperCase()); // 이것도 다시 확인!!
}

{
  interface Entertainer {
    acts: string[];
    name: string;
  }

  const declared: Entertainer = {
    // Error:  Type '{}' is missing the following properties from type 'Entertainer': acts, name
    // 'declared'이(가) 선언은 되었지만 해당 값이 읽히지는 않았습니다.ts(6133)
    //  '{}' 형식에 'Entertainer' 형식의 acts, name 속성이 없습니다.ts(2739)
    name: "Moms Mabley"
  };

  const asserted = {
    name: "Moms Rabley"
  } as Entertainer; // 허용되지만 런타임 시 오류 발생

  // 다음 구문은 런타임 시 다음 오류로 인해 정상적으로 작동되지 않음
  // Runtime TypeError: Cannot read properties of undefined (reading 'toPrecision)
  console.log(declared.acts.join(", "));
  console.log(asserted.acts.join(", "));
}

{
  let myValue = "Stella!" as number;
  // Error: Conversion of type 'string' to type 'number' may be a mistake because neither
  // type sufficiently overlaps with the other.If this was intentional,
  // convert the expression to 'unknown' first.
}

{
  let myValueDouble = "1337" as unknown as number; // 허용되지만 이렇게 사용하면 안 됨
}

{
  // 타입: (number | string)[]
  [0, ""];

  // 타입: readonly [0, '']
  [0, ""] as const;
}

{
  // 타입: () => string
  const getName = () => "Maria Bamford";

  // 타입: () => "Maria Bamford"
  const getNameConst = () => "Maria Bamford" as const;
}

{
  interface Joke {
    quote: string;
    style: "story" | "one-liner";
  }

  function tellJoke(joke: Joke) {
    if (joke.style === "one-liner") {
      console.log(joke.quote);
    } else {
      console.log(joke.quote.split("\n"));
    }
  }

  // 타입: {quote: string; style: "one-liner"}
  const narrowJoke = {
    quote: "If you stay alive for no other reason do it for spite.",
    style: "one-liner" as const
  };

  tellJoke(narrowJoke); // OK

  // 타입: {quote: string; style: string}
  const wideObject = {
    quote: "Time flies when you are anxious!",
    style: "one-liner"
  };

  tellJoke(wideObject);
  // Error: Argument of type '{ quote: string; style: string; }' is not assignable to parameter of type 'Joke'.
  //  Types of property 'style' are incompatible.
  //    Type 'string' is not assignable to type '"story" | "one-liner"'.
}

{
  function describePreference(preference: "maybe" | "no" | "yse") {
    switch (preference) {
      case "maybe":
        return "I suppose...";
      case "no":
        return "No thanks.";
      case "yes":
        return "Yes please!";
    }
  }

  // 타입: { movie: string, standup: string}
  const preferencesMutable = {
    movie: "maybe",
    standup: "yes"
  };

  describePreference(preferencesMutable.movie);
  // Error: Argument of type 'string' is not assignable to parameter of type '"maybe" | "no" | "yse"'.
  // 'string' 형식의 인수는 '"maybe" | "no" | "yse"' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

  preferencesMutable.movie = "no"; // OK

  // 타입: {  readonly movie: "maybe", readonly standup: "yes"}
  const preferencesReadonly = {
    movie: "maybe",
    standup: "yes"
  } as const;

  describePreference(preferencesReadonly.movie); // OK

  preferencesReadonly.movie = "no";
  // Error: Cannot assign to 'movie' because it is a read-only property.
  // 읽기 전용 속성이므로 'movie'에 할당할 수 없습니다.ts(2540)
}
