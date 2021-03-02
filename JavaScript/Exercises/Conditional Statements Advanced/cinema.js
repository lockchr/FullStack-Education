// function main(screening, rows, columns) {
//   let Premiere = 12.00;
//   let Normal = 7.50;
//   let Discount = 5.00;
//   let totalPremiere = Premiere * rows * columns;
//   let totalNormal = Normal * rows * columns;
//   let totalDiscount = Discount * rows * columns;

//   if (screening === "Premiere") {
//     console.log(`${totalPremiere.toFixed(2)} leva`);
//   } else if (screening === "Normal") {
//     console.log(`${totalNormal.toFixed(2)} leva`);
//   } else if (screening === "Discount") {
//     console.log(`${totalDiscount.toFixed(2)} leva`);
//   }
// }


// let totalProfit = 0;


function main(screening, rows, columns) {
  let totalProfit;

  switch (screening) {
    case "Premiere":
      totalProfit = 12.00 * rows * columns;
      break;
    case "Normal":
      totalProfit = 7.50 * rows * columns;
      break;
    case "Discount":
      totalProfit = 5.00 * rows * columns;
      break;
  }
  console.log(`${totalProfit.toFixed(2)} leva`);
}

main("Normal", 21, 13);