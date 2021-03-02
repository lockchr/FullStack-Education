function main(bottles, amountDishes) {
  let detergent = bottles * 750;
  let dish = amountDishes.shift();
  let plates = 0;
  let pots = 0;
  let load = 1;

  while (dish != "End") {
    if (load % 3 === 0) {
      pots += dish;
      detergent -= dish * 15;
    } else {
      plates += dish;
      detergent -= dish * 5;
    }
    dish = amountDishes.shift();
    load++;
  }
  if (detergent >= 0) {
    console.log(`Detergent was enough!`);
    console.log(`${plates} plates and ${pots} pots were washed.`);
    console.log(`Leftover detergent ${detergent} ml`);
  } else {
    console.log(`Not enough detergent, ${detergent} ml more necessary!`);
  }
}