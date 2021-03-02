function main(side1, side2, side3) {
  if (side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2) {
    console.log("Valid Triangle");
  } else if (side1 >= side2 + side3 || side2 >= side1 + side3 || side3 >= side1 + side2) {
    console.log("Invalid Triangle");
  }

}

main(8, 4, 3);