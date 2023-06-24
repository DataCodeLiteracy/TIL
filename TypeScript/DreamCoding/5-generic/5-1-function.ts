{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result = checkNotNullBad(123);
  console.log(result);
  // checkNotNullBad(null);

  function checkNotNullAny(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const result2 = checkNotNull(123); // 안전하지 않음.. any라 해당 값이 읽히지 않는다..

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  const GenericResult = checkNotNull(123);
  console.log(GenericResult);
  const GenericResult2 = checkNotNull("string");
  console.log(GenericResult2);
  const GenericResult3: boolean = checkNotNull(true);
  console.log(GenericResult3);
}
