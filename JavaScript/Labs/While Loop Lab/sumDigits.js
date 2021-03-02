function main(num) {
  let sum = 0;
  num = Math.abs(num);
  while (num > 0) {
    sum += num % 10;
    num = parseInt(num / 10);
  }
  console.log(sum);
}
