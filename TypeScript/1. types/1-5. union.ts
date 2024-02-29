namespace Union {
  /**
   * Union Types: OR (발생할 수 있는 모든 케이스 중에 하나만 사용할 때)
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // fuction:login -> success , fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state)
  // success -> "성공" -> body
  // fail -> "실패" -> reason

  function printLoginState(state: LoginState) {
    "response" in state
      ? console.log(`성공 ${state.response.body}`)
      : console.log(`실패 ${state.reason}`);
  }
}
