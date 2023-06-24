function contains(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    search; // Type is RegExp
    return !!search.exec(text);
  }
  search; // Type is string
  return text.includes(search);
}

export default {};

/**
 * 요약
 *
 * instanceof로 타입 좁히기
 */
