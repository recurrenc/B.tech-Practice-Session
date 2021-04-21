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
 * Complete the 'maxCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. STRING_ARRAY labels
 *  3. INTEGER dailyCount
 */

function maxCost(cost, labels, dailyCount) {
  // Write your code here
  let counter = dailyCount;
  let maxCost = 0;
  let dayCounter = 0;
  let costCounter = 0;
  for (let i = 0; i < labels.length; i++) {
    costCounter += cost[i];

    if (labels[i] === "legal") {
      --counter;
    }
    if (counter === 0) {
      if (maxCost <= costCounter) {
        maxCost = costCounter;
      }
      costCounter = 0;
      counter = dailyCount;
    }
  }

  return maxCost;
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const costCount = parseInt(readLine().trim(), 10);

  let cost = [];

  for (let i = 0; i < costCount; i++) {
    const costItem = parseInt(readLine().trim(), 10);
    cost.push(costItem);
  }

  const labelsCount = parseInt(readLine().trim(), 10);

  let labels = [];

  for (let i = 0; i < labelsCount; i++) {
    const labelsItem = readLine();
    labels.push(labelsItem);
  }

  const dailyCount = parseInt(readLine().trim(), 10);

  const result = maxCost(cost, labels, dailyCount);

  ws.write(result + "\n");

  ws.end();
}
