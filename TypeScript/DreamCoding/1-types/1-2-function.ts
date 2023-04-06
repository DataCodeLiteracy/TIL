{
  // JS
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TS
  function add(num1: number, num2:number): number {
    return num1 + num2;
  }

  // JS
  function fetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    })
  }

  // TS
  function fetchNumber(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
}