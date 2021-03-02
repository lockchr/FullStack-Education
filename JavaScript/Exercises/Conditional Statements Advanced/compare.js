function main(examHour, examMin, monHour, monMin) {
  let totalMinExam = examHour * 60 + examMin;
  let totalMinMon = monHour * 60 + monMin;
  let timeDifference = totalMinExam - totalMinMon;

  if (timeDifference > 0) {
    if (timeDifference > 30) {
      console.log("Early");
      if (Math.floor(timeDifference / 60) > 0) {
        let hours = Math.floor(timeDifference / 60);
        let minutes = timeDifference % 60;
        if (minutes < 10) {
          console.log(`${hours}:0${minutes} hours before the start`);
        } else {
          console.log(`${hours}:${minutes} hours before the start`);
        }
      } else {
        if (timeDifference < 10) {
          console.log(`0${timeDifference} minutes before the start`);
        } else {
          console.log(`${timeDifference} minutes before the start`);
        }
      }
    } else {
      console.log("On time");
      if (timeDifference < 10) {
        console.log(`0${timeDifference} minutes before the start`);
      } else {
        console.log(`${timeDifference} minutes before the start`);
      }
    }
  } else if (timeDifference < 0) {
    //late
    timeDifference = Math.abs(timeDifference);
    if (timeDifference > 30) {
      console.log("Late");
      if (Math.floor(timeDifference / 60) > 0) {
        let hours = Math.floor(timeDifference / 60);
        let minutes = timeDifference % 60;
        if (minutes < 10) {
          console.log(`${hours}:0${minutes} hours after the start`);
        } else {
          console.log(`${hours}:${minutes} hours after the start`);
        }
      } else {
        if (timeDifference < 10) {
          console.log(`0${timeDifference} minutes after the start`);
        } else {
          console.log(`${timeDifference} minutes after the start`);
        }
      }
    } else {
      console.log("On time");
      if (timeDifference < 10) {
        console.log(`0${timeDifference} minutes after the start`);
      } else {
        console.log(`${timeDifference} minutes after the start`);
      }
    }
  } else {
    console.log("On time");
  }
}