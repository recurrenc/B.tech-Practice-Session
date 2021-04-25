/*      -------------------------------
       |       LEETCODE SOLUTION       |
        -------------------------------
  Auther : Sonu Kumar (B.tech 2nd Year in 2020-2021)

*/
/**
 * @param {string} s
 * @return {boolean}
 */
var op = "({[";
var cl = ")}]";

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 != 0) return false;
  var stack = [];
  for (var i = 0; i < s.length; ++i) {
    if (op.indexOf(s[i]) >= 0) stack.push(s[i]);
    else if (cl.indexOf(s[i]) >= 0) {
      var res = pop(stack, s[i]);
      if (res) continue;
      else return false;
    }
  }
  if (stack.length == 0) return true;
  else return false;
};

var pop = function (stack, c) {
  var poped = stack.pop();
  if (op.indexOf(poped) >= 0) {
    if (poped == closeToOpen(c)) return true;
    else return false;
  } else if (cl.indexOf(poped) >= 0) {
    return pop(stack, poped);
  }
};

var closeToOpen = function (s) {
  if (s === ")") {
    return "(";
  }
  if (s === "}") {
    return "{";
  }
  if (s === "]") {
    return "[";
  }
};

console.log(isValid("{([)}]"));
console.log(isValid("{([])}"));
