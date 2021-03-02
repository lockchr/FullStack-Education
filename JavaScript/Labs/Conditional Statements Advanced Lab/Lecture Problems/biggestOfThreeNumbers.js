function main(n1, n2, n3) {
  if (n1 > n2) {
    if (n1 > n3) {
      console.log(n1);
    } else {
      console.log(n3);
    }
  } else {
    if (n2 > n3) {
      console.log(n2);
    } else {
      console.log(n3);
    }
  }
}