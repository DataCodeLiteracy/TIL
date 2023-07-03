# useNavigate

> 일반적으로 리다이렉션할 때 이 Hook을 사용하는 것이 좋다.
> 

# 타입 선언

```tsx
declare function useNavigate(): NavigateFunction;

interface NavigateFunction {
  (
    to: To,
    options?: {
      replace?: boolean;
      state?: any;
      relative?: RelativeRoutingType;
    }
  ): void;
  (delta: number): void;
}
```

---

지금은 기존에 있던 useHistory가 없어지고 useNavigate를 사용하는 것 같다. useHistory에는 push, goback, go, replace 등을 사용할 수 있었다. useNavigate도 물론 전부 같은 기능을 사용 가능하다. 오히려 훨씬 더 코드가 간략해졌다.

또한 useHistory의 history는 객체였지만 useNavigate의 navigate는 함수다.

그리고 useNavigate 에서는 두 번째 인자로 객체를 전달할 수 있다. 이 객체는 페이지 전환 시 추가적인 정보를 제공하기 위해 사용된다.

useNavigate의 navigate 함수의 동작은 다음과 같다:

1. navigate 함수의 첫 번째 인자로 이동할 경로를 전달한다. 예를 들어 navigate('/new-page')는 /new-page로 이동하는 동작을 수행한다.
2. navigate 함수의 두 번째 인자로 전달하는 객체는 추가적인 정보를 담고 있다. 
3. 대표적으로 { replace: true } 옵션을 사용할 수 있다.
    - { replace: true } 옵션을 설정하면, 이전 페이지를 대체(replace)하면서 새로운 페이지로 이동한다. 이전 페이지의 기록을 제거하고 바로 대상 페이지로 이동한다.
    - { replace: false } (또는 생략)인 경우, 이전 페이지 기록을 유지한 채로 새로운 페이지를 추가한다.
    - replace 옵션을 사용하지 않거나, replace: false 를 설정한 경우에는 이전 페이지로 돌아갈 수 있는 기능이 제공된다. 즉, 브라우저의 "뒤로" 버튼을 클릭하면 이전 페이지로 이동한다.

따라서, { replace: true } 옵션을 사용하면 이전 페이지를 대체하고 새로운 페이지로 이동하게 된다. replace: false (또는 생략)인 경우에는 이전 페이지로 돌아갈 수 있는 기능이 제공되며, 브라우저의 기록을 따라가면 이전 페이지로 이동한다.

정리하자면, 객체에 replace: true 를 설정하면 이전 페이지를 대체하고 새로운 페이지로 이동하며, replace: false (또는 생략)인 경우에는 이전 페이지로 돌아갈 수 있는 기능을 제공한다.

또한 두 번째 인자로 전달하는 객체 다른 상태를 전달하면 useLocation Hook으로 객체의 정보를 받아올 수 있다.