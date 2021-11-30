class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  // pop()
  pop() {
    if (this.items.length === 0) return "Underflow";
    return this.items.pop();
  }
  // peek()
  peek() {
    return this.items[this.items.length - 1];
  }
  // isEmpty()
  isEmpty() {
    return this.items.length == 0;
  }
  // printStack()
  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(7);
stack.push(9);
console.log(stack.printStack());
stack.pop();
console.log(stack.printStack());
