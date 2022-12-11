var fs = require("fs");
const { start } = require("repl");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  console.log(partOne(data));
  console.log(partTwo(data));
});

function partOne(data) {
  // should visit smalll caves at most once
  // should visit big caves any number of times
  // GOAL: find number of distinct paths

  data = data
    .trim()
    .split("\n")
    .map((line) => line.split("-"));

  let paths = {};

  for (let [start, end] of data) {
    if (!(start in paths)) {
      paths[start] = new Set();
    }
    if (!(end in paths)) {
      paths[end] = new Set();
    }

    paths[start].add(end);
    paths[end].add(start);
  }

  const findPaths = (start = "start", alreadyVisited = new Set()) => {
    if (start === "end") return 1;

    let visited = alreadyVisited;
    if (start === start.toLowerCase()) {
      visited = new Set([...visited, start]);
    }

    let count = 0;
    paths[start].forEach((end) => {
      if (!visited.has(end)) {
        count += findPaths(end, visited);
      }
    });

    return count;
  };

  return findPaths();
}
function partTwo(data) {
  // should visit smalll caves at two times
  // should visit big caves any number of times
  // GOAL: find number of distinct paths

  data = data
    .trim()
    .split("\n")
    .map((line) => line.split("-"));

  let paths = {};

  for (let [start, end] of data) {
    if (!(start in paths)) {
      paths[start] = new Set();
    }
    if (!(end in paths)) {
      paths[end] = new Set();
    }

    paths[start].add(end);
    paths[end].add(start);
  }

  const findPaths = (start = "start", alreadyVisited = new Set()) => {
    if (start === "end") return 1;

    let visited = alreadyVisited;
    if (start === start.toLowerCase()) {
      if (visited.has(start)) {
        visited = new Set([...visited, "NOPE"]);
      } else {
        visited = new Set([...visited, start]);
      }
    }

    let count = 0;
    paths[start].forEach((end) => {
      if (end != "start" && (!visited.has(end) || !visited.has("NOPE"))) {
        count += findPaths(end, visited);
      }
    });
    return count;
  };

  return findPaths();
}
