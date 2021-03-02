function main(array) {
  let min = Infinity;
  let max = -Infinity;
  let currNum = array.shift();
  while (currNum != "End" && currNum != undefined) {
    if (currNum > max) {
      max = currNum;
    }
    if (currNum < min) {
      min = currNum;
    }
    currNum = array.shift();
  }
  console.log(`Min number: ${min}`);
  console.log(`Max number: ${max}`);
}
main([10, 20, 304, 0, 50, "End"]);