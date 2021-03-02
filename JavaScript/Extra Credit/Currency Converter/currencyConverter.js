function main(num, inputUnit, outputUnit) {
  let currency = 0;
  let result = 0;

  if (inputUnit === "BGN") {
    currency = num / 1;
  } else if (inputUnit === "USD") {
    currency = num / 1.79549;
  } else if (inputUnit === "EUR") {
    currency = num / 1.95583;
  } else if (inputUnit === "GBP") {
    currency = num / 2.53405;
  }
  if (outputUnit === "BGN") {
    result = currency * 1;
  } else if (outputUnit === "USD") {
    result = currency * 1.79549;
  } else if (outputUnit === "EUR") {
    result = currency * 1.95583;
  } else if (outputUnit === "GBP") {
    result = currency * 2.53405;
  }
  console.log(result.toFixed(5), outputUnit);
}

main(1, "EUR", "USD");