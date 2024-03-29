// https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript
// * 8 kyu

const add = (a, b) => a + b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const mod = (a, b) => a % b;
const exponent = (a, b) => a ** b;
const subt = (a, b) => a - b;

// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript
// * 8 kyu

const monkeyCount = (n) => new Array(n).fill(0).map((item, i) => i + 1);

// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
// * 8 kyu

String.prototype.isUpperCase = function () {
  return this.toString() === this.toUpperCase();
}

// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript
// * 8 kyu

const feast = (beast, dish) => beast[0] === dish[0] && beast.at(-1) === dish.at(-1);

// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
// * 8 kyu

const well = (arr, numOfGoods = arr.filter((item) => item === 'good').length) => numOfGoods > 2 ? 'I smell a series!' : numOfGoods > 0 ? 'Publish!' : 'Fail!';

// https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4/train/javascript
// * 7 kyu

const makeValley = function makeSortedArr(arr) {
  const result = [[], []];
  arr.sort((a, b) => b - a);
  for (let i = 0, j = 0; i < arr.length; i += 1, j = i % 2) {
    result[j].push(arr[i]);
  }
  return [...result[0], ...result[1].reverse()];
};

// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
// * 7 kyu

const rowWeights = function calculateWeights(array) {
  const firstTeamWeight = array.reduce((res, item, i) => (i % 2 === 0 ? res + item : res), 0);
  const secondTeamWeight = array.reduce((res, item, i) => (i % 2 !== 0 ? res + item : res), 0);
  return [firstTeamWeight, secondTeamWeight];
};

// https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript
// * 7 kyu

const sumCubes = (n) => new Array(n < 0 ? 0 : n).fill(0).reduce((sum, _, i) => sum + (i + 1) ** 3, 0);

// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
// * 7 kyu

const vowelIndices = (word) => [...word.toLowerCase()].reduce((res, letter, i) => (['a', 'e', 'i', 'o', 'u', 'y'].includes(letter) ? (res.push(i + 1), res) : res), []);

// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/javascript
// * 6 kyu

const twistedSum = (n) => [...new Array(n).keys()].map((num) => num + 1).map((num) => (String(num).length > 1 ? [...String(num)] : num)).flat().reduce((sum, num) => sum + +num, 0);

// https://www.codewars.com/kata/64d482b76fad180017ecef0a/train/javascript
// * 6 kyu

function consecutiveNums(arr, groupLen) {
  if (groupLen === 1) return true;
  if (arr.length % groupLen !== 0) return false;
  const lastN = new Array(arr.length / groupLen).fill(undefined);
  const freeSpace = new Array(arr.length / groupLen).fill(groupLen);
  let totalSpace = arr.length;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length && totalSpace > 0; i += 1, totalSpace -= 1) {
    const freeArr = freeSpace.findIndex((space, j) => space > 0 && (arr[i] - lastN[j] === 1 || lastN[j] === undefined));
    if (freeArr === -1) return false;
    if (lastN[freeArr] === undefined || freeArr !== -1) lastN[freeArr] = arr[i], freeSpace[freeArr] -= 1;
    else return false;
  }
  return freeSpace.every((item) => item === 0);
}

// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript
// * 8 kyu

const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
const howMuchILoveYou = (nbPetals) => phrases[(nbPetals - 1) % 6];

// https://www.codewars.com/kata/5763bb0af716cad8fb000580/train/javascript
// * 8 kyu

const countSquares = (cuts) => cuts === 0 ? 1 : (cuts + 1) ** 3 - (cuts - 1) ** 3;

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
// * 8 kyu

const summation = (n) => n === 0 ? n : n + summation(n - 1);

// https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript
// * 8 kyu

const cubeChecker = (volume, side) => side > 0 && volume > 0 && volume === side ** 3;

// https://www.codewars.com/kata/5748a883eb737cab000022a6/train/javascript
// * 8 kyu

const cannonsReady = (gunners) => Object.values(gunners).every((phrase) => phrase === 'aye') ? 'Fire!' : 'Shiver me timbers!';

// https://www.codewars.com/kata/5bc73331797b005d18000255/train/javascript
// * 7 kyu

const legs = [['^', '^'], ['/\\', '/\\'], ['/╲', '╱\\'], ['╱╲', '╱╲']];
const drawSpider = (legSize, bodySize, mouth, eye) => `${legs[legSize - 1][0]}${'('.repeat(bodySize)}${eye.repeat(2 ** (bodySize - 1))}${mouth}${eye.repeat(2 ** (bodySize - 1))}${')'.repeat(bodySize)}${legs[legSize - 1][1]}`;

// https://www.codewars.com/kata/5a8bcd980025e99381000099/train/javascript
// * 7 kyu

const squareUp = (n) => new Array(n).fill(new Array(2).fill(0)).map(([zeros, nums], i) => [new Array(n - i - 1).fill(0), [...new Array(i + 1).keys()].map((_, index) => index + 1).reverse()]).flat();

// https://www.codewars.com/kata/62c93765cef6f10030dfa92b/train/javascript
// * 7 kyu

const solution = (start, finish) => finish - start < 4 ? finish - start : Math.floor((finish - start) / 3) + (finish - start) % 3;

// https://www.codewars.com/kata/659af96994b858db10e1675f/train/javascript
// * 6 kyu

const beginning = function findBeginning(xs) {
  let beginning;
  for (let i = 1; i < xs.length; i += 1) {
    beginning = +xs.slice(0, i);
    let next = beginning + 1;
    let flag = true;
    for (let j = i; j < xs.length; next += 1, j += String(next).length - (String(next).length - String(next - 1).length)) {
      if (next != xs.slice(j, j + String(next).length)) {
        flag = false;
        break;
      }
    }
    if (flag) return beginning;
    if (String(beginning).length > xs.length - String(beginning).length) break;
  }
  return +xs;
};

// https://www.codewars.com/kata/5539fecef69c483c5a000015/train/javascript
// * 6 kyu

const backwardsPrime = function generatePrimes(start, stop) {
  const primes = [];
  const allPrimes = new Set();

  const isPrime = function definePrime(n, nR) {
    if (n === nR) return false;
    const max = Math.ceil(Math.max(n, nR) ** 0.5);
    for (let i = 2; i <= max; i += 1) {
      if (n % i === 0 || (nR % i === 0 && i !== n && i !== nR)) {
        return false;
      }
    }
    allPrimes.add(n);
    allPrimes.add(nR);
    return true;
  };

  for (let i = start < 13 ? 13 : start; i <= stop; i += 1) {
    if (allPrimes.has(i)) {
      primes.push(i);
    } else if (isPrime(i, +String(i).split('').reverse().join(''))) primes.push(i);
  }

  return primes;
};

// https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript
// * 6 kyu

const whatCentury = function defineCentury(year) {
  const century = Math.floor((year - 1) / 100) + 1;
  const lastDigit = String(century).at(-1);
  const end = century < 21 ? 'th' : lastDigit === '1' ? 'st' : lastDigit === '2' ? 'nd' : lastDigit === '3' ? 'rd' : 'th';
  return `${century}${end}`;
};

// https://www.codewars.com/kata/5254bd1357d59fbbe90001ec/train/javascript
// * 6 kyu

const getScore = (n) => n === 1 ? 50 : getScore(n - 1) + 50 * n;

// https://www.codewars.com/kata/58e16de3a312d34d000000bd/train/javascript
// * 6 kyu

const rankings = function setRank(arr) {
  const rankMap = new Map([...arr].sort((a, b) => b - a).map((num, i) => [num, i + 1]));
  return arr.map((num) => rankMap.get(num));
};

// https://www.codewars.com/kata/5ae71f8c2c5061059e000044/train/javascript
// * 6 kyu

const findX = function findNumber(n) {
  const findSum = (m) => {
    let sum = 0;
    for (let i = 0; i <= m; i += 1) {
      sum += i;
    }
    return sum;
  };
  return n * (findSum(2 * n - 1) + findSum(n - 1) * 2);
};

// https://www.codewars.com/kata/59c3e819d751df54e9000098/train/javascript
// * 6 kyu

const getConsectiveItems = function calcConsectiveItems(items, key) {
  let result = 0;
  const regExp = new RegExp(`(${key})\\1*`, 'g');
  String(items).replace(regExp, (str) => (result = Math.max(result, str.length)));
  return result;
};

// https://www.codewars.com/kata/5ad1e412cc2be1dbfb000016/train/javascript
// * 6 kyu

const insertMissingLetters = function insertLetters(str) {
  const alphabet = new Array(26).fill(0).map((_, i) => String.fromCodePoint(i + 97));
  const missingLetters = alphabet.map((letter) => (!str.includes(letter) ? letter : ''));
  return str.split('').map((letter, i, arr) => i === arr.indexOf(letter) ? `${letter}${missingLetters.slice(alphabet.indexOf(letter)).join('').toUpperCase()}` : letter).join('');
};

// https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651/train/javascript
// * 6 kyu

const lastSurvivors = function findDuplicateLetters(str) {
  const alphabet = new Array(26).fill(0).map((_, i) => String.fromCodePoint(i + 97));
  while (/([a-z]).*\1/g.test(str)) {
    str = str.replace(/([a-z]).*\1/, (letters) => alphabet[(alphabet.indexOf(letters[0]) + 1) % 26] + letters.slice(1,-1));
  }
  return str;
};

// https://www.codewars.com/kata/587309155cfd6b9fb60000a0/train/javascript
// * 6 kyu

const money_value = (s) => parseFloat(s.replace(/[$,\s]/g, '')) || 0;

// https://www.codewars.com/kata/5886d65e427c27afeb0000c1/train/javascript
// * 6 kyu

const squareDigitsSequence = function findSequence(a0) {
  let n = 1;
  for (let visited = new Set([a0]), an = a0; ; n += 1) {
    an = String(an).split('').reduce((sum, num) => num ** 2 + sum, 0);
    if (visited.has(an)) break;
    visited.add(an);
  }
  return n + 1;
};

// https://www.codewars.com/kata/585cf93f6ad5e0d9bf000010/train/javascript
// * 6 kyu

const bowlingPins = (arr) => ['7 8 9 0', ' 4 5 6 ', '  2 3  ', '   1   '].map((item) => arr.length !== 0 ? item.replace(new RegExp(`${arr.map((item) => item === 10 ? 0 : item).join('|')}`, 'g'), ' ') : item).map((item) => item.replace(/[0-9]+/g, 'I')) .join('\n');

// https://www.codewars.com/kata/59f44c7bd4b36946fd000052/train/javascript
// * 6 kyu

const hist = function createHistogram(s) {
  const errors = 
    s.split('')
    .filter((letter) => 'uwxz'.includes(letter))
    .reduce((res, letter) => {
      if (!(letter in res)) res[letter] = 0;
      res[letter] += 1;
      return res;
    }, {});
  return Object.entries(errors)
    .sort(([type1],[type2]) => type1 < type2 ? -1 : 1)
    .map(([error, quantity]) => `${error}  ${quantity}${' '.repeat(6 - String(quantity).length)}${'*'.repeat(quantity)}`)
    .join('\r');
};

// https://www.codewars.com/kata/5819081d056d4bdd410004f8/train/javascript
// * 6 kyu

const countIf = (node, p) => (node?.data ? Number(p(node.data)) : 0) + (node?.next ? countIf(node.next, p) : 0);

// https://www.codewars.com/kata/583d10c03f02f41462000137/train/javascript
// * 6 kyu

const maxSum = (arr, range) => Math.max(...range.map(([start, end]) => arr.slice(start, end + 1).reduce((sum, item) => sum + item, 0)));

// https://www.codewars.com/kata/58cda88814e65627c5000045/train/javascript
// * 6 kyu

const expandedForm = function writeNumber(num) {
  const [int, float] = String(num).split('.');
  return `${int
    .split('')
    .map((d, i) => (+d === 0 ? '' : `${d}${'0'.repeat(int.length - i - 1)}`))
    .filter((d) => +d !== 0)
    .concat(
      float.map((d, i) => (+d === 0 ? '' : `${d}/${'1'.repeat(i + 1)}`))
    )
    .join(' + ')
  }`;
};

// https://www.codewars.com/kata/55031bba8cba40ada90011c4/train/javascript
// * 6 kyu

const isSumOfCubes = function findCubicNumbers(str) {
  const numbers = [...str.matchAll(/\d{1,3}/g)].map(([num]) => num).map((num) => +num).filter((num) => [...String(num)].reduce((sum, d) => sum + (+d) ** 3, 0) === +num);
  const numbersSum = numbers.length === 0 ? null : numbers.reduce((sum, num) => sum + +num, 0);
  return numbers.length === 0 ? 'Unlucky' : `${numbers.join(' ')} ${numbersSum} Lucky`;
};

// https://www.codewars.com/kata/58e09234ca6895c7b300008c/train/javascript
// * 6 kyu

const palindrome = function findPalindromeNumbers(num, s) {
  if (typeof num !== 'number' || typeof s !== 'number' || num < 0) return 'Not valid';
  const numbers = [];
  for (let i = num < 10 ? 10 : num; numbers.length !== s; i += 1) {
    const numLength = String(i).length;
    if (String(i).slice(0, Math.ceil(numLength / 2)) === String(i).slice(Math.floor(numLength / 2)).split('').reverse().join('')) numbers.push(i);
  }
  return numbers;
};

// https://www.codewars.com/kata/5a626fc7fd56cb63c300008c/train/javascript
// * 6 kyu

const uncollapse = (digits) => digits.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (str) => ` ${str} `).replace(/\s\s/g, ' ').trim();

// https://www.codewars.com/kata/55d17ddd6d7868493e000074/train/javascript
// * 7 kyu

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if (listA === null && listB === null) return null;
  const head = listA ?? listB;
  let listTail;
  for (listTail = head; listTail.next !== null; listTail = listTail.next) {}
  listTail.next = head === listA ? listB : listA;
  return head;
}
