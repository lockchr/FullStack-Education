function main(numDays, numBakers, numCakes, numWaffles, numPancakes) {
  let cake = 45;
  let waffle = 5.8;
  let pancake = 3.2;
  let totalCake = numCakes * cake;
  let totalWaffles = numWaffles * waffle;
  let totalPancakes = numPancakes * pancake;
  let totalPerDay = (totalCake + totalWaffles + totalPancakes) * numBakers;
  let totalPerCampaign = totalPerDay * numDays;
  let amountCost = totalPerCampaign * 0.125 - totalPerCampaign;
  let totalRaised = Math.abs(amountCost);

  console.log(`${totalRaised.toFixed(2)}`);
}

main(20, 8, 14, 30, 16);