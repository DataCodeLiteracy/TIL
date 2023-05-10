// function sing(song) {
//   console.log(`Singing: ${song}`);
// }

function sing(song: string) {
  console.log(`Singing: ${song}`);
}

function singTwo(first: string, second: string) {
  console.log(`${first} / ${second}`);
}

// Logs: "Ball and Chain / undefined"
// singTwo("Ball and Chain");
// Error: Expected 2 arguments, but got 1.
// 2개의 인수가 필요한데 1개를 가져왔습니다.

// Logs: "I Will Survive / Higher Love"
singTwo("I Will Survive", "Higher Love");

// Logs: "Go Your Own Way / The Chain"
// singTwo("Go Your Own Way", "The Chain", "Dreams");
// Error: Expected 2 arguments, but got 3.
// 2개의 인수가 필요한데 3개를 가져왔습니다.

function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}`);

  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}

announceSong("GreensLeeves"); // OK
announceSong("GreensLeeves", "undefined"); // OK
announceSong("Chandelier", "Sia"); // OK

function announceSongBy(song: string, singer: string | undefined) { /* ... */ }

// announceSongBy("GreensLeeves");
// Error: Expected 2 arguments, but got 1.
// 2개의 인수가 필요한데 1개를 가져왔습니다.
announceSongBy("GreensLeeves", "undefined"); // OK
announceSongBy("Chandelier", "Sia"); // OK

// function announceSinger(singer?: string, song: string) {}
// Error: A required parameter cannot follow an optional parameter.
// song'이(가) 선언은 되었지만 해당 값이 읽히지는 않았습니다.ts(6133)
// 필수 매개 변수는 선택적 매개 변수 뒤에 올 수 없습니다.ts(1016)

function rateSong(song: string, rating = 0) {
  console.log(`${song} gets ${rating}/5 start!`);
}

rateSong("Photograph"); // OK
rateSong("Set Fire to the Rain", 5); // OK
rateSong("Set Fire to the Rain", undefined); // OK

// rateSong("At Last!", "100");
// Error: Arguments of type "100" is not assignable to parameter of type 'number | undefined'.
// 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song}, by ${singer}`);
  }
}

singAllTheSongs("Alicia Keys"); // OK
singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face"); // OK

// singAllTheSongs("Ella Fitzgerald", 2000);
// Error : Argument of type 'number' is not assignable to parameter of type 'string'
// 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

// 타입: (songs: string[]) => number
function singSongs(songs: string[]) {
  for (const song of songs) {
    console.log(`${song}`);
  }
  return songs.length;
}

// 타입: (songs: string[], index: number) => string | undefined
function getSongAt(songs: string[], index: number) {
  return index < songs.length
    ? songs[index]
    : undefined;
}

function singSongsRecursive(songs: string[], count = 0): number {
  return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}

const singSongsRecursive2 = (songs: string[], count = 0): number =>
  songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
  
function getSongRecordingDate(song: string):
Date | undefined{
  switch (song) {
    case "Strange Fruit":
      return new Date(`April 20, 1939`); // OK
    case "Greenleeves":
      // return "unknown";
    // Error: Type 'string' is not assignable to type 'Date'.
    // 'string' 형식은 'Date' 형식에 할당할 수 없습니다.ts(2322)
    default:
      return undefined; // OK
  }
}

// ---

let nothingInGivesString: () => string;

let inputAndOutput: (songs: string[], count?: number) => number;

// ---

const songs = ["Juice", "Shake It Off", "What's up"];

function runOnSongs(getSongAt: (index: number) => string) {
  for (let i = 0; i < songs.length; i += 1){
    console.log(getSongAt(i));
  }
}

function getSongAt2(index: number) {
  return `${songs[index]}`;
}

runOnSongs(getSongAt2); // OK

function logSong(song: string) {
  return `${song}`;
}

// runOnSongs(logSong);
// Error:  Argument of type '(song: string) => string' is not assignable to parameter of type '(index: number) => string'.
// Types of parameters 'song' and 'index' are incompatible.
// Type 'number' is not assignable to type 'string'.
/*
(song: string) => string' 형식의 인수는 '(index: number) => string' 형식의 매개 변수에 할당될 수 없습니다.
  'song' 및 'index' 매개 변수의 형식이 호환되지 않습니다.
    'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2345)
*/

// 타입은 string | undefined 유니언을 반환하는 함수
let returnsStringOrUndefined: () => string | undefined;
// 타입은 undefined나 string을 반환하는 함수
let maybeReturnsString: (() => string) | undefined;

let singer: (song: string) => string;

singer = function (song) {
  // song: string의 타입
  return `Singing: ${song.toUpperCase()}!`; // OK
}

const songs2 = ["Call Me", "Jolene", "The Chain"];

// song: string
// index: number
songs.forEach((song, index) => {
  console.log(`${song} is at index ${index}`);
});

// ---

type StringToNumber = (input: string) => number;

let stringToNumber: StringToNumber;

stringToNumber = (input) => input.length; // OK

// stringToNumber = (input) => input.toUpperCase();
// Error:  Type 'string' is not assignable to type 'number'.
// 'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)

type NumberToString = (input: number) => string;

function useNumberToString(numberToString: NumberToString) {
  console.log(`The string is: ${numberToString(1234)}`);
}

useNumberToString((input) => `${input}! Hooray!`); // OK

// useNumberToString((input) => input * 2);
// Error: Type 'number' is not assignable to type 'string'.
// 'number' 형식은 'string' 형식에 할당할 수 없습니다.ts(2322)

// ---

function logSong2(song: string | undefined): void {
  if (!song) {
    return; // OK
  }
  console.log(`${song}`);

  // return true;
  // Error: Type 'boolean' is not assignable to type 'void'.
  // 'boolean' 형식은 'void' 형식에 할당할 수 없습니다.ts(2322)
}

let songLogger: (song: string) => void;

songLogger = (song) => {
  console.log(`${songs}`);
};

songLogger("Heart of Glass"); // OK

function returnsVoid() {
  return;
}

let lazyValue: string | undefined;

// lazyValue = returnsVoid();
// Error: Type 'void' is not assignable to type 'string | undefined'.
// 'void' 형식은 'string | undefined' 형식에 할당할 수 없습니다.ts(2322)

const records: string[] = [];

function saveRecords(newRecords: string[]) {
  newRecords.forEach(record => records.push(record));
}

saveRecords(['21', 'Come On Over', 'The Bodyguard']);

// ---

function fail(message: string): never {
  throw new Error(`Invariant failure: ${message}`);
}

function workWithUnsafeParam(param: unknown) {
  if (typeof param !== 'string') {
    fail(`param should be a string, not ${typeof param}`);
  }

  // 여기에서 param의 타입은 string으로 알려집니다. 
  param.toUpperCase(); // OK
}
