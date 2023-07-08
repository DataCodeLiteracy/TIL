# useEffect & Context API

---

해당 글은 원티드 인턴쉽 강의 내용을 복습하면서 정리한 글 입니다.

---

### 의존성 배열이란?

의존성 배열이란 무엇일까요? 얕게 이해하자면 아래와 같다.

- useEffect에 두 번째 인자로 넘기는 배열이다.
- 두 번째 인자를 넘기지 않으면 Effect는 매번 실행되고, 빈 배열을 넘긴다면 컴포넌트의 첫번째 렌더링 이후에만 실행된다.

위 정도의 수준까지 이해하고 그동안 useEffect를 사용하고 있었다면 애플리케이션에서 버그가 발생할 확률이 굉장히 높다.

useEffect의 시그니쳐는 아래와 같다.

```jsx
useEffect(effect, 의존성)
```

여기서 effect는 함수의 형태로 표현되고, 의존성은 여러 의존성들을 한번에 전달하기 위해서 배열의 형태로 표현된다.

의존성이란 말을 해석해보면 

- A라는 요소가 온전히 동작하기 위해서 B, C, D 등 다른 요소들을 필요로 할 때 A는 B,C,D에 의존하고 있다고 표현한다.
- 그리고 “B, C, D는 A의 의존성이다” 라고도 표현할 수 있다.

그렇다면 useEffect에서 의존성 배열이란 “무언가가 의존하고 있는 요소들의 모음” 이라고 할 수 있다. 그리고 여기서 말하는 무언가는 바로 effect 함수다. 즉, useEffect의 의존성 배열은 **“effect 함수가 의존하고 있는 요소들의 모음”** 이라고 할 수 있다.

**“의존하고 있다”** 라는 말이 어색하고 잘 이해가 안될 수도 있다. 이를 쉽게 풀어서 설명하자면 단순히 그냥 effect 함수가 사용하고 있는 외부의 값들이 의존성이다.

```jsx
function Component(){
	const [count, setCount] = useState(0);
	
	const effect = () => {
		document.title = `you clikced ${count} times`
	};

	useEffect(effect, [count]];
}
```

위의 예시에서 effect 함수는 `count` 라는 외부의 값을 내부에서 사용하고 있다. 따라서 effect 함수의 의존성은 `count` 이며 count를 의존성 배열에 넣어줘야하는 것이다.

이렇게 되면 useEffect는 리렌더링이 된 후 의존성 배열을 검사해서 의존성 배열에 있는 값들이 변경되었을 경우에 다시 새로운 의존성을 가지고 effect를 실행시켜 준다.

### useEffect 의존성 배열의 잘못된 활용

이처럼 useEffect에서 의존성 배열은 핵심이 되는 부분이다. 그런데 이런 의존성 배열을 잘 못 설정하고 활용하는 경우가 있다.

대부분 필요 없는 요소들을 굳이 의존성 배열에 넣는 실수는 잘 하지 않는다.

하지만, 필요한 의존성을 제대로 의존성 배열에 넣어주지 않는 실수를 많이 한다.

### useEffect 의존성 배열을 잘 설정하는 법

useEffect에서 버그가 발생하지 않게 의존성 배열을 잘 설정하는 방법은 아래의 원칙만 지켜주면 된다.

- **“모든 의존성을 빼먹지 말고 의존성 배열에 명시해라”**

여기에 덧붙여서 아래의 원칙을 추가해주면 좋다.

- **“가능하다면 의존성을 적게 만들어라”**

---

```jsx
// bad
function Component(){
	const [count, setCount] = useState(0);

	useEffect(()=>{
		document.title = `you clikced ${count} times`
	}, []];
}

// good
function Component(){
	const [count, setCount] = useState(0);

	useEffect(()=>{
		document.title = `you clikced ${count} times`
	}, [count]];
}
```

그런데 간단한 일반 변수, state, props의 경우에는 의존성을 빼먹지 않고 의존성 배열에 명시하기가 쉽습니다.

하지만, 함수 컴포넌트의 내부에서 선언한 Object, Function의 경우에는 함수 컴포넌트의 매 호출마다 새로운 객체, 함수가 선언되고 참조형 데이터 타입의 특징으로 인해 객체 내부의 요소들이 동일하더라도 새롭게 생성된 객체와 이전 객체를 비교하면 서로 다른 객체라고 판단되게 된다.

그래서 아래의 코드는 무한 루프를 반복하게 된다.

```tsx
function Component(){
	const [count, setCount] = useState(0);

	const increaseCount = () => {
		setCount(prev => prev + 1);
	}

	useEffect(increaseCount, [increaseCount]];
}
```

위의 문제를 해결하기 위해서 여러가지 방안을 시도해볼 수 있다.

1. 의존성을 제거하기 ⇒ 함수를 effect 안에 선언하기

```jsx
function Component(){
	const [count, setCount] = useState(0);

	useEffect(() => {
		const increaseCount = () => {
			setCount(prev => prev + 1);
		};

		increaseCount();
	}, []];
}
```

1. 함수를 컴포넌트 바깥으로 이동시키기

```tsx
// bad
function Component() {
	const getUserAuth = () => {
		localStorage.getItem("ACCESS_TOKEN");
	};

	useEffect(() => {
		const token = getUserAuth();
		// login....
	}, []];
};
```

```tsx
// good
function Component() {

	useEffect(() => {
		const token = getUserAuth();
		// login....
	}, [getUserAuth]];

};

const getUserAuth = () => {
	localStorage.getItem("ACCESS_TOKEN");
};
```

1. 메모이제이션

```jsx
function Component(){
	const [count, setCount] = useState(0);

	const increaseCount = () => {
		setCount(prev => prev + 1);
	}

	useEffect(() => {
		// do something 1
		increaseCount();
	}, []];

	useEffect(() => {
		// do something 2
		increaseCount();
	}, []];
}
```

```tsx
function Component(){
	const [count, setCount] = useState(0);

	const increaseCount = useCallback(() => {
		setCount(prev => prev + 1);
	}, []);

	useEffect(() => {
		// do something 1
		increaseCount();
	}, [increaseCount]];

	useEffect(() => {
		// do something 2
		increaseCount();
	}, [increaseCount]];
}
```

## Context API

Context API란 React에서 제공하는 내장 API로서 컴포넌트들에게 동일한 Context(맥락)을 전달하는데 사용할 수 있다.

일반적으로 리액트에서 데이터를 전달하는 기본 원칙은 단방향성이다. 그 말은 부모 컴포넌트에서 자식 컴포넌트 방향으로만 데이터를 전달할 수 있다는 의미다.

단방향성은 애플리케이션의 안전성을 높이고 흐름을 단순화하는데 유용하지만 떄때로 너무 많은 단계를 거쳐서 자식 컴포넌트에 데이터를 전달해야 한다는 문제점을 야기하기도 한다.

예를 들어 5단계 아래에 위치한 자식 컴포넌트에게 데이터를 넘겨야 한다면, 중간에 4개의 컴포넌트는 해당 데이터를 사용하지 않을지라도 props를 계속해서 넘겨줘야하는 문제가 발생하는 것이다. 또한, 형제 관계나 특정 범위 안에 있는 컴포넌트들에게 데이터를 넘기기 위해서는 더 복잡한 상황이 발생하기도 한다.

컴포넌트의 구조를 잘 설계하고 합성을 적극적으로 활용해 데이터를 계속해서 넘겨줘야 하는 상황을 안만드는 것이 1옵션이지만, 해당 방법으로 해결이 안될 때는 Context API를 사용할 수 있다.