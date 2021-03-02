function main(size) {
  for (let i = 1; i <= size; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
      stars += '*';
    }
    console.log(stars);
  }
}
main(5);
main(7);