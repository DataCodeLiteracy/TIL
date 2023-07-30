# Redux

# 1. 리덕스를 왜 사용해야 하는가?

- 기존에 주류였던 MVC패턴, MVC 패턴은 뷰가 변경될 때 데이터를 컨트롤러를 통해 모델에 전달하고 모델은 뷰를 업데이트한다. 이걸로 자칫 MVC패턴도 단방향으로 데이터와 UI를 변경한다고 생각할 수 있지만 컨트롤러가 모델은 거치지 않고 직접 뷰를 변경할 수 있기 때문에 단방향성만 있는 것이 아니라 양방향성도 존재한다.
- 페이스북에서는 이런 MVC패턴의 양방향성으로 인한 문제로 인해 애플리케이션의 동작을 예측하기 힘들어졌기 때문에 Flux 패턴을 개발했다.
- Flux 패턴의 핵심은 단방향성이다. 그리고 Flux를 참고해서 만든 것이 Redux다.

# 2. 리덕스의 핵심은?

- 리덕스의 핵심 가치는 **JavaScript 앱을 위한 예측 가능한 상태 컨테이너**
    - 개발자 도구에서 리덕스 개발도구를 설치하면 실제로 UI가 변경될 때마다 변경사항을 순서대로 모두 타임트래블 해서 볼 수 있다.
    
- 그럼 어떻게 예측 가능한 상태를 유지하게 할 수 있을까?
    - 리덕스의 3가지 원칙
        - single source of truth
            - 하나의 store로 관리되는 state
            - 모든 state는 store에 객체 트리구조로 저장된다.
        - state is read-only
            - 상태를 변화시키는 유일한 방법은 action 객체를 전달하는 방법뿐이다.
        - changes are made with pure function
            - 리덕스에서 reducer는 이전 state와 action을 받아 다음 state를 반환하는 순수함수다.
            - 여기서 핵심은 이전 state를 변경하는 대신 새로운 state 객체를 반환한다는 사실이다.
    - 3가지 원칙으로 생각해 본 결론
        - state를 변경할 수 있는 건 reducer로 가능하다. 그리고 reducer는 순수함수이기 때문에 예측이 가능하다.
        - state 자체를 변경하는 것이 아니라 계속 새로운 state 객체를 생성해서 트리 구조로 저장되기 때문에 히스토리 관리가 가능하다. 그렇기 때문에 오류에 대한 예측과 디버깅이 수월하다.

# 3. 리덕스의 용어들

## State

```jsx
type State = any
```

- 상태는 상태트리라고도 부른다.
- Redux API에서는 store에 의해 관리되고 getState()에 의해 반환되는 하나의 상태값을 의미한다.

## Action

```jsx
type Action = Object
```

- 어떤 action이 행해질지 표시하는 type 필드를 가져야 한다.

## Reducer

```jsx
type Reducer<S, A> = (state: S, action: A) => S
```

- 이전 state와 action을 이용해서 새로운 state 객체를 반환한다.
- reducer는 같은 입력이 있으면 같은 출력을 반환하는 순수 함수다.
- 이를 통해 핫 리로딩과 시간여행과 같은 기능들이 가능해진다.

## Dispatch

```jsx
type BaseDispatch = (a: Action) => Action
type Dispatch = (a: Action | AsyncAction) => any
```

- 디스패치 함수는 action이나 asyncAction을 받는 함수다.
- 기본 dispatch 함수는 반드시 동기적으로 reducer에 action을 보내야 한다.
- asyncAction을 받으려면 미들웨어로 기본 dispatch 함수를 감싸야 한다.

## ActionCreator

```jsx
type ActionCreator<A, P extends any[] = any[]> = (...args: P) => Action | AsyncAction
```

- actionCreator는 단지 액션을 만드는 함수다.
- actionCreator는 action을 호출만 할 뿐 dispatch하지 않는다.

## AsyncAction

```jsx
type AsyncAction = any
```

- 기본적으로 리덕스는 순수 함수인 reducer를 활용하기 때문에 동기적인 처리만 가능하다.
- asyncAction은 기본 dispatch 함수로 전달되기 전에 미들웨어를 통해 action으로 바뀌어야 한다.

## Middleware

```jsx
type MiddlewareAPI = { dispatch: Dispatch, getState: () => State }
type Middleware = (api: MiddlewareAPI) => (next: Dispatch) => Dispatch
```

- middleware는 dispatch 함수를 결합해서 새 dispatch 함수를 반환하는 고차함수입니다.
- asyncAction을 action으로 전환한다.

## Store

```jsx
type Store = {
  dispatch: Dispatch,
  getState: () => State,
  subscribe: (listener: () => void) => () => void,
  replaceReducer: (reducer: Reducer) => void
}
```

Redux 앱에는 단 하나의 저장소만 있어야 한다.

- dispatch(action) : 기본 Dispatch 함수
- getState() :  store의 현재 상태 반환
- subscribe(listener) : 상태가 바뀔 때 호출될 함수를 등록
- replaceReducer(nextReducer) : 핫 리로딩과 코드 분할을 구현할 때 사용

## StoreCreator

```jsx
type StoreCreator = (reducer: Reducer, preloadedState: ?State) => Store
```

- storeCreator는 store를 만드는 함수다.

## StoreEnhancer

```jsx
type StoreEnhancer = (next: StoreCreator) => StoreCreator
```

- storeEnhancer는 storeCreator를 결합하여 강화된 새 storeCreator를 반환하는 고차함수다.