function main(n1, n2, operator) {
  let result;
  let evenOdd;
  if (operator == "+") {
    result = n1 + n2;
  } else if (operator == "-") {
    result = n1 - n2;
  } else if (operator == "*") {
    result = n1 * n2;
  } else if (operator == "/") {
    result = n1 / n2;
  } else if (operator == "%") {
    result = n1 % n2;
  }
  if (operator == "+" || operator == "-" || operator == "*") {
    if (result % 2 == 0) {
      evenOdd = "even";
    } else {
      evenOdd = "odd";
    }
    console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOdd}`);
  } else if (operator == "%") {
    console.log(`${n1} % ${n2} = ${result}`);
  } else if (n2 == 0 && operator == "/") {
    console.log(`Cannot divide ${n1} by zero`);
  } else if (n2 == 0 && operator == "%") {
    console.log(`Cannot divide ${n1} by zero`);
  } else {
    console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
  }
}
main(10, 12, "%");