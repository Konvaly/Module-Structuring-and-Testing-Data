function repeat(str, count) {
  if (count === 0) {
    return "";
  }

  let repeatedStrCountTimes = "";

  let i = 0;
  while (i < count) {
    repeatedStrCountTimes += str;
    i++;
  }
  console.log(repeatedStrCountTimes);
  return repeatedStrCountTimes;
}

module.exports = repeat;
