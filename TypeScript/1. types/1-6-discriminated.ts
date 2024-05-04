{
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "loggin in",
      },
    };
  }

  // printLoginState(state : LoginState)
  // success -> 성공했다는 말과 함께 Body 출력
  // Fail -> 실패했다는 말과 함께 reason 출력

  // 2번째 방식 - 공통적으로 가지고 있는 키를 넣어서 state.을 했을 때 타입스크립트가 알아 챌 수 있게 한다.
  function printLoginState(state: LoginState) {
    // (직관적)
    if (state.result === "success") {
      console.log(`축하합니다. ${state.response.body}`);
    } else {
      console.log(`실패. ${state.reason}`);
    }
  }
}
