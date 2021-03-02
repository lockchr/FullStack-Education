function main(n1, n2, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n1 / n2;
      break;
    case "%":
      result = n1 % n2;
      break;
  }
  console.log(`${n1} ${operator} ${n2} = ${result}`);

}

main(10, 12, "+");

// console.log(`${n1}${operator}${n2}`);