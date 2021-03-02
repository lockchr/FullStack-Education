function main(balance, withdraw, limit) {
  if (withdraw >= limit) {
    console.log("The limit was exceeded.");
  } else if (withdraw <= balance) {
    console.log("The withdrawl was successful.");
  } else {
    console.log("Insufficient availability.");
  }
}