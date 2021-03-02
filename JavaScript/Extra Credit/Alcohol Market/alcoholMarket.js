function main(usd, beerLiters, wineLiters, rakiaLiters, whiskeyLiters) {

  let rakia = usd / 2;
  let wine = rakia - (0.40 * rakia);
  let beer = rakia - (0.80 * rakia);
  let totalRakia = rakiaLiters * rakia;
  let totalWine = wineLiters * wine;
  let totalBeer = beerLiters * beer;
  let whiskey = whiskeyLiters * usd;
  let totalSpent = totalRakia + totalWine + totalBeer + whiskey;
  console.log(`${totalSpent.toFixed(2)}`);
}


main(50, 10, 3.5, 6.5, 1);