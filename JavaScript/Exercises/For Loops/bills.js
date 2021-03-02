function main(monthRange, bills) {
  let water = 20;
  let waterTotal = monthRange * water;
  let internet = 15;
  let internetTotal = monthRange * internet;
  let electricTotal = 0;

  for (i = 0; i < monthRange; i++) {
    let electric = bills.shift();
    electricTotal += electric;
  }
  let other = (electricTotal + internetTotal + waterTotal) * 1.2;
  let monthTotal = electricTotal + internetTotal + waterTotal + other;
  let monAvg = monthTotal / monthRange;
  console.log(`Electricity: ${electricTotal.toFixed(2)} $`);
  console.log(`Water: ${waterTotal.toFixed(2)} $`);
  console.log(`Internet: ${internetTotal.toFixed(2)} $`);
  console.log(`Other: ${other.toFixed(2)} $`);
  console.log(`Average: ${monAvg.toFixed(2)} $`);
}