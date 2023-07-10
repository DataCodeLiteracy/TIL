# import React from ‘react’

여기서 import하는 React는 React 라이브러리의 진입점이다. 

선언하게 되면 최상위 API를 사용할 수 있다.

오늘은 최상위 API 중에 React.Component 와 React.PureComponent에 대해 공부해보자.

### React.PureComponent

React.Component를 확장한 특수한 종류의 컴포넌트다.

React.Component와 달리 shouldComponentUpdate 메서드를 자동으로 구현하여 props와 state의 얕은 비교를 수행한다. 이는 이전 props와 state와 현재 props와 state를 얕은 비교하여 변경이 감지되면 리렌더링을 수행한다. 이렇게 함으로써 변경이 없는 경우에는 불필요한 리렌더링을 방지하여 성능을 향상시킬 수 있다.

### React.Component

React.Component는 모든 리액트 컴포넌트의 기본 클래스다. 이 클래스를 상속하여 사용자 정의 컴포넌트를 만들 수 있다. React.Component를 상속한 컴포넌트는 컴포넌트의 생명주기 메서드와 state, props 등의 기능을 사용할 수 있다. 이 클래스를 사용하여 컴포넌트를 정의하면 필요한 기능을 직접 구현할 수 있다.

### 다른 API들

1. React.Fragment: 리액트 컴포넌트에서 여러 요소를 렌더링할 때 사용되는 래퍼 컴포넌트다. React.Fragment를 사용하면 추가적인 DOM 요소를 만들지 않고 여러 요소를 그룹화할 수 있다.
2. React.StrictMode: 개발 환경에서 추가적인 검사와 경고를 활성화하여 애플리케이션의 잠재적인 문제를 미리 감지할 수 있는 엄격 모드다. 예를 들어, 중복된 렌더링, 부작용이 있는 부수 효과, 레거시 라이프사이클 메서드 사용 등에 대한 경고를 표시한다.
3. React.Suspense: 코드 분할과 같은 비동기 작업을 처리하는 동안 로딩 상태를 처리하기 위해 사용되는 컴포넌트다. Suspense 컴포넌트는 비동기 작업의 결과를 기다리는 동안 대체 내용을 렌더링하거나 로딩 상태를 표시할 수 있다.
4. React.lazy: 동적으로 컴포넌트를 로딩하고 코드 분할을 지원하기 위해 사용되는 함수다. React.lazy 함수를 사용하여 컴포넌트를 지연 로딩할 수 있으며, 컴포넌트가 실제로 필요할 때 비동기적으로 로딩된다.
5. React.memo: 컴포넌트의 성능을 최적화하기 위해 사용되는 고차 컴포넌트다. React.memo를 사용하여 컴포넌트를 감싸면, 컴포넌트의 props가 변경되지 않는 한 이전에 렌더링된 결과를 재사용할 수 있다.