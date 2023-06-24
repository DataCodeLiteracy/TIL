// HIDE
interface Options {}
// END
type HTTPFunction = (url: string, options: Options) => Promise<Response>;
const get: HTTPFunction = (url, options) => {
  /* COMPRESS */ return Promise.resolve(new Response()); /* END */
};
const post: HTTPFunction = (url, options) => {
  /* COMPRESS */ return Promise.resolve(new Response()); /* END */
};

export default {};

/**
 * 요약
 *
 * 타입 시그니처를 공유하는 함수의 중복을 제거
 */
