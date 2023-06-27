# url 복사하기

### 현재 URL 복사하는 코드

```jsx
const copyUrl = () => {
  const url = window.location.href

  navigator.clipboard.writeText(url).then(() => {
    alert('URL이 복사되었습니다')
  })
}
```