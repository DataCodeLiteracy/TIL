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
    response: {
      body: string;
    };
  }

  type FailState = {
    reason: string;
  }
  type LoginState = SuccessState | FailState
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state)
  // success -> body 
  // fail -> reason
}