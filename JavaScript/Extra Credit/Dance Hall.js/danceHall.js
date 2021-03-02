function main(l, w, a) {
  let sizeDanceHall = (l * 100) * (w * 100);
  let wardrobeSize = (a * 100) * (a * 100);
  let benchSize = sizeDanceHall / 10;
  let freeSpaceInHall = sizeDanceHall - wardrobeSize - benchSize;
  let numberOfDancers = freeSpaceInHall / (40 + 7000);
  let roundDown = Math.floor(numberOfDancers);

  console.log(roundDown);
}

main(40, 32, 1);












