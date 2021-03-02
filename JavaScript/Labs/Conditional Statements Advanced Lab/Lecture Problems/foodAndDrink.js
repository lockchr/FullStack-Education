function main(sus) {
  if (sus === "curry" || sus === "noodles" || sus === "sushi" || sus || "spaghetti") {
    console.log("food");
  } else if (sus === "tea" || sus || "water" || sus === "coffee") {
    console.log("drink");
  } else {
    console.log("unknown");
  }
}