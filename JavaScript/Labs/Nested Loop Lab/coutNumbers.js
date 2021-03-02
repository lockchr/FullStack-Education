function main(n) {
  let output = "";
  for (let i = n; i >= 1; i--) {
    if (i != 1) {
      output += i + ", ";
    } else {
      output += i;
    }
  }
  console.log(output);
}
main(100);
main(10);