function main(numbers) {
  let sum = 0;
  for (; ;) {
    let currNum = numbers.shift();
    if (currNum == 0) {
      break;
    }
    sum += currNum;
    console.log(`Sum = ${sum}`);
  }
  console.log("Good bye!");
}

main([5, 3, 2, 0]);