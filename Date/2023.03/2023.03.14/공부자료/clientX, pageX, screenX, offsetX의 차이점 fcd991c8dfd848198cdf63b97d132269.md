# clientX, pageX, screenX, offsetX의 차이점

- [1. 이벤트가 발생한 위치값](#1-이벤트가-발생한-위치값)
- [2. clientX, pageX, screenX, offsetX](#2-clientx-pagex-screenx-offsetx)

# 1. 이벤트가 발생한 위치값

예전에 드림코딩에서 clientX, pageX, screenX, offsetX와 관련된 강의를 듣고나서 제대로 이해하지 않고 넘어갔었다. 오늘 칸반보드 프로젝트를 진행하기 전에 이 부분에 대해서 확실하게 정리를 하고 넘어가려고 예전에 봤던 강의를 토대로 스스로 다시 만들어봤다.

처음에 아무런 생각없이 요소의 위치값을 받아올 수 있는 브라우저API라고 생각하고 querySelctor로 받아온 DOM요소에 무작정 해당 프로퍼티들은 사용해보기 시작했다. (간단한 구글링 조차 하지 않고;;)

```jsx
const target = document.querySelector(".target");
const client = document.querySelector(".client");

console.log(target.clientX);
```

가령 이런식이었다. 그런데 제대로 동작할리가..

![](https://velog.velcdn.com/images/dataliteracy/post/dd6ddc3e-cb38-48fa-ba16-4911856e6244/image.png)

그냥 단순하게 요소의 x,y 값만 바로 받아올 수 있다고 생각한 것이다.

![](https://velog.velcdn.com/images/dataliteracy/post/378f7028-f3fe-4686-880e-1e5e6108da5c/image.png)

하지만 pageX와 screenX에 대해서 제대로 이해하고 있기만 했었어도 요소에서 바로 값을 받아올 수 있을 거란
멍청한 생각은 하지 않았을 것 같다;;

위의 그림처럼 세로로 스크롤이 일어나는 페이지의 경우 화면에 있는 어느 특정한 부분의 위치값은 clientY 와 pageY가 다르다. (스크롤이 일어나지 않는 페이지의 경우 client와 page의 값이 동일하다.)

![](https://velog.velcdn.com/images/dataliteracy/post/971bf944-dfbd-40f5-a7a8-f66264867c68/image.png)

오늘 개인적으로 강의 참고해서 만들어봤었다.

브라우저 창은 항상 전체창으로 존재하지 않는다. 이 경우 브라우처창이 아닌 모니터 화면 전체의 좌표값을 받아오는 screenX, screenY의 값이 다른 값들과 확연하게 차이가 난다.

이렇듯 요소의 위치값들은 동적으로 변한다. 브라우저 창이 어디있는지도 중요하고 동일한 요소일지라도 position을 fixed로 주게되면 page의 위치에 따라서도 요소의 위치값은 달라지게 된다. 그리고 이런 위치값을 받아오려면 mouse나 scroll 이벤트를 사용해야 받아올 수 있다.

이렇게 조금만 생각해보면 "clientX", "pageX", "screenX", "offsetX"와 같은 값들은 이벤트리스너를 통해서 받아올 수 있다고 이해할 수 있을텐데, 그냥 강의 진도만 나간다고 대충 이해하고 넘어가니까 나중가서 이렇게 까먹는 것이다.

> 정리하자면
> "clientX", "pageX", "screenX", "offsetX"와 같은 값들은 이벤트 처리 함수 내에서만 사용할 수 있으며, 이벤트가 발생한 시점에서만 유효합니다. 이러한 값들은 이벤트 핸들러 함수를 사용하여 요소의 상호 작용을 처리하는 데 매우 유용하게 사용됩니다.

# 2. clientX, pageX, screenX, offsetX

- "clientX": 브라우저 창을 기준으로 이벤트가 발생한 위치의 가로 좌표를 나타냅니다. 뷰포트(Viewport)에서의 위치를 나타내므로 스크롤바가 움직이면 값이 변경됩니다.
  - 페이지 전체에서 브라우저 창의 상대적인 위치 값이기 때문에 스크롤바가 움직이면 값이 변경됩니다.
- "pageX": 문서 문서 상단을 기준으로 이벤트가 발생한 위치의 가로 좌표를 나타냅니다. 페이지 전체에서의 위치를 나타내므로 스크롤바가 움직여도 값이 변경되지 않습니다.
  - 페이지 전체에서의 절대적인 위치 값이기 때문에 스크롤바가 움직여도 변경되지 않습니다.
- "screenX": 모니터 화면을 기준으로 이벤트가 발생한 위치의 가로 좌표를 나타냅니다. 모니터 전체에서의 위치를 나타내므로 여러 모니터를 사용할 때 값이 다르게 나타날 수 있습니다.
  - 실제 모니터를 3개 사용하고 있는데, 모니터를 가로로 배치하다보니까 기준모니터에서 상당히 오래 떨어져있는 모니터에 브라우저창을 가져다 놓고 screenX값을 측정하면 -3000까지도 나오는 경우가 있습니다.
- "offsetX": 이벤트가 발생한 요소의 가로 축 기준으로 상위 요소의 좌측 끝에서부터의 거리를 나타냅니다. 이벤트가 발생한 요소 내부에서의 위치를 나타내며, 상위 요소의 위치에 따라 값이 달라질 수 있습니다.
  - 상위 요소의 위치 (position 속성값) 뿐만 아니라, 하위 요소의 "margin", "border", "padding” 같은 속성들도 요소의 offset 값에 영향을 미칩니다.

따라서, "clientX", "pageX", "screenX", "offsetX"는 모두 위치 값을 의미하는데, 그 위치 값의 기준이 각각 다르다는 것이 중요한 차이점입니다.
