function main(type, holidays, home) {
  let totalgames = 0;
  let holidaygames = holidays * (2 / 3);

  normalgames = (48 - home) * (3 / 4);
  totalgames = holidaygames + home + normalgames;
  if (type == "leap") {
    totalgames = totalgames * 1.15;
  }
  console.log(Math.trunc(totalgames));
}

main("leap", 0, 1);