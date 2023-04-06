{
  /*
    Union Types: OR
  */
  
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }

  move('up');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 32;

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
    if ('response' in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  }
}