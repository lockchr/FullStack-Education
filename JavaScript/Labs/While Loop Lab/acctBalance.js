function main(numList) {
  let bal = 0;
  let transaction = numList.shift();
  while (transaction != 'End' && transaction != undefined) {
    if (transaction > 0) {
      // increase 

      console.log(`Increase: ${transaction.toFixed(2)}`);
    } else if (transaction < 0) {
      // decrease

      console.log(`Decrease: ${Math.abs(transaction).toFixed(2)}`);
    }
    bal += transaction;
    transaction = numList.shift();
  }
  console.log(`Balance: ${bal.toFixed(2)}`);
}
main([500, 15.5, -80.35, 'End']);