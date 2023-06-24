// function sing(song) {
//   console.log(`Singing: ${song}`);
// }
function sing(song) {
    console.log("Singing: ".concat(song));
}
function singTwo(first, second) {
    console.log("".concat(first, " / ").concat(second));
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
