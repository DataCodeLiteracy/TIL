{
  // // JS
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TS
  // function add(num1: number, num2:number): number {
  //   return num1 + num2;
  // }

  // // JS
  // function fetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   })
  // }

  // // TS
  // function fetchNumber(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JS => TS
  // Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('JongHyun', 'Lee');
  printName('Kim');
  printName('Anna', undefined);

  // Default Parameter
  function printMessage(message: string = 'Hello! TypeScript!!') {
    console.log(message);
  }

  printMessage();

  // Rest Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 5, 78));
  console.log(addNumbers(1, 2, 6, 7, 8, 12));
}

