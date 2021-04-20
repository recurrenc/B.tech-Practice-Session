/*      -------------------------------
        |    FUNCTIONAL PROGRAMMING   |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/

const canConstruct = (target, wordList, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordList) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordList, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeee", [
    "e",
    "ee",
    "eeee",
    "eeeee",
    "eeeeeeee",
  ])
);

console.log(canConstruct("abcd", ["ab", "abc", "d", "cd"]));
