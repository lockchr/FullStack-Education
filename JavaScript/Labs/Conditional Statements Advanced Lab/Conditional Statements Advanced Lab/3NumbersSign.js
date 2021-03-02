function main(n1, n2, n3) {
  if (n1 === 0 || n2 === 0 || n3 === 0) {
    console.log("Zero");
  } else {
    let negSign = 0;
    if (n1 < 0) negSign++;
    if (n2 < 0) negSign++;
    if (n3 < 0) negSign++;
    if (negSign % 2 === 0) {
      console.log("Positive");
    } else {
      console.log("Negative");
    }
  }
}