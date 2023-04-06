{
  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  }

  type FailState = {
    result: 'fail';
    reason: string;
  }


  let success: SuccessState = {
    result: 'success',
    response: { body: '성공이다!!' }
  };
  let fail: FailState = {
    result: 'fail',
    reason: '실패다!!'
  }

  type LoginState = SuccessState | FailState
  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state)
  // success -> body
  // fail -> reason
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }

  printLoginState(success);
  printLoginState(fail);
}