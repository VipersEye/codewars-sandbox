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
