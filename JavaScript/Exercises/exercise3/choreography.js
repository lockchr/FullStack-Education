function main(steps, dancers, rehearse) {

  let stepsPerDay = (steps / rehearse / steps) * 100;
  let roundUp = Math.ceil(stepsPerDay);
  let percentPerDancer = roundUp / dancers;

  if (stepsPerDay <= 13) {
    console.log(`Yes, they will succeed in that goal! ${percentPerDancer}%.`);
  } else {
    console.log(`No, they will not succeed in that goal! Required ${percentPerDancer.toFixed(2)}% steps to be learned per day.`);
  }
}



main(10464, 20, 20);