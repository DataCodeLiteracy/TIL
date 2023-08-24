# This의 비밀

## This 바인딩이란?

"This 바인딩"은 자바스크립트에서 함수의 실행 컨텍스트 내에서 사용되는 특별한 값입니다. 함수가 실행될 때마다 자동으로 생성되며, 주로 함수 내에서 사용되는 키워드인 "this"가 가리키는 값입니다.

"This 바인딩"은 함수가 어떻게 호출되었느냐에 따라 다르게 결정됩니다. 주로 다음과 같은 경우에 "this 바인딩"이 발생합니다:

1. **전역 컨텍스트**: 함수가 전역 범위에서 호출되었을 때, "this"는 전역 객체를 가리킵니다. 브라우저 환경에서는 "window" 객체가 전역 객체입니다.
2. **메서드 호출**: 객체의 메서드로서 함수가 호출되었을 때, "this"는 해당 객체를 가리킵니다.
3. **함수 호출**: 일반 함수로서 호출되었을 때, "this"는 비 엄격 모드에서는 전역 객체를, 엄격 모드에서는 "undefined"를 가리킵니다.
4. **생성자 함수 호출**: 생성자 함수로서 사용될 때, "this"는 새로 생성되는 객체를 가리킵니다.
5. **화살표 함수**: 화살표 함수 내에서 "this"는 함수가 생성될 때의 "this"를 유지하며, 함수가 호출될 때마다 변경되지 않습니다.

이러한 "this 바인딩"의 동작은 함수의 실행 컨텍스트와 호출 방식에 따라 결정되며, 개발자가 "this"가 가리키는 값을 예측하고 이해하는 데 중요한 역할을 합니다.

## 문맥에서의 this

```jsx
'use strict';
/**
 * 전역 컨텍스트의 this
 *  - 브라우저: window
 *  - 노드: 모듈
 */
const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
// globalThis.setTimeout()
// setTimeout()
console.clear();

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined
 * 느슨한 모드에서는 globalThis
 */
function fun() {
  console.log(this);
}
fun();

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('냐옹');
const cat2 = new Cat('미야옹');
cat1.printName();
cat2.printName();
```

## 동적 바인딩

```jsx
// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨!
// 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐!
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨!
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
cat.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  printName();
}

printOnMonitor(cat.printName);
```

## 정적 바인딩

```jsx
function Cat(name) {
  this.name = name;
  // 2. arrow 함수를 사용: arrow 함수는 렉시컬 환경에서의 this를 기억해요!
  // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  this.printName = () => {
    console.log(`고양이의 이름을 출력한다옹: ${this.name}`);
  };
  // 1. bind 함수를 이용해서 수동적으로 바인딩 해주기
  //   this.printName = this.printName.bind(this);
}

function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`강아지의 이름을 출력한다옹: ${this.name}`);
  };
}

const cat = new Cat('냐옹');
const dog = new Dog('멍멍');
cat.printName();
dog.printName();

dog.printName = cat.printName;
dog.printName();
cat.printName();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고!, 전달된 콜백을 실행!');
  printName();
}

printOnMonitor(cat.printName);
```

## 화살표 함수 정리

```jsx
// 자바스크립트의 함수는 만능 슈퍼맨!
// 함수처럼 사용, 생성자 함수로 사용 (클래스)
// 하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체) 생성됨
const dog = {
  name: 'Dog',
  play: function () {
    // 💩
    console.log('논다멍');
  },
};
dog.play();
const obj = new dog.play(); // 💩
console.log(obj);

// ES6
const cat = {
  name: 'cat',
  play() {
    // 객체의 메서드 (오브젝트에 속한 함수)
    console.log('냐옹');
  },
};
cat.play();
// const obj1 = new cat.play(); // 생성자 함수로 사용 ❌

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 ❌)
 * 3. 함수 자체 arguments
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *    - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */

function sum(a, b) {
  console.log(arguments);
}
sum(1, 2);

const add = (a, b) => {
  console.log(arguments); // arrow 함수 외부의 arguments를 참조만 함
};
add(1, 2);

const printArrow = () => {
  console.log(this);
};
printArrow();
cat.printArrow = printArrow;
cat.printArrow();
```

### 화살표 함수의 특징

1. 문법이 깔끔함
2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 ❌)
3. 함수 자체 arguments
4. this에 대한 바인딩이 정적으로 결정됨
5. 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
6. return 생략 가능
7. 클로저를 간소화