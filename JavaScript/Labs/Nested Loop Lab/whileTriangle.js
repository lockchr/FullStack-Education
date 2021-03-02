function main(size) {
  let row = 1;
  while (row <= size) {
    let stars = '';
    let col = 0;
    while (col++ < row)
      stars += '*';
    console.log(stars);
    row++;

  }
}
main(5);
