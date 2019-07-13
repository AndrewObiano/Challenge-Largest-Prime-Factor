exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  // do your work here
  let tempArr = [];

  // prime number checker
  function isPrime(num) {
    if (num <= 1) {
      // ignore 0 and 1
      return false;
    } else if (num <= 3) {
      // 2 and 3 are prime numbers
      return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
      // 2 or 3 div
      return false;
    }

    let i = 5;
    while (i * i <= num) {
      // check every odd number not divisible by 3 up until sqrt
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  } // end of prime number checker

  for (let i = 0; i < 7000; i++) {
    // put prime numbers only in the temp array
    // only did up to 7000 for sake of challenge
    if (isPrime(i) === true) {
      tempArr.push(i);
    }
  }

  for (let i = 0; i < tempArr.length; i++) {
    // check if prime is a factor
    if (n % tempArr[i] === 0) {
      primeNumber = tempArr[i];
    }
  }

  return primeNumber;
};
