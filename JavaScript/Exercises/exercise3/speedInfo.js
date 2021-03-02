function main(speed) {
  if (speed <= 10) {
    console.log('slow');
  } else if (speed < 49.9) {
    console.log('average');
  } else if (speed < 149.9) {
    console.log('fast');
  } else if (speed < 999.9) {
    console.log('ultra fast');
  } else if (speed > 1000) {
    console.log('extremely fast');
  }
}