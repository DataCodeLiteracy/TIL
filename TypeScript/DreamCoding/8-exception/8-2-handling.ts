{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  class NetworkClient {
    tryConnect(): void {
      throw new Error(`no network!!`);
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // login...
    }
  }

  // const client = new NetworkClient();
  // const service = new UserService(client);

  // service.login();

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        console.log(`catched!!`);
        // show dialog to user
        // if (error instanceof OfflineError) {
        // 사용이 불가능하다. error를 받는 순간 any타입이기 때문에 타입 정보를 받을 수 없다.
        // }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();

  // 어디서 에러를 핸들링하는 것이 우아한가?
}
