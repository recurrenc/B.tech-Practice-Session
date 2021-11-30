const lengthOfLongestSubstring = (s) => {
  let maxLength = 0;
  let stack = [];
  let valid = true;
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (!stack.includes(c)) {
      stack.push(c);
      maxLength = Math.max(stack.length, maxLength);
    } else {
      valid = false;
      while (!valid) {
        stack.shift();
        if (!stack.includes(c)) valid = true;
      }
      stack.push(c);
      maxLength = Math.max(stack.length, maxLength);
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcd"));
