# 상위 태그의 width 값

```html
<div class="txt-wrap">
  <p class="txt-wannabe">
    당신은 <strong id="wannabe-text"></strong> 전문가가 되기 위해서
  </p>
  <p class="txt-time">
    대략 <strong id="time-text"></strong>일 이상 훈련하셔야 됩니다.
  </p>
</div>
<div class="btn-wrap">
  <button class="btn-go">훈런하러가기 GO!GO!</button>
  <button class="btn-share">공유하기</button>
</div>
```

위 코드의 경우 상위 div태그는 하위 요소들의 값에 따라 width가 변경되기 때문에 아래와 같이 css 코드르 정의할 필요가 없다.

```css
.txt-wrap {
  width: 100%;
}

.btn-wrap {
  width: 100%;
}
```

그래서 앞으로 이런 불필요한 width 설정은 잘 체크하자.