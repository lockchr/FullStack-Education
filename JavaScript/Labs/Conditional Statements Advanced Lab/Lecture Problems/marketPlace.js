function main(product, dayOfWeek) {
  let price = 0;

  if (product == "Banana") {
    if (dayOfWeek == "Weekday") {
      price = 2.50;
      console.log(`${price.toFixed(2)}`);
    } else {
      price = 2.70;
      console.log(`${price.toFixed(2)}`);
    }
  }
  if (product == "Apple") {
    if (dayOfWeek == "Weekday") {
      price = 1.30;
      console.log(`${price.toFixed(2)}`);
    }
  } else {
    price = 1.60;
    console.log(`${price.toFixed(2)}`);
  }
  if (product == "Kiwi") {
    if (dayOfWeek == "Weekday") {
      price = 2.20;
      console.log(`${price.toFixed(2)}`);
    } else {
      price = 3.00;
      console.log(`${price.toFixed(2)}`);
    }
  }
  console.log
}

