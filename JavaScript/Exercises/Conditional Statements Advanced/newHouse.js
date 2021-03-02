function main(flowerType, numFlower, budget) {

  let totalPrice = 0;
  let moneyLeft = 0;
  let moneyNeeded = 0;


  if (flowerType === "Roses") {
    if (numFlower > 80) {
      totalPrice = 5 * numFlower;
      totalPrice = totalPrice - (totalPrice * 0.10);
    } else {
      totalPrice = 5 * numFlower;
    }
  }
  if (flowerType === "Dahlias") {
    if (numFlower > 90) {
      totalPrice = 3.80 * numFlower;
      totalPrice = totalPrice - (totalPrice * 0.15);
    } else {
      totalPrice = 3.80 * numFlower;
    }
  }
  if (flowerType === "Tulips") {
    if (numFlower > 80) {
      totalPrice = 2.80 * numFlower;
      totalPrice = totalPrice - (totalPrice * 0.15);
    } else {
      totalPrice = 2.80 * numFlower;
    }
  }
  if (flowerType === "Narcissus") {
    if (numFlower < 120) {
      totalPrice = 3.00 * numFlower;
      totalPrice = totalPrice + (totalPrice * 0.15);
    } else {
      totalPrice = 3.00 * numFlower;
    }
  }
  if (flowerType === "Gladiolus") {
    if (numFlower < 80) {
      totalPrice = 2.50 * numFlower;
      totalPrice = totalPrice + (totalPrice * 0.20);
    } else {
      totalPrice = 2.50 * numFlower;
    }
  }
  if (totalPrice > budget) {
    moneyNeeded = totalPrice - budget;
    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
  } else {
    moneyLeft = budget - totalPrice;
    console.log(`Hey, you have a great garden with ${numFlower} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
  }

}


main("Narcissus", 127, 2160);
