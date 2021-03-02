function main(recordInSeconds, distanceInMeters, timeInSecondsPerMeter) {

  let ivansTimeInSeconds = distanceInMeters * timeInSecondsPerMeter;

  let slowDownInSeconds = parseInt(distanceInMeters / 15) * 12.5;

  let ivansTotalTimeWithResistance = ivansTimeInSeconds + slowDownInSeconds;

  let timeSlower = ivansTotalTimeWithResistance - recordInSeconds;

  if (ivansTotalTimeWithResistance > recordInSeconds) {
    console.log(`No, he failed! He was ${timeSlower.toFixed(2)} seconds slower.`);
  } else {
    console.log(`Yes, he succeeded! The new world record is ${ivansTotalTimeWithResistance.toFixed(2)} seconds.`);
  }
}