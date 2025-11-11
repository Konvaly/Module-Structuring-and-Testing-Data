function countChar(stringOfCharacters, findCharacter) {
  const arrToStr = stringOfCharacters.split("");

  const countCharInArr = arrToStr.filter((char) => char === findCharacter);

  return countCharInArr.length;
}

module.exports = countChar;
