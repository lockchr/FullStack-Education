function main(budget, season, men) {
  season = season.toLowerCase();
  let seasonName = ["summer", "autumn", "winter", "spring"];
  let rent = [4200, 4200, 2600, 3000];
  let total = 0;
  let menEven = men % 2;
  if (season === "summer") {
    total = rent[seasonName.indexOf(season)];
  } else if (season === "autumn") {
    total = rent[seasonName.indexOf(season)];
  } else if (season === "winter") {
    total = rent[seasonName.indexOf(season)];
  } else if (season === "spring") {
    total = rent[seasonName.indexOf(season)];
  }
  if (men <= 6) {
    total *= 0.9;
  } else if (men > 6 && men < 12) {
    total *= 0.85;
  } else if (men > 11) {
    total *= 0.75;
  }
  if (menEven == 0 && season !== "autumn") {
    total *= 0.95;
  } else if (season === "summer") {
    total = total;
  }
  if (total < budget) {
    let moneyLeft = budget - total;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else if (total > budget) {
    let moneyNeeded = total - budget;
    console.log(
      `Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`
    );
  }
}