// const getMinimumCost = (k, c) => {
//   const n = c.length;
//   c.sort((a, b) => a - b);
//   const loop = n / k && n % k;
//   let total = 0;
//   for (let i = 0; i < n; i++) {
//     var r = i / k;
//     var purchase = Math.floor(r);
//     total = total + (purchase + 1) * c[i];
//   }
//   return total;
// };

// console.log(getMinimumCost(2, [2, 5, 6]));

process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
  function sortNumber(a, b) {
    return b - a;
  }
  var a = input.split("\n");
  b = a[0];
  c = a[1];
  var d = b.split(" ");
  var n = d[0];
  var k = d[1];
  var prices = c.split(" ");
  var op = prices.sort(sortNumber);
  var total = 0;
  for (var i = 0; i < op.length; i++) {
    var r = i / k;
    var purchase = Math.floor(r);
    total = total + (purchase + 1) * op[i];
  }
  process.stdout.write(total);
});
