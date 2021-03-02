function main(n) {
  let sum = 0;
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i < n) {
      output += i + " + ";
    } else {
      output += i + " = ";
    }

    sum += i;
  }
  console.log(`${output}${sum}`);
}

main(25);