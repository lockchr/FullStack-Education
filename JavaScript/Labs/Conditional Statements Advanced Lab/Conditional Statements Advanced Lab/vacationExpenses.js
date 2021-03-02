function main(season, type, days) {
  let totalPrice = 0;
  switch (season) {
    case "Spring":
      if (type == "Hotel") {
        totalPrice = 30 * days;
        totalPrice = totalPrice - (totalPrice * 0.20);
      } else {
        totalPrice = 10 * days;
        totalPrice = totalPrice - (totalPrice * 0.20);
      }
      break;
    case "Summer":
      if (type == "Hotel") {
        totalPrice = 50 * days;
      } else {
        totalPrice = 30 * days;
      }
      break;
    case "Autumn":
      if (type == "Hotel") {
        totalPrice = 20 * days;
        totalPrice = totalPrice - (totalPrice * 0.30);
      } else {
        totalPrice = 15 * days;
        totalPrice = totalPrice - (totalPrice * 0.30);
      }
      break;
    case "Winter":
      if (type == "Hotel") {
        totalPrice = 40 * days;
        totalPrice = totalPrice - (totalPrice * 0.10);
      } else {
        totalPrice = 10 * days;
        totalPrice = totalPrice - (totalPrice * 0.10);
      }
      break;
  } console.log(`${totalPrice.toFixed(2)}`);
}