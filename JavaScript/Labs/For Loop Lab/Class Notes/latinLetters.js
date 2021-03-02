function main(lett1, lett2) {
  let start = lett1.charCodeAt(0);
  let end = lett2.charCodeAt(0);
  let output = "";
  for (let i = start; i <= end; i++) {
    output += String.fromCharCode(i) + " ";
  }
  console.log(output.trim());
}

main("A", "z");