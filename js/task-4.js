const lengthString = 40;

const formatString = function (string) {
  let arrayString = string.split('');
  if (arrayString.length > lengthString) {
    let newArray = arrayString.splice(0, lengthString);
    newArray.splice(lengthString, 0, '...');
    // newArray.push('...');
    const newString = newArray.join('');

    return newString;
  } else {
    return string;
  }
};

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка
