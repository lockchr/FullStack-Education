function main(favorite, bookList) {

  while (true) {
    let currBook = bookList.shift();
    if (currBook == undefined) {
      break;
    } else if (currBook == favorite) {
      console.log(`Book found!`);
      break;
    } else {
      console.log(`Invalid book: ${currBook}`);
    }
  }
}

main("Alice in Wonderland", ["Winnie the Pooh", "Alice in Wonderland"]);