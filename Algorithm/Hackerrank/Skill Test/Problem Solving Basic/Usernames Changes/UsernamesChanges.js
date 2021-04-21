"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'possibleChanges' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY usernames as parameter.
 */

function possibleChanges(usernames) {
  // Write your code here
  let result = [];
  usernames.forEach((element) => {
    let temp = element.split("").sort().join("");
    let elem = temp < element ? "YES" : "NO";
    result.push(elem);
  });
  return result;
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const usernamesCount = parseInt(readLine().trim(), 10);

  let usernames = [];

  for (let i = 0; i < usernamesCount; i++) {
    const usernamesItem = readLine();
    usernames.push(usernamesItem);
  }

  const result = possibleChanges(usernames);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
5;
