# Map과 Set

## Map과 함수들

**`Map`**은 키-값 쌍으로 데이터를 저장하는 자료구조입니다. 주로 객체(Object)를 사용해야 하는 경우, 키가 문자열인 제약을 피하고 싶을 때 사용됩니다.

```jsx
const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인(키로 확인해야 함)
console.log(map.has('key1'));
console.log(map.has('key6'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점??
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유' };
const obj = {
  [key]: milk,
};
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]);
console.log(map2.get(key));
```

- 객체와 구조가 정말 비슷하지만, Map에서 사용하는 함수(메서드)를 사용할 수 없다.
- obj[key] vs map.get(key)

## Set과 함수들

**`Set`**은 중복되지 않는 값들의 집합을 저장하는 자료구조입니다. 주로 고유한 값들만 저장하고 싶을 때 사용됩니다.

```jsx
// Set
const set = new Set([1, 2, 3]);
console.log(set);

// 사이즈 확인
console.log(set.size);

// 존재하는지 확인
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// 퀴즈
const obj3 = { name: '🍌', price: 5 };
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);
```

```jsx
// 주어진 배열에서 중복을 제거 하라
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
//  ['🍌', '🍎', '🍇', '🍑']
function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits));

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

function findIntersection(set1, set2) {
  return new Set([...set1].filter((item) => set2.has(item)));
}
console.log(findIntersection(set1, set2));
```

## 심볼, 데이터 타입 마지막

심볼(Symbol)은 자바스크립트에서 유일한(unique)하고 변경 불가능한 데이터 타입입니다. 심볼은 주로 객체 프로퍼티의 키로 사용되어 이름 충돌을 방지하거나 내부적으로 사용되는 경우에 활용됩니다.

심볼은 다음과 같은 특징을 가지고 있습니다:

1. **유일성**: 각각의 심볼은 유일하며, 동일한 내용의 심볼을 생성하더라도 엄연히 다른 값으로 취급됩니다.
2. **변경 불가능성**: 생성된 후에는 값이 변경되지 않습니다.

```jsx
// Symbol 심벌
// 유일한 키를 생성할 수 있음 🔑
const map = new Map();

const key1 = 'key';
const key2 = 'key';

map.set(key1, 'Hello')
console.log(map.get(key2)) // Hello

const key3 = Symbol('key');
const key4 = Symbol('key');
map.set(key3, 'Hello');
console.log(map.get(key4)); // undefined
console.log(key3 === key4); // false

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

console.log(Symbol.keyFor(k1)); // key
// console.log(Symbol.keyFor(key1)); // key is not a symbol

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj); // { [Symbol(key)]: 'Hello', [Symbol(key)]: 1 }
console.log(obj[k1]); // Hello
console.log(obj[Symbol('key')]); // undefined
```

- **`Symbol.keyFor`** 메서드를 사용하여 전역 심볼 레지스트리에 저장된 심볼의 이름을 가져올 수 있다. 전역 심볼 레지스트리에 저장된 심볼의 경우에만 해당되며, 일반적인 심볼은 **`Symbol.keyFor`** 메서드를 사용하여 이름을 가져올 수 없다.

---

- Symbol은 언제 사용하는 것이 적합할까?

Symbol은 주로 객체의 프로퍼티 이름 충돌을 방지하거나, 내부적인 용도로 사용되는 식별자를 생성할 때 유용합니다.

1. **프로퍼티 이름 충돌 방지**: 객체 내에서 고유한 식별자를 만들어야 할 때 심볼을 사용할 수 있습니다. 이는 다른 프로퍼티 이름과 충돌하지 않도록 보장하며, 내부적인 상태를 관리하거나 확장성 있는 코드를 작성하는 데 도움이 됩니다.
2. **메타데이터 추가**: 객체의 메타데이터를 관리하기 위해 심볼을 사용할 수 있습니다. 예를 들어, 객체의 특정 프로퍼티를 숨기거나 숨겨진 정보를 저장하는 데 활용할 수 있습니다.
3. **Well-Known Symbol 사용**: JavaScript에는 내장된 Well-Known Symbol이라는 심볼도 있습니다. 이는 특정 동작을 커스터마이징하거나 객체의 행동을 오버라이드하기 위해 사용됩니다. 예를 들어 **`Symbol.iterator`**, **`Symbol.toStringTag`** 등이 있습니다.
4. **Private Symbol 사용**: 클래스나 모듈 내에서 사용하는 심볼을 이용하여, 외부에서는 접근할 수 없는 비공개 데이터나 메서드를 만들 수 있습니다.