# font vs image

강의를 보다가 알게된 내용이다. 나름 신박하다고 해야 하나? 여기서 한 번 정리해보자.

우리가 그냥 단순하게 font를 가지고 와서 사용할 때가 있는데, 폰트를 불러오는 데이터 용량이 너무 커서 웹 페이지 성능에 영향을 줄 수 있는 상황이라고 가정해보자. 그런데 그 폰트를 사용하는 곳이 웹 페이지에서 한 두 군데 밖에 안된다면 폰트를 불러와서 사용하는 것 보다 폰트를 렌더링 시키고 난 후에 그 폰트 부분을 img로 변환한 다음에 img로 불러오는 방법을 사용한다면 좀 더 데이터 용량을 줄일 수 있다는 것이다.

그런데 과연 웹 페이지 성능에 폰트가 영향을 많이 줄 수 있을 만큼의 데이터 용량을 가지고 있을까? 

개발자 도구를 열어서 폰트가 응답하는 용량을 네트워크 탭에서 확인해보면 header에 Content-Length 값으로 들어오게 되는데, 

```jsx
Accept-Ranges:
bytes
Access-Control-Allow-Origin:
*
Access-Control-Expose-Headers:
*
Age:
10796571
Alt-Svc:
h3=":443"; ma=86400
Cache-Control:
public, max-age=31536000, s-maxage=31536000, immutable
Cf-Cache-Status:
HIT
Cf-Ray:
7ddc04fe9e04ee0d-ICN
Content-Length:
610480
Content-Type:
font/woff
Cross-Origin-Resource-Policy:
cross-origin
Date:
Tue, 27 Jun 2023 07:36:31 GMT
Etag:
W/"950b0-lZxjrSk7X3rBZyjq4AMXERjnOE8"
...
```

Content-Length의 값은 610480바이트 그러니까 kb로 환산하면 596.09 킬로바이트(KB)이다. 하지만 보통 타이틀 이미지를 불러온다고 한다면 10kb 정도 밖에 되질 않는다. 

그러니까 한 마디로 폰트를 불러오는 곳이 별로 없다면 조금이라도 성능 개선을 하고자 한다면 폰트를 그냥 불러오는 것보다는 이미지 자체로 불러오는 것이 더 효율적이라는 건데..

현대 웹 브라우저에서 폰트 하나 불러오는데 600kb인데 이게 웹 사이트 성능에 얼마나 영향을 줄까? 이 부분이 전체적인 성능에 무리가 가능 상황이란 언제일까? 이 질문에 대해서는 앞으로 공부하면서 답해보도록 하자.