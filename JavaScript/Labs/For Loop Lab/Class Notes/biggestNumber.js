function main(n, listOfNums) {
  let bigNum = -Infinity;
  for (let i = 0; i < n; i++) {
    let numberInList = listOfNums.shift();
    if (numberInList > bigNum) {
      bigNum = numberInList;
    }
  }
  console.log(bigNum);
}

main(3, [40, 90, 50]);