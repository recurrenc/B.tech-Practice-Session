function matchingStrings(strings, queries) {
  // Write your code here
  let res = [];
  queries.forEach((q) => {
    res.push(findAllIndexOf(q, strings));
  });
  return res;
}

const findAllIndexOf = (q, s) => {
  const temp = [];
  while (temp[0] !== -1) {
    if (temp.length === 0) {
      const i = s.indexOf(q);

      if (i < 0) break;
      temp.unshift(i);
    } else {
      const i = s.indexOf(q, temp[0] + 1);
      if (i < 0) break;
      temp.unshift(i);
    }
  }
  return temp.length;
};

console.log(
  matchingStrings(["aba", "baba", "aba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
);
