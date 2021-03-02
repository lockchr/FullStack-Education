function main(amountNeeded, itemPurchased) {
  let item = itemPurchased.shift();
  let paymentMethod = "cash";
  let totalCashPayments = 0;
  let numberOfCashPayments = 0;
  let totalCardPayments = 0;
  let numberOfCardPayments = 0;
  while (item != undefined) {
    if (paymentMethod === "cash") {
      if (item > 100) {
        console.log(`Error in transaction!`);
      } else {
        console.log(`Product sold!`);
        totalCashPayments += item;
        numberOfCashPayments += 1;
      }
      paymentMethod = "card";
    } else if (paymentMethod === "card") {
      if (item < 10) {
        console.log(`Error in transaction!`);
      } else {
        console.log(`Product sold!`);
        totalCardPayments += item;
        numberOfCardPayments += 1;
      }
      paymentMethod = "cash";
    }
    item = itemPurchased.shift();
  }
  if (amountNeeded <= totalCashPayments + totalCardPayments) {
    console.log(`Average CS: ${(totalCashPayments / numberOfCashPayments).toFixed(2)}`);
    console.log(`Average CC: ${(totalCardPayments / numberOfCardPayments).toFixed(2)}`);
  } else {
    console.log(`Failed to collect required money for charity.`);
  }
}
main(500, [120, 8, 63, 256, 78, 317]);