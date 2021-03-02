function main(inputNums) {
  while (true) {
    let input = inputNums.shift();
    if (input == 'End')
      break;
    let sum = 0;
    for (let num = Number(input); num > 0; num = Math.floor(num / 10))
      sum += num % 10;
    console.log(`Sum of digits: ${sum}`);
  }
  console.log('Goodbye');
}
main([157, 99, 5, 438, 'End']);