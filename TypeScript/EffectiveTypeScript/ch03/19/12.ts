// HIDE
namespace express {
  export interface Request {}
  export interface Response {
    send(text: string): void
  }
}
interface App {
  get(path: string, cb: (request: express.Request, response: express.Response) => void): void
}
const app: App = null!
// END

// Don't do this:
app.get('/health', (request: express.Request, response: express.Response) => {
  response.send('OK')
})

// Do this:
app.get('/health', (request, response) => {
  response.send('OK')
})

export default {}

/**
 * 요약
 * 
 * 보통 타입 정보가 있는 라이브러리에서, 콜백 함수의 매개변수 타입은 자동으로 추론된다. 
 */