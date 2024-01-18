# useInput 커스텀 훅

회원가입, 로그인을 구현하면서 각 input 컴포넌트에서 개별적으로 유효성검사를 진행해야 되는 요구사항이 있었고, 해당 요구사항을 만족시키기 위해 처음에는 개별적으로 상태를 선언해서 관리하다가 코드가 중복되고 복잡해짐에 따라 useInput 이라는 커스텀 훅으로 리팩토링 해나가는 과정을 기록했습니다.

UI는 아이디, 비밀번호, 비밀번호 확인, 이름, 휴대폰 번호를 받습니다. UI만 보면 정말 복잡할 게 하나도 없습니다.

```tsx
const Register = () => {
  return <div>회원가입</div>
  return (
    <section className="flex flex-col justify-center w-1/2 max-w-md min-w-96 h-full m-auto">
      <p className="mb-4 font-bold text-sm">회원정보를 입력해주세요</p>
      <form>
        <AuthInput type="email" placeholder="아이디(이메일)" />
        <AuthInput type="text" placeholder="비밀번호" />
        <AuthInput type="text" placeholder="비밀번호 확인" />
        <AuthInput type="text" placeholder="이름" />
        <AuthInput type="tel" placeholder="휴대폰 번호" />
      </form>
      <hr className="my-10" />
      <AuthButton text="동의하고 가입하기" />
    </section>
  )
}
```

하지만 요구사항이 조금 복잡해지면서 상태를 선언하고 관리하는 부분에서 아무런 생각없이 구현하다보면 컴포넌트는 엄청 복잡해질 수 있습니다.

최종적으로는 리팩토링해서 하나의 커스텀 훅을 이용하거나 유틸 함수를 이용해서 중복을 제거할 생각이었기 때문에 처음부터 커스텀 훅을 만들면서 시도해보려고 했으나, input 마다 유효성 검사로직이 조금씩 차이가 나기 때문에 생각보다 쉽지 않았습니다. 

그래서 처음에는 일단 직관적으로 구현해봤습니다.

```tsx
// Register 컴포넌트
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [name, setName] = useState('')
const [passwordCheck, setPasswordCheck] = useState('')
const [phone, setPhone] = useState('')
const [emailIsValid, setEmailIsValid] = useState(false)
const [passwordIsValid, setPasswordIsValid] = useState(false)
const [passwordCheckIsValid, setPasswordCheckIsValid] = useState(false)
const [nameIsValid, setNameIsValid] = useState(false)
const [phoneIsValid, setPhoneIsValid] = useState(false)
const [isEmailEmpty, setIsEmailEmpty] = useState(false)
const [isPasswordEmpty, setIsPasswordEmpty] = useState(false)
const [isPasswordCheckEmpty, setIsPasswordCheckEmpty] = useState(false)
const [isNameEmpty, setIsNameEmpty] = useState(false)
const [isPhoneEmpty, setIsPhoneEmpty] = useState(false)
const [isPasswordTouched, setIsPasswordTouched] = useState(false)
const [isPasswordCheckTouched, setIsPasswordCheckTouched] = useState(false)
```

각 Input의 value들과 input이 터치되었는지를 판별하는 값, 그리고 input이 비어있는지를 판별하는 값과 유효성 검사를 체크하는 값 등 상태를 선언해서 관리하는 값만 20개 가까이 되었습니다.

요구사항 중에는 input이 터치되면 스타일링이 변경되고 focus가 out되면 비어있는 값에 대한 유효성 메세지를 표시하고 각 input 값들의 유효성 검사를 통과하지 못한다면 그에 맞는 메세지를 보여주는 등 다양한 요구사항이 존재했기 때문에 그에 따른 상태값도 많이 존재하게 되었으며, 아래와 같이 onChange, onBlur, onClick에 맞는 함수들을 개별적으로 전부 작성했습니다. 

```tsx
// Register 컴포넌트
const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setEmail(value)
    setIsEmailEmpty(false)
  }

  const handleBlurEmail = () => {
    if (email.trim() === '') {
      setIsEmailEmpty(true)
    }

    if (email.length === 0 || isEmailCheck(email)) {
      setEmailIsValid(false)
    } else {
      setEmailIsValid(true)
    }
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleBlurPassword = () => {
    if (password.trim() === '') {
      setIsPasswordEmpty(true)
    } else {
      setIsPasswordEmpty(false)
    }

    if (isPasswordValid(password, email)) {
      setPasswordIsValid(false)
      setIsPasswordEmpty(false)
    } else {
      setPasswordIsValid(true)
    }
  }

  const handlePasswordTouch = () => {
    setIsPasswordTouched(true)
  }

```

그렇다보니, 모든 요구사항을 해결한 Register 컴포넌트의 코드는 300줄이 넘어갔습니다. 

모든 요구사항을 해결한 상황이 되었으니, 이제 중복되는 코드를 커스텀 훅을 통해서 리팩토링할 기초적인 상황이 되었습니다.

모든 input은 value를 공통적으로 가지고 있고, onBlur가 발생할 때 처리해야할 이벤트와 비어있을 때와 input이 클릭(터치)되었을 때와 관련된 로직이 비슷하지만 조금씩 다르게 반복되고 있었습니다. 따라서 공통적으로 정의해야 되는 부분들을 먼저 정의하고 나머지는 type으로 구분을 지어서 각 input의 종류에 따라 조금씩 다른 이벤트를 발생시킬 수 있도록 구현해봤습니다.

그리고 하나의 타입을 정의할 때 하나의 input을 커스텀 훅을 이용해서 기존 로직을 수정하고 그 다음 정상적으로 동작하는지 확인하고 제대로 마이그레이션 되었다면 다음 input을 수정하는 방식으로 전체 코드를 하나씩 리팩토링 해나갔습니다.

아래는 최종적으로 구현을 완료한 useInput 커스텀 훅입니다.

```tsx
import { ChangeEvent, useState } from 'react'

interface InputProps {
  initialValue: string
  validator: (val1: string, val2?: string) => boolean
  type: string
  additionValue?: string
}

const useInput = ({
  initialValue,
  validator,
  type,
  additionValue
}: InputProps) => {
  const [value, setValue] = useState(initialValue)
  const [isValid, setIsValid] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const validateInput = (inputValue: string) => {
    setIsEmpty(inputValue.trim() === '')

    const validationCondition =
      type === 'email' ||
      type === 'name' ||
      type === 'phone' ||
      type === 'password'

    setIsValid(
      validationCondition
        ? !validator(inputValue)
        : !validator(inputValue, additionValue)
    )
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target
    setIsTouched(false)
    validateInput(value)

    if (type === 'passwordCheck') {
      if (!isValid) setIsTouched(false)
      else {
        setIsTouched(true)
      }
    }
  }

  const handleTouch = () => {
    setIsTouched(true)
  }

  return {
    value,
    handleChange,
    handleBlur,
    handleTouch,
    isValid,
    isEmpty,
    isTouched
  }
}

export default useInput
```

```tsx
// Register 컴포넌트
const emailInput = useInput({
    initialValue: '',
    validator: isEmailCheck,
    type: 'email'
  })
const passwordInput = useInput({
  initialValue: '',
  validator: isPasswordValid,
  type: 'password',
  additionValue: emailInput.value
})
const passwordCheckInput = useInput({
  initialValue: '',
  validator: isPasswordCheckValid,
  type: 'passwordCheck',
  additionValue: passwordInput.value
})
const nameInput = useInput({
  initialValue: '',
  validator: isNameCheck,
  type: 'name'
})
const phoneInput = useInput({
  initialValue: '',
  validator: isPhoneCheck,
  type: 'phone'
})
```

제가 구현한 게 재사용성이 그렇게 높은 훅은 아니라고 생각합니다. 그래도 useInput 훅으로 중복된 로직을 최대한 제거하면서 Register 컴포넌트에 적용한 결과 기존의 300줄이었던 코드를 200줄로 줄일 수 있었습니다. 그리고 이제 input이 만약 추가적인 요구사항에 의해서 더 생긴다고 해도 무리없이 useInput 훅으로 간편하게 로직을 재사용해서 구현할 수 있습니다.

그 결과로 LogIn 컴포넌트에서도 useInput 훅을 활용해서 코드를 좀 더 깔끔하게 변경할 수 있었습니다.

현재 상황에서 useInput이 단일 책임 원칙을 지키고 있는지까지는 잘 모르겠으나, 평소에 단순하게 직관적으로 상태를 관리해서 컴포넌트를 구현했던 것과 비교하자면 좀 더 코드를 이해하기도 수월해졌고, 다시 재사용하기에도 편리했습니다. 

코드를 추상화해나가는 과정에서 정말 유용한 게 많은 거 같은데 앞으로는 좀 더 고민을 많이 하는 코드를 작성하도록 노력해봐야겠습니다.