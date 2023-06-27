# useEffect

아래 코드는 useEffect의 일반적인 로직이다.

****`useEffect(setup, dependencies?)`**  

```jsx
useEffect(() => {
    setup 함수,
    return cleanup 함수 
  }, [의존성 배열])
```

이 중에서 setup 함수는 필수적, dependencies는 선택적, cleanup 함수도 선택적이다. 이 세가지를 useEffect과 같이 이해하기 위해서는 Mount, Update, Unmount에 대한 개념을 알아야한다. 

우리가 웹 페이지를 보는 시점은  첫 렌더링(새로고침), 리렌더링, 화면에서 특정 요소가 없어질 때(Unmount) 이렇게 세 가지가 있을 수 있다.

count 버튼을 누르면 1씩 증가하고 toggle 버튼을 누르면 count 요소를 언마운트시키는 컴포넌트가 있다고 해보자. 

```jsx
import React, { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(1)
  const [string, setString] = useState('')
  const [toggle, setToggle] = useState(false)

  const handleCountUpdate = () => {
    setCount(count + 1)
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    setCount(count + 1)
  }, [count])

  return (
    <div>
      {toggle && (
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
      )}
      <div className="toggle">
        <button onClick={handleToggle}>Toggle</button>
      </div>
    </div>
  )
}

export default App
```

### 의존성 배열에 값이 있을 때 [ ]

```jsx
  useEffect(() => {
    setCount(count + 1)
  }, [count])
```

이 경우에 setCount를 호출하게 되면 컴포넌트 자체를 다시 호출해서 리렌더링 하게 된다. 그럼 다시 useEffect을 호출하게 되고 그럼 다시 setCount를 호출하게 되면서 무한루프에 빠지게 된다. 이때 count에 다른 string 값을 넣어주게 되면 무한루프에 빠지지 않게 된다. string에 대한 의존성은 없기 때문이다. 

### 의존성 배열이 비어있을 때 [ ]

```jsx
  useEffect(() => {
    setCount(count + 1)
  }, [])
```

이때 의존성 배열의 값을 비워놓게 되면 같은 경우여도 무한루프에 빠지지 않게 된다. 이 경우는 첫 런데링시에 딱 한 번만 호출하게 된다. 

### 의존성 배열 자체가 없을 때

```jsx
  useEffect(() => {
    setCount(count + 1)
  }, )
```

하지만 빈 배열이라도 아예 명시하지 않으면 똑같이 무한루프에 빠지게 된다. 아마 의존성이 확실히 없다는 걸 빈 배열로 확실하게 알려줘야 해야 되기 때문이라 생각한다.