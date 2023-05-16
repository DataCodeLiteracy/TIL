interface Album {
  artist: string;
  title: string;
  releaseDate: string; // YYYY-MM-DD
  recordingType: string; // E.g., "live" or "studio"
}
const kindOfBlue: Album = {
  artist: "Miles Davis",
  title: "Kind of Blue",
  releaseDate: "August 17th, 1959", // Oops!
  recordingType: "Studio" // Oops!
}; // OK
function recordRelease(title: string, date: string) {
  /* ... */
}
recordRelease(kindOfBlue.releaseDate, kindOfBlue.title); // OK, should be error

export default {};

/**
 * 매개변수의 위치가 바뀌였지만 타입체커가 둘다 string타입이기 때문에 오류를 잡아내지 못한다.
 */
