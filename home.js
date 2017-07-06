// School.where("name = ? AND college_id = ?", ["Engineering", User.find_by_id(2).college.id])
//
// Course.where("major_id = ?", User.find_by_id(2).major.id)
//
// Enrollment.where("user_id = ?", 2)

// [0-9]{3}\-[0-9]{2}\-[0-9]{4}

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

const findAlivest = (yearRanges) => {
  let freqs = {};
  let currentMax = 1;
  let mostLivedYears = [];
  yearRanges.forEach((yearRange) => {
    let years = enumerateRange(yearRange);
    years.forEach((year) => {
      freqs[year] = freqs[year] + 1 || 1;
      if(freqs[year] > currentMax){
        currentMax = freqs[year];
      }
    })
  })

  moveLivedYears = valueMatch(freqs, currentMax);

  return mostLivedYears;
}

const valueMatch = (obj, val) => {
  let arr = [];
  Object.keys(obj).forEach((key) => {
    if(obj[key] === val){
      returnArr.push(key);
    }
  })
  return arr;
}

const enumerateRange = (range) => {
  let arr = [];
  let current = range[0];
  while(current <= range[1]){
    arr.push(current);
    current += 1;
  }
  return arr;
}
