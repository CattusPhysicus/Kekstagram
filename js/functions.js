const isStringShorter = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  for (let i = 1; i < string.length; i++) {
    if (string.at(i - 1) !== string.at(-i)) return false;
  }
  return true;
}

const getPositiveInteger = (parameter) => {
  let result = '';
  parameter = typeof parameter === 'number' ? String(parameter).replace('.', '') : parameter.replaceAll(' ', '');
  for (let char of parameter) {
    if (isFinite(char)) {
      result += char;
    }
  }
  return parseInt(result);
}


