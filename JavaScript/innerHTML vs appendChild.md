# innerHTML vs append

예전에 공부하다가 innerHTML과 append의 성능상 차이점에 대한 글을 봤던 기억이 있어서 그냥 빠르게 GPT한테 한 번 물어봤다.

### innerHTML로 추가하는 것과 append로 노드로 추가하는 부분에서 성능상의 차이점은 없을까?

```jsx
innerHTML을 사용하여 HTML 문자열을 추가하는 방식과 append를 사용하여 요소를 노드로 추가하는 방식
사이에는 성능 차이가 있을 수 있습니다.

innerHTML은 HTML 문자열을 파싱하여 DOM을 수정하는 방식으로 동작합니다. 이는 대량의 HTML 요소를
추가할 때 성능상의 이슈가 발생할 수 있습니다. 각각의 HTML 요소를 파싱하고 DOM을 조작하는 작업은 비교
적 오버헤드가 큽니다.

appendChild는 DOM 요소를 직접 생성하고 추가하기 때문에 HTML 문자열을 파싱할 필요가 없습니다.
이는 대량의 요소를 추가할 때 innerHTML보다 더 효율적일 수 있습니다.

따라서 대량의 요소를 추가해야 할 경우에는 appendChild를 사용하는 것이 성능상 유리할 수 있습니다.
그러나 작은 규모의 작업이라면 두 가지 방식 간의 성능 차이는 미미할 수 있습니다.

그러나 최근의 브라우저는 내부적으로 innerHTML을 최적화하여 성능을 향상시키는 경우가 많으므로 실제로는
큰 차이가 나지 않을 수도 있습니다.

따라서 성능 차이를 고려할 때는 상황과 브라우저의 최적화 수준을 고려해야 합니다.
```

innerHTML은 DOM을 완전히 교체해서 수정해보리고 append는 추가하는 것이기 때문에 아무래도 DOM을 다시 전부 그리는 것과 아닌 것의 차이는 크다고 볼 수 있다. 여러 블로그를 보면 2배 정도 차이가 난다고 하는 사람들이 많다. (팩트 인지는 아직 확인을 못함..)

그리고 innerHTML은 대부분의 브라우저에서 지원하지만 표준은 아니다. 반면 appendChild는 표준이다.

사실 내가 진행하는 토이 프로젝트 수준에서는 innerHTML과 append의 유의미한 차이는 느끼지 못할 확률이 높다. 그리고 앞으로 자바스크립트로 프로젝트를 구현하는 건 아무래도 리액트로 구현하는 것보다 상대적으로 적을 것이다. 그렇기 때문에 그렇게 중요한 내용은 아니라고 생각하지만 한 번은 짚고 넘어가면 좋을 것 같다.