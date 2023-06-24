// 현재 공식 문서 CommonJS 버전
// const { readFile } = require("node:fs/promises");
// const { resolve } = require("node:path");
// async function logFile() {
//   try {
//     const filePath = resolve("./test.txt");
//     const contents = await readFile(filePath, { encoding: "utf8" });
//     console.log(contents);
//   } catch (err) {
//     console.error(err.message);
//   }
// }
// logFile();

// 생활코딩 강의 CommonJS 버전
const fs = require("fs");
fs.readFile("test.txt", "utf8", (err, data) => {
  console.log(data);
});
