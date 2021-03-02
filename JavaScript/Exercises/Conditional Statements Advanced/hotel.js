function main(month, numOfNights) {
  let studioPrice = 0;
  let apartmentPrice = 0;
  if (month === "May" || month === "October") {
    studioPrice = 50 * numOfNights;
    apartmentPrice = 65 * numOfNights;
    if (numOfNights > 14) {
      apartmentPrice *= 0.9;
      studioPrice *= 0.7;
    } else if (numOfNights > 7) {
      studioPrice *= 0.95;
    }
  } else if (month === "June" || month === "September") {
    studioPrice = 75.2 * numOfNights;
    apartmentPrice = 68.7 * numOfNights;
    if (numOfNights > 14) {
      studioPrice *= 0.8;
      apartmentPrice *= 0.9;
    }
  } else {
    studioPrice = 76 * numOfNights;
    apartmentPrice = 77 * numOfNights;
    if (numOfNights > 14) {
      apartmentPrice *= 0.9;
    }
  }
  console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
main("May", 15);