function main(money, yearLived) {
  let age = 18;
  for (let year = 1800; year <= yearLived; year++) {
    if (year % 2 == 0) {
      money = money - 12000;
    } else {
      money = money - (12000 + 50 * age);
    }
    age++;
  }
  if (money >= 0) {
    console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
  } else {
    console.log(`He will need ${(money * -1).toFixed(2)} dollars to survive.`);
  }
}
main(50000, 1806);