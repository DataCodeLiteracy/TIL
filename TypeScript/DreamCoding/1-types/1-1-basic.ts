{
  // number
  const num: number = -5;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined
  let name: undefined; // X
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // X
  let person2: string | null;
  person2 = null;
  person2 = 'hello';

  // unknown 
  let notSure: unknown
  notSure = 'he';
  notSure = 1;
  notSure = null;
  notSure = undefined;

  // any
  let anything: any = 0;
  anything = 'hello';
  anything = 1;

  // void
  function print(): void {
    console.log('hello');
    // return;
  }

  let unusable: void = undefined; // X

  // never
  function throwError(message: string): never {
    // message -> server (log)
    // throw new Error(message);
    while (true) {
      
    }
  }

  // object
  // object 타입도 신중히 사용해야 함..
  let obj: object = [1, 4];   // X
  function acceptSomeObject(obj: object) {
    
  }

  acceptSomeObject({ name: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}