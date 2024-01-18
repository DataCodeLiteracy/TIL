# firebase 회원가입 할 때 이름 정보도 같이 업데이트 되도록 하기

firebase 제공하는 createUserWithEmailAndPassword 함수의 경우, 회원가입 할 때 기본적으로 이메일하고 비밀번호 정보만 인자로 받아서 회원가입 요청을 보낸다. 하지만 내가 진행하려고 하는 토이프로젝트에서 회원가입을 진행할 때, 처음에 받는 정보는 이메일, 비밀번호, 이름, 휴대폰번호를 입력받는다. 

그리고 회원가입을 하고 난 뒤 로그인을 하게 되면, 기본적으로 네비게이션 바에 유저의 이름이 표시되어야 한다. 하지만 firebase를 이용해서 회원가입을 하면 이름을 함께  createUserWithEmailAndPassword 함수에 전달해서 요청을 보낼 수가 없다. 

그래서 createUserWithEmailAndPassword함수로 회원가입을 완료하고 난 뒤에, firebase에서 제공하는 updateProfile이라는 함수를 사용해서 이름을 업데이트 해주는 방식을 사용해서 이름도 바로 업데이트될 수 있도록 코드를 구현해보았다. 

그렇게 하면 일단 유저의 입장에서는 회원가입 정보를 입력하는 버튼을 클릭하는 동작을 수행하지만 실제로는 firebase의 회원가입 코드가 먼저 실행되고 나서 비동기적으로 이름을 업데이트하는 것까지 완료하고 그 다음에 로그인 페이지로 리다이렉션 된다. 그리고 로그인을 하게 되면 루트 페이지로 리다이렉션 되고 당연히 업데이트된 정보를 반영해서 네비게이션 바에 이름을 정상적으로 출력할 수 있게 된다. 

한 가지 아쉬운 건 firebase에서 제공하는 updateProfile 함수는 이름과 프로필이미지만 업데이트 할 수 있다. 즉, 현재 내가 사용하는 UI에서는 휴대폰 번호도 받고 있지만, 해당 정보는 firebase에 Authentication을 사용하면 기록될 수 없다. 대신 데이터베이스를 사용하면, 가능할테지만, 일단은 그게 주 목적은 아니라 이 정도까지만 진행해보았다.

```tsx
const auth = getAuth()

const handleSubmitRegister = async (e: FormEvent) => {
  e.preventDefault()
  try {
    await createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    )
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: userInfo.name,
        photoURL: '/images/user.png'
      })
    }
    changeLoginPath()
  } catch (error) {}
}
```