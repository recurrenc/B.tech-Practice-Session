class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
  contains(element) {
    return this.items.includes(element);
  }
  size() {
    return this.items.length;
  }
}

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
  console.log(stack);
  return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcd"));
