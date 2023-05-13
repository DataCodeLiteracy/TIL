const checkedFetch: typeof fetch = async (input, init) => {
  //  ~~~~~~~~~~~~   Type 'Promise<Response | HTTPError>'
  //                     is not assignable to type 'Promise<Response>'
  //                   Type 'Response | HTTPError' is not assignable
  //                       to type 'Response'
  const response = await fetch(input, init);
  if (!response.ok) {
    return new Error("Request failed: " + response.status);
  }
  return response;
};

export default {};

/**
 * 요약
 *
 * fetch함수를 타입으로 정의했기 때문에
 * Promise<response>만 반환해야지 throw new Error에 return 을 명시하게 되면 오류가 발생한다.
 */
