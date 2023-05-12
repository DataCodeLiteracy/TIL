const s: String = "primitive";
const n: Number = 12;
const b: Boolean = true;

export default {};

/**
 * 요약
 *
 * Bard 대답
 *  래퍼 객체를 사용하는 몇 가지 예는 다음과 같습니다.
 *
 * 래퍼 객체는 메서드가 필요한 경우 유용합니다.
 * 예를 들어, String 객체에는 문자열의 길이를 얻는 데 사용할 수 있는 length 메서드가 있습니다.
 * 래퍼 객체는 특수 값을 나타내는 경우에도 유용합니다.
 * 예를 들어, null과 undefined 값은 둘 다 Number 래퍼 객체로 나타낼 수 있습니다.
 * 래퍼 객체는 유니온 타입을 생성하는 경우에도 유용합니다.
 * 예를 들어, 문자열 또는 숫자를 나타내는 타입이 필요한 경우 String | Number 유니온 타입을 사용할 수 있습니다.
 *
 * 그래서 래퍼 객체를 사용해서 타입을 지정할 이유가 없음?
 *
 * GPT 대답
 * 1. 객체 프로퍼티로 사용할 때: 객체의 프로퍼티는 기본형 값이 아닌 객체여야 할 때가 있습니다. 예를 들어, Date 객체를 사용해 날짜와 시간을 저장하는 경우가 있습니다.
 */
type User = {
  name: string;
  birthDate: Date;
};
const user: User = {
  name: "Alice",
  birthDate: new Date("2000-01-01")
};

/*
 * 2. 런타임에 동적으로 타입을 변경해야 할 때: 기본형은 불변(immutable)한 값이기 때문에, 런타임에 타입을 동적으로 변경할 수 없습니다. 하지만 래퍼 객체는 객체이므로 런타임에 동적으로 타입을 변경할 수 있습니다.
 */
let value: any = "123";
console.log(typeof value); // "string"

// value에 새로운 값을 할당하면서 타입도 함께 변경됩니다.
value = 456;
console.log(typeof value); // "number"

// 래퍼 객체를 사용하면 런타임에 동적으로 타입을 변경할 수 있습니다.
let wrapper: Number = new Number("123");
console.log(typeof wrapper); // "object"

// wrapper에 새로운 값을 할당하면서 타입도 함께 변경됩니다.
wrapper = new Number(456);
console.log(typeof wrapper); // "object"

/*
 * 3. 클래스에서 제네릭 타입 매개변수로 사용할 때: 제네릭 타입 매개변수로 기본형을 사용할 수 없기 때문에, 래퍼 객체를 사용해야 할 수 있습니다.
 */
class Container<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  set value(newValue: T) {
    this._value = newValue;
  }
}

// 기본형을 제네릭 타입 매개변수로 사용할 수 없습니다.
// 따라서 래퍼 객체를 사용해야 합니다.
const container = new Container(new Number(123));
console.log(container.value.toFixed()); // "123"
