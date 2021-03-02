function main(n) {
  let sum = "";
  for (let i = 0; i < n; i += 2) {
    if (i > 0) {
      sum += ", ";
    }
    sum += 2 ** i;
  }
  console.log(sum);
}
main(10);