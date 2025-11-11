function repeat(str, count) {
  if (count === 0) {
    return "";
  }
  if (count < 0) {
    return "Error! Negative counts are not valid!";
  }

  let repeatedStrCountTimes = "";

  let i = 0;
  while (i < count) {
    repeatedStrCountTimes += str;
    i++;
  }

  return repeatedStrCountTimes;
}

module.exports = repeat;
