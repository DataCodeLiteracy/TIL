// const checkedFetch: typeof fetch = async (input, init) => {
//   const response = await fetch(input, init)
//   if (!response.ok) {
//     throw new Error('Request failed: ' + response.status)
//   }
//   return response
// }

const checkedFetch: FetchFn = async (input, init) => {
  const response = await fetch(input, init);
  if (!response.ok) {
    throw new Error("Request failed: " + response.status);
  }
  return response;
};

type FetchFn = (
  input: RequestInfo,
  init: RequestInit | undefined
) => Promise<Response>;

export default {};

/**
 * 요약
 *
 * 다른 함수의 시그니처를 참조하려면 typeof fn을 사용하면 된다.
 * typeof를 함수와 같이 사용하면 타입으로서 사용이 가능하다?
 */
