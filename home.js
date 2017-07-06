// School.where("name = ? AND college_id = ?", ["Engineering", User.find_by_id(2).college.id])
//
// Course.where("major_id = ?", User.find_by_id(2).major.id)
//
// Enrollment.where("user_id = ?", 2)

const smallestPowerOf2 = (num) => {
  let currentPow = 2
  while(currentPow < num){
    currentPow *=2
  }
  return currentPow/2
}

const clockHandAngle = (time) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return Math.abs(minutesToAngle(minutes) - hoursToAngle(hours));

}

const minutesToAngle = (minutes) => {
  return minutes * 6;
}

const hoursToAngle = (hours) => {
  return hours * 30;
}

const findAlivest = (dateRanges) => {
  let freqs = {};
  let currentMax = [];
  currentMax = [dateRanges[0][0], 1];
  dateRanges.forEach((dateRange) => {
    let dates = enumerateDates(dateRange);
    dates.forEach((date) => {
      freqs[date] = freqs[date] + 1 || 1;
      if(freqs[date] > currentMax[1]){
        currentMax[0] = date;
        currentMax[1] = freqs[date];
      }
    })
  })
  return currentMax[0]
}

const enumerateDates = (dateRange) => {
  let arr = [];
  let current = dateRange[0];
  while(current <= dateRange[1]){
    arr.push(current);
    current += 1;
  }
  return arr
}
