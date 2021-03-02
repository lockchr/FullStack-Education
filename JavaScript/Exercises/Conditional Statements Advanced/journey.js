function main(budget, season) {
  let destination = "";
  let holiday = "";
  let expense = "";
  if (budget < 100) {
    destination = "Bulgaria";
    if (season == "summer") {
      expense = budget * 0.3;
      holiday = "Camp";
    } else {
      expense = budget * 0.7;
      holiday = "Hotel";
    }
  } else if (budget < 1000) {
    destination = "Balkans";
    if (season == "summer") {
      expense = budget * 0.4;
      holiday = "Camp";
    } else {
      expense = budget * 0.8;
      holiday = "Hotel";
    }
  } else if (budget > 1000) {
    destination = "Europe";
    expense = budget * 0.9;
    holiday = "Hotel";
  }
  console.log(`Somewhere in ${destination}`);
  console.log(`${holiday} - ${expense.toFixed(2)}`);
}

main(312, "summer");