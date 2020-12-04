

const checkForSpam = function (message) {
  const normalizedMessage = message.toLowerCase();
  //1-var
  const result = Boolean(
    normalizedMessage.includes('spam') || normalizedMessage.includes('sale'),
  );
  // 2-var
  //  const result =
  // normalizedMessage.includes('spam') || normalizedMessage.includes('sale')
  //   ? true
  //   : false;
  //3-var
  //   let result = false;
  //   if (normalizedMessage.includes('spam') || normalizedMessage.includes('sale')) {
  //     result = true;
  //   }
  return result;
};

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
