// Function getJSON(url: string): Promise<any>
async function getJSON(url: string) {
  const response = await fetch(url);
  const jsonPromise = response.json(); // Type is Promise<any>
  return jsonPromise;
}

export default {};

/**
 * 요약
 *
 * async 함수는 이미 래핑되어 있는 Promise객체를 또 다시 래핑하지 않는다.
 */
