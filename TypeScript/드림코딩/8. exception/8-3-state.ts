{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  type SuccessState = {
    result: "success";
  };

  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      throw new OfflineError("no network");
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // login....
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // catch의 error는 에러타입 : any
        // show dialog to User
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}

// 가급적이면 프로그래밍을 할 때에는 내가 예상할수 있는 상태를 타입으로 정의 하는 것이 안정적이며 예상가능하다.
