function main(inputNum) {
  let dupNum = inputNum;
  let special = true;
  while (dupNum != 0) {
    let digit = dupNum % 10;
    if (digit != 0) {
      if (inputNum % digit != 0) {
        special = false;
        break;
      }
    }
    dupNum = Math.floor(dupNum / 10);
  }
  if (special) {
    console.log(`${inputNum} is special`);
  } else {
    console.log(`${inputNum} is not special`);
  }
}
main(23);
main(204);