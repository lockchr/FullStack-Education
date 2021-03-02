function main(order, extra) {
  let price = 0;
  if (order == "coffee") {
    price += 1.00;
  } else {
    price += 0.60;
  }
  if (extra == "sugar") {
    price += 0.40;
  }
  console.log(`Final Price: $${price.toFixed(2)}`);
}

main("coffee", "sugar");