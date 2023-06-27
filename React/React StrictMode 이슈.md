# React.StrictMode 이슈

```jsx
// App.jsx
import { useState } from 'react'
import Count_String from './components/Count_String'

const App = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      {toggle && <Count_String />}
      <div className="toggle">
        <button onClick={() => setToggle((show) => !show)}>Toggle</button>
      </div>
    </div>
  )
}

export default App
```

```jsx
import { useState, useEffect } from 'react'

export default function Count_String() {
  const [count, setCount] = useState(1)
  const [string, setString] = useState('')

  const handleCountUpdate = () => {
    setCount(count + 1)
  }

  const handleStringUpdate = () => {
    setString('22')
  }

  useEffect(() => {
    console.log(`렌더링 😀`)
    const timer = setInterval(() => {
      console.log('타이머 돌아가는 중...')
    }, 1000)
    return () => {
      clearInterval(timer)
      console.log(`unMount 😂`)
    }
  }, [])

  return (
    <div>
      <div className="count">
        <button onClick={handleCountUpdate}>Update</button>
        <span>count: {count}</span>
      </div>
      <div className="string">
        <button onClick={handleStringUpdate}>Update</button>
        <span>string: {string}</span>
      </div>
    </div>
  )
}
```

이 코드의 경우, 첫 렌더링 시에는 렌더링 콘솔을 출력하고 unMount도 출력한다. 왜 그럴까?

아마 React.StrictMode 이슈인 것 같다. 

```jsx
React는 작성하는 모든 구성 요소가 순수 함수라고 가정합니다. 즉, 작성하는 React 구성 요소는 동일한 입력
(props, state 및 context)이 주어지면 항상 동일한 JSX를 반환해야 합니다.
이 규칙을 위반하는 구성 요소는 예기치 않게 동작하여 버그를 일으킵니다. 실수로 순수하지 않은 코드를 찾는 데 
도움이 되도록 엄격 모드는 개발 중에 일부 함수(순수해야 하는 함수만)를 두 번 호출합니다.

- 리액트 공식문서 - 
```

마운드 > 언마운트 > 리마운트 과정을 빠르게 지나면서 마운트 되어 렌더링이 진행된 후 한번 더 체크하기 위해 언마운트 후 리마운트되면서 한번 더 렌더링이 진행된다. 

이번에 useEffect 공부하면서 clean함수 체크하는데, 계속 setup함수에 있는 console 출력하고 cleanup함수에 있는 console 출력하고 다시 setup 함수 콘솔을 출력을 한 적이 있었다. 나는 혹시 useEffect에서 로직을 잘못 작성했나 하고 계속 그 부분만 신경썼는데, 생뚱맞은 짓을 하고 있었다.