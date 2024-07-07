{
  /**
   * Union Types : OR ( 몇개의 보기 중에 딱 하나를 담고 싶다면 유니온 타입을 쓸 것 )
   */
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("down"); // 문자열을 받는 순간 매개변수가 받을 수 있는 4개가 추천에 뜬다

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  // function: login -> success, fail

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
        body: "loggin in",
      },
    };
  }

  // printLoginState(state : LoginState)
  // success -> 성공했다는 말과 함께 Body 출력
  // Fail -> 실패했다는 말과 함께 reason 출력

  // 1번째 방식
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`축하합니다. ${state.response.body}`);
    } else {
      console.log(`실패. ${state.reason}`);
    }
  }
}
