function main(numbers) {
  let num = numbers.shift();
  while (num % 2 == 0) {
    num = numbers.shift();
  }
  console.log(num);
}
main([2, 4, 8, 3]);