function repeat(str, count) {
  let repeatedStrCountTimes = "";

  let i = 0;
  while (i < count) {
    repeatedStrCountTimes += str;
    i++;
  }
  return repeatedStrCountTimes;
}

module.exports = repeat;
