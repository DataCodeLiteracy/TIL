# @apply에 대해..

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
```

```html
<button class="btn-primary">
  Save changes
</button>
```

@apply는 가장 큰 이점은 똑같은 tailwind 코드를 반복할 필요 없다는 점입니다. 한 번 클래스를 정의해놓고 원하는 곳에서 해당 클래스를 호출하는 것으로 스타일링이 가능합니다. 그렇다면 이런 생각을 할 수 있습니다. 그럼 tailwind의 단점 중에 html이나 jsx의 코드가 길어지는 부분이 있습니다. 그렇다면 너무 길어지는 곳은 @apply로 전부 정의해서 사용하면 되는 거 아닌가?라는 생각을 해볼 수 있습니다. 실제로 input요소가 5개만 되도, 그 모든 곳에 공통적인 스타일링을 한다면 코드가 중복되고 길어지게 됩니다.

하지만 tailwind의 장점 중에 하나로 purge라는 기능이 있습니다. purge는 실제 스타일링을 한 코드가 작성되어 있어도 실제 사용되지 되는지를 분석합니다. 이때 분석해서 사용되지 않으면 최종 빌드에서 제거가 됩니다. 이는 최종 번들링의 사이즈를 감소시킬 수 있기 때문에 아주 유용한 기능입니다. 

그런데 이런 purge 기능은 @apply로 적용한 코드에는 동작하지 않습니다. 그렇기 때문에 반드시 필요한 곳에서만 사용해야 합니다.