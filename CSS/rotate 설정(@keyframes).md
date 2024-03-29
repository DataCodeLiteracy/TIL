# rotate 설정(@keyframes)

```css
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

```css
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
```

위 아래 코드는 똑같이 동작한다. 왜 일까?

두 개의 **`@keyframes`** 규칙은 모두 **`rotate`** 라는 이름의 애니메이션을 정의합니다.

첫 번째 규칙은 100%에서 **`transform`** 속성에 **`rotate(360deg)`** 를 설정하여 요소를 360도 회전시키는 애니메이션을 정의합니다.

두 번째 규칙은 0%와 100%에서 **`transform`** 속성에 각각 **`rotate(0deg)`** 와 **`rotate(360deg)`** 를 설정하여 요소를 0도에서 360도까지 회전시키는 애니메이션을 정의합니다.

결과적으로, 두 개의 규칙은 회전 애니메이션을 동일하게 정의하고 있습니다. 애니메이션의 시작점이 0%일 때와 100%일 때의 회전 각도가 동일하기 때문에 두 규칙은 차이가 없습니다.

애니메이션의 정의에서는 시작점( **`0%`** )과 끝점( **`100%`** ) 사이에 원하는 시간대의 키프레임을 추가할 수 있습니다. 이 경우에는 시작과 끝에서만 회전 각도를 정의하고 있으므로, 두 규칙은 결과적으로 같은 애니메이션을 생성합니다.