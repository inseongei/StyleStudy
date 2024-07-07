{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
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
