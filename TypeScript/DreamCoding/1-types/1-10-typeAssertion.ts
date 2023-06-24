{
  /*
    Type Assertions  권장하지 X
  */

  // 불가피한 경우가 있다.
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log(result.length); // 엘리 강의에서는 사용할 수 없다고 했는데, 지금(Version 5.0.3)은 왜 가능한거지?

  // 타입 어서션은 장담하는 것과 같다. 그래서 함수에서 만약 숫자를 리턴해도 에러를 발생시키지 않는다.
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  // const numbers = findNumbers!();
  // numbers.push(2);
  // 'numbers'은(는) 'undefined'일 수 있습니다.ts(18048)
  numbers!.push(2); // 확신할 때 !를 쓴다.
  numbers?.push(3);

  console.log(numbers);

  // const button = document.querySelector("class")!;
  // if (button) {
  //   button.nodeValue;
  // }
  // button.nodeValue;
}
