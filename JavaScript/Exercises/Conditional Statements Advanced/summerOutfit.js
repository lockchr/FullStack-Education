function main(deg, timeOfDay) {
  let outfit = "";
  let shoes = "";

  if (deg <= 10 || deg <= 18) {
    if (timeOfDay === "Morning") {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } if (timeOfDay === "Afternoon") {
      outfit = "Shrit";
      shoes = "Moccasins";
    } if (timeOfDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (deg > 18 && deg <= 24) {
    if (timeOfDay === "Morning") {
      outfit = "Shirt";
      shoes = "Moccasins";
    } if (timeOfDay === "Afternoon") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } if (timeOfDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (deg >= 25) {
    if (timeOfDay === "Morning") {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } if (timeOfDay === "Afternoon") {
      outfit = "SwimSuit";
      shoes = "Barefoot";
    } if (timeOfDay === "Evening") {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  }
  console.log(`It's ${deg} degrees, get your ${outfit} and ${shoes}.`);
}
