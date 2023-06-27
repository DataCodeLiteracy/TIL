# click 이벤트

### click 이벤트를 처리하는 두 가지 방법

```jsx
window.onclick = (e) => {
  if (e.target === modal) {
    closeModal()
  }
}
```

```jsx
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal()
  }
})
```

onclick으로 처리할 시 window.onclick에 함수를 할당해준다는 점에 주의해야 한다. 

즉, onclick은 함수가 아니고 addEventListner는 함수다.