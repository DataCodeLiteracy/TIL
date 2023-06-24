function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(montOrTimestamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined
    ? new Date(montOrTimestamp)
    : new Date(year, montOrTimestamp, day);
}

createDate(5543568000); // OK
createDate(7, 27, 1987); // OK

// createDate(4, 1);
// Error: No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
// 오버로드에 2 인수가 필요하지 않지만, 1 또는 3 인수가 필요한 오버로드가 있습니다.ts(2575)

// ---

function format(data: string): string; // OK
function format(data: string, needle: string, haystack: string): string; // OK

function format(getData: () => string): string;
// 실제 오류 코드 Function implementation is missing or not immediately following the declaration.
// 책 오류 코드 This overload signature is not compatible with its implementation
// 책 오류 코드는 밑의 함수 추가 하면 나온다. 그전에는 위의 코드 '이 오버로드 시그니처는 해당 구현 시그니처와 호환되지 않습니다.ts(2394)'
// signature.

function format(data: string, needle?: string, haystack?: string) {
  return needle && haystack ? data.replace(needle, haystack) : data;
}

// ---

