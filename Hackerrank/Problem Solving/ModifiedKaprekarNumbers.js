function kaprekarNumbers(p, q) {
  // Write your code here
  let check = false;
  for (let i = p; i <= q; i++) {
    if (i === 1) {
      process.stdout.write(i + " ");
    }
    let temo = i * i;
    let str = temo + "";
    let p1 = parseInt(str.slice(0, str.length / 2));
    let p2 = parseInt(str.slice(str.length / 2, str.length));
    if (i === p1 + p2) {
      process.stdout.write(i + " ");
      check = true;
    }
  }

  if (!check) {
    process.stdout.write("INVALID RANGE");
  }
}

kaprekarNumbers(400, 700);
