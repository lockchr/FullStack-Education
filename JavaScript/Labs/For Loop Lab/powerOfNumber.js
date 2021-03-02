function main(n, p) {
  let total = 1;

  for (let i = 1; i <= n; i++) {
    total = total * p;
  }
  console.log(total);
}
