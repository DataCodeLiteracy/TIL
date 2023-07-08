# Material Symbols Outlined(구글 폰트)

https://fonts.google.com/icons

Material Symbols Outlined란 구글 폰트에서 아이콘을 사용할 수 있는 방법 중에 하나다.

meta태그 link 가져와서 body에 아래 span태그에 있는 속성과 텍스트를 명시해주면 아이콘이 렌더링된다.

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0"
/>
```

```tsx
<span class="material-symbols-outlined">done</span>
```

span태그는 다른 태그로도 바꿀 수 있다. button태그로 해도 가능하다.

즉, class 이름으로 done이라는 글자를 아이콘으로 변환해서 렌더링 시켜주고 있는 것 같다.

이렇게 아이콘을 사용하는 것과 폰트 어썸에서 사용하는 것과의 장,단점도 나중에 비교해보자.

일단 가볍게 네트워크 탭을 확인해서 Material관련 파일의 크기를 확인해보니 디스크 캐시로 되어 있었다.

디스크 캐시는 웹 브라우저가 이전에 서버로부터 가져온 리소스를 저장하는 임시 저장소다. 웹 페이지의 리소스 브라우저는 이 리소스를 서버로부터 다운로드하여 디스크 캐시에 저장한다.

이후 같은 리소스가 필요한 경우, 브라우저는 디스크 캐시에서 해당 리소스를 가져온다. 이렇게 함으로써 서버로부터 리소스를 다운로드하는 대신 로컬 디스크에 저장된 리소스를 사용하여 웹 페이지의 로딩 속도를 향상시킬 수 있다.
