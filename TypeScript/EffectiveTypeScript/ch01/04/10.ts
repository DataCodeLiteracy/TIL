class C {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}

const c = new C("instance of C");
const d: C = { foo: "object literal" }; // OK!

export default {};

/**
 * 요약
 *
 * 타입스크립트에서는 C클래스를 타입으로도 체크할 수 있기 때문에 위의 경우에 오류를 잡아낼 수 없다.
 * 사실 console.log(d instanceof C) // false가 맞는 것이다.
 */
