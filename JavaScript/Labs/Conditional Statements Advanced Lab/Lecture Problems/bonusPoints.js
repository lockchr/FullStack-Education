function main(points) {
  if (points >= 0 && points <= 3) {
    point += 5;
  } else if (points >= 4 && points <= 6) {
    points += 15;
  } else if (points >= 7 && points <= 9) {
    points += 20;
  }
  console.log(points);
}

main(8);