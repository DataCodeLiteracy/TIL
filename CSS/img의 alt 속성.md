# img의 alt 속성

alt속성에 대해서는 총 3가지 경우의 수가 있다. 처음에는 구글링으롤 이해해보려고 했으나, 더 헷갈리기만 한 것 같아서 그냥 alt 속성 자체가 스크린리더와 관련이 있기 때문에 스크린리더 동작 시켜봤다. 

### alt에 값이 있는 경우

```html
<h1 class="tit-law">
  <img
    src="./images/title.png"
    alt="1만 시간의 법칙 타이틀"
    class="img-tit"
  />
</h1>
```

img 클릭시에 alt에 있는 값을 읽어준다.

### alt에 값이 없는 경우

```html
<h1 class="tit-law">
  <img
    src="./images/title.png"
    alt=""
    class="img-tit"
  />
</h1>
```

img 클릭시에 아무것도 말하지 않고 다음으로 넘어간다.

### alt을 아예 명시하지 않은 경우

```html
<h1 class="tit-law">
  <img
    src="./images/title.png"
    class="img-tit"
  />
</h1>
```

pxpwt img 뭐시기라고 말한다. 오히려 무슨 이미지야 하고 헷갈릴 수 있다고 생각한다.

확실하게 무슨 이미지인지 전달하려면 반드시 명시해야 하고, 무슨 이미지인지 설명하지 않으려면 반드시 빈 내용을 전달해야 한다. 그렇지 않으면 이상한 이미지 이름을 말하기 때문에 오히려 전체 웹페이지 내용을 이해하는 데 걸림돌이 될 수 있다.

# 정리

그러니까 한 마디로 정리하자면 alt 속성은 값이 비어있든 아니든 선언은해야 한다.