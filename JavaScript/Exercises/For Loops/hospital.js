function main(time, days) {
  let treated = 0;
  let unTreated = 0;
  let doctors = 7;

  for (let i = 1; i <= time; i++) {
    let patients = days.shift();
    if (i % 3 === 0 && treated < unTreated) {
      doctors++;
      if (patients > doctors) {
        treated += doctors;
        unTreated += patients - doctors;
      } else {
        treated += patients;
      }
    } else if (patients > doctors) {
      treated += doctors;
      unTreated += patients - doctors;
    } else {
      treated += patients;
    }
  }
  console.log(`Treated patients: ${treated}.`);
  console.log(`Untreated patients: ${unTreated}.`);
}