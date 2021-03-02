function main(n, numList) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    let currNum = numList.shift();
    if (currNum < min) {
      min = currNum;
    } else if (currNum > max) {
      max = currNum;
    }
  }
  console.log(`Min number: ${min}`);
  console.log(`Max number: ${max}`);
}

main(4, [2, 8, 0, 1]);