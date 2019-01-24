/****************************************************************************************************************** */
// only square
function checkForSum(a) {
  var m = a.length;
  var n = a[0].length;
  for (var i = 0; i < m - 1; i++) {
    for (var j = 0; j < n - 1; j++) {
      if (!sum(a[i][j], a[i][j + 1], a[i + 1][j], a[i + 1][j + 1])) {
        return true;
      }
    }
  }
  return false;
}
/****************************************************************************************************************** */
function sum(x, y, p, q) {
  return x + y + p + q;
}
/******************************************************************************************************************** */
function add(param1, param2) {
  return param1 + param2;
}
/********************************************************************************************************************* */
function centuryFromYear(year) {
  return Math.ceil(year / 100);
}
/********************************************************************************************************************* */
function checkPalindrome(inputString) {
  return inputString === inputString.split('').reverse().join('')
}
/********************************************************************************************************************* */
function adjacentElementsProduct(inputArray) {
  var arr = [];
  for (var i = 0; i < inputArray.length - 1; i++) {
    arr.push(inputArray[i] * inputArray[i + 1]);
  }
  return Math.max.apply(null, arr)
}
/********************************************************************************************************************* */
function shapeArea(n) {
  return Math.pow(n, 2) + Math.pow(n - 1, 2)
}
/********************************************************************************************************************* */
function makeArrayConsecutive2(statues) {
  statues.sort((a, b) => a - b)
  return (statues[statues.length - 1] - statues[0] + 1) - statues.length
}
/********************************************************************************************************************* */
function almostIncreasingSequence(sequence) {
  var c = 0;
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      c++;
      if (c > 1) return false; // check for same number not repeated more than twice consequintely
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
    }
  }
  return true;
}
/********************************************************************************************************************* */
function matrixElementsSum(matrix) {
  var grossPrice = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        grossPrice += matrix[i][j];
      } else {
        if (matrix[i - 1][j] === 0) matrix[i][j] = 0;
        grossPrice += matrix[i][j];
      }
    }
  }
  return grossPrice;
}
/********************************************************************************************************************* */
function allLongestStrings(inputArray) {
  var arr = inputArray.map(x => x.length);
  var maxLength = Math.max.apply(null, arr);
  var resultArr = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === maxLength) {
      resultArr.push(inputArray[i]);
    }
  }
  return resultArr;
}
/********************************************************************************************************************* */
function commonCharacterCount(s1, s2) {
  const a1 = s1.split('');
  const a2 = s2.split('');
  let found = 0;
  for (let i = 0; i < a1.length; i++) {
    if (a2.indexOf(a1[i]) !== -1) {
      found++;
      a2.splice(a2.indexOf(a1[i]), 1)
    }
  }
  return found;
}
/********************************************************************************************************************* */
function isLucky(n) {
  return n.toString().slice(0, n.toString().length / 2).split('').map(x => +x).reduce((a, c) => a + c) === n.toString().slice(n.toString().length / 2).split('').map(x => +x).reduce((a, c) => a + c)
}
/********************************************************************************************************************* */
function sortByHeight(a) {
  let k = 0;
  var tempArr = a.slice();
  var resultArr = tempArr.sort((a, b) => a - b).filter(x => x > -1)
  for (var i in a) {
    if (a[i] !== -1) {
      a[i] = resultArr[k];
      k++
    }
  }
  return a;
}
/********************************************************************************************************************* */
function alternatingSums(a) {
  let a1 = 0;
  let a2 = 0
  for (let i in a) {
    if (!(i % 2)) {
      a1 += a[i]
    } else {
      a2 += a[i]
    }
  }
  return [a1, a2];
}
/********************************************************************************************************************* */
function addBorder(picture) {
  let arr = [""];
  for (let i = 0; i < picture[0].length + 2; i++) {
    arr[0] += "*";
  }
  for (let j = 0; j < picture.length; j++) {
    arr.push("*");
    for (let k = 0; k < picture[j].length; k++) {
      arr[j + 1] += picture[j][k];
    }
    arr[j + 1] += "*";
  }
  arr.push(arr[0])
  return arr;
}
/********************************************************************************************************************* */
function areSimilar(a, b) {
  var diff = 0;
  var A = [];
  var B = [];
  if (a.join() === b.join()) {
    return true;
  }
  for (i in a) {
    if (a[i] !== b[i]) {
      diff++
      A.push(a[i]);
      B.push(b[i]);
    }
    if (diff > 2) {
      return false
    }
  }
  if (A.reverse().join() === B.join()) {
    return true;
  } else {
    return false;
  }
}
/********************************************************************************************************************* */
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft === friendsLeft) {
    return yourRight === friendsRight
  }
  if (yourLeft === friendsRight) {
    return yourRight === friendsLeft
  }
  return false;
}
/********************************************************************************************************************* */
function arrayMaximalAdjacentDifference(inputArray) {
  const diffArr = [];
  for (var i = 0; i < inputArray.length - 1; i++) {
    diffArr.push(Math.abs(inputArray[i + 1] - inputArray[i]))
  }
  return Math.max.apply(null, diffArr)
}
/********************************************************************************************************************* */
function isIPv4Address(inputString) {
  let arr = inputString.split('.')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      return false;
    }
  }
  arr = arr.map(x => +x);
  for (i = 0; i < arr.length; i++) {
    if (Number.isNaN(arr[i])) return false;
  }
  if (arr.length !== 4) {
    return false;
  }
  const resultArr = arr.filter(x => x > 255)
  return !resultArr.length;
}
/********************************************************************************************************************* */
function addTwoDigits(n) {
  return n.toString().split('').map(x => +x).reduce((a, c) => a + c, 0)
}
/********************************************************************************************************************* */
function largestNumber(n) {
  return Math.pow(10, n) - 1;
}
/********************************************************************************************************************* */
function candies(n, m) {
  return m - (m % n)
}
/********************************************************************************************************************* */
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) inputArray[i] = substitutionElem;
  }
  return inputArray;
}
/********************************************************************************************************************* */
function evenDigitsOnly(n) {
  const arr = [...n.toString()].map(x => +x);
  for (let i in arr) {
    if (arr[i] % 2) {
      return false;
    }
  }
  return true;
}
/********************************************************************************************************************* */
function simpleArraySum(arr) {
  return arr.reduce((a, c) => a + c, 0)
}
/********************************************************************************************************************* */
function avoidObstacles(inputArray) {
  inputArray.sort((a, b) => a - b);
  var step = 1,
    index = 0,
    bool = true;
  while (bool) {
    index += step
    if (index > inputArray[inputArray.length - 1]) return step;
    for (let e of inputArray) {
      if (e === index) {
        step += 1;
        index = 0;
        break;
      }
    }
  }
}
/********************************************************************************************************************* */
function avoidObstacles(arr) {
  for (var n = 1; ; n++)
    if (arr.every(x => x % n)) return n;
}
/********************************************************************************************************************* */
function arrayChange(inputArray) {
  let step = 0
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      step += (-inputArray[i] + inputArray[i - 1] + 1);
      inputArray[i] = inputArray[i - 1] + 1;
    }
  }
  return step;
}
/********************************************************************************************************************* */
function variableName(name) {
  for (var e of name) {
    if (!('a'.charCodeAt(0) <= e.charCodeAt('0') && 'z'.charCodeAt(0) >= e.charCodeAt('0') || ('A'.charCodeAt(0) <= e.charCodeAt('0') && 'Z'.charCodeAt(0) >= e.charCodeAt('0')) || '_'.charCodeAt(0) === e.charCodeAt('0') || '0'.charCodeAt(0) <= e.charCodeAt(0) && '9'.charCodeAt(0) >= e.charCodeAt(0))) {
      return false;
    }
  }
  if ('0'.charCodeAt(0) <= name[0].charCodeAt(0) && '9'.charCodeAt(0) >= name[0].charCodeAt(0)) {
    return false;
  }
  return true;
}
/********************************************************************************************************************* */
function alphabeticShift(inputString) {
  var result = '',
    charCode = 0;
  for (var e of inputString) {
    if (e !== 'z') {
      charCode = e.charCodeAt() + 1;
      result += String.fromCharCode(charCode);
    } else {
      result += 'a'
    }
  }
  return result;
}
/********************************************************************************************************************* */
function chessBoardCellColor(cell1, cell2) {
  var charDiff = Math.abs(cell1.charCodeAt() - cell2.charCodeAt()) % 2;
  var numDiff = Math.abs(cell1.charCodeAt(1) - cell2.charCodeAt(1)) % 2;
  if (charDiff) {
    return !!numDiff;
  } else {
    return !numDiff
  }
}
/********************************************************************************************************************* */
function circleOfNumbers(n, firstNumber) {
  return firstNumber < n / 2 ? firstNumber + (n / 2) : firstNumber - (n / 2);
}
/********************************************************************************************************************* */
function depositProfit(deposit, rate, threshold) {
  year = 0
  while (deposit < threshold) {
    deposit += (deposit * rate) / 100;
    year++;
  }
  return year;
}
/********************************************************************************************************************* */
function extractEachKth(inputArray, k) {
  const tempArr = [];
  for (let i = 0; i < inputArray.length; i++) {
    if ((i + 1) % k !== 0) tempArr.push(inputArray[i])
  }
  return tempArr
}
/********************************************************************************************************************* */
function extractEachKth(inputArray, k) {
  return inputArray.filter((e, i) => (i + 1) % k)
}
/********************************************************************************************************************* */
function firstDigit(inputString) {
  for (var i = 0; i < inputString.length; i++) {
    if (/\d/.test(inputString[i])) return inputString[i];
  }
}
/********************************************************************************************************************* */
function firstDigit(inputString) {
  return inputString.match(/\d/)[0];
}
/********************************************************************************************************************* */
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  var currentHeight = 0;
  var day = 0;
  while (currentHeight < desiredHeight) {
    currentHeight += upSpeed;
    if (currentHeight < desiredHeight) {
      currentHeight -= downSpeed;
    }
    day++
  }
  return day;
}
/********************************************************************************************************************* */
function differentSymbolsNaive(s) {
  var str = '';
  for (var i = 0; i < s.length; i++) {
    if (str.indexOf(s[i]) === -1) {
      str += s[i];
    }
  }
  return str.length;
}
/********************************************************************************************************************* */
function differentSymbolsNaive(s) {
  return new Set(s).size;
}
/********************************************************************************************************************* */
function isDigit(symbol) {
  return /\d+/.test(symbol)
}
/********************************************************************************************************************* */
function isBeautifulString(inputString) {
  var array = new Array(26).fill(0);
  for (var i = 0; i < inputString.length; i++) {
    array[inputString[i].charCodeAt() - 97]++;
  }

  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      return false;
    }
  }
  return true;
}
/********************************************************************************************************************* */
function findEmailDomain(address) {
  return address.slice(address.lastIndexOf('@') + 1)
}
/********************************************************************************************************************* */
function arrayMaxConsecutiveSum(inputArray, k) {
  var max = 0;
  for (var i = 0; i < inputArray.length - k + 1; i++) {
    var sum = 0;
    for (var j = 0; j < k; j++) {
      sum += inputArray[i + j];
    }
    max = Math.max(max, sum);
  }
  return max;
}
/********************************************************************************************************************* */
function longestWord(text) {
  return text.match(/[A-Za-z]+/g).sort((a, b) => b.length > a.length)[0]
}
/********************************************************************************************************************* */
function validTime(time) {
  var arr = time.split(":");
  return arr[0] < 24 && arr[1] < 60;
}
/********************************************************************************************************************* */
function sumUpNumbers(inputString) {
  var arr = inputString.match(/\d+/g)
  var sum = 0;
  if (arr !== null) {
    arr = arr.map(x => +x);
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }
  return sum;
}
/********************************************************************************************************************* */
function lineEncoding(s) {
  return s.replace(/(.)\1*/g, (e, i) => i == e ? i : e.length + i)
}
/********************************************************************************************************************* */
function deleteDigit(n) {
  s = n.toString();
  res = '0'
  for (var i = 0; i < s.length; i++) {
    x = s.slice(0, i) + s.slice(i + 1, s.length);
    if (x > res) res = x;
  }
  return Number(res);
}
/********************************************************************************************************************* */
function deleteDigit(n) {
  s = n.toString();
  arr = [];
  for (var i = 0; i < s.length; i++) {
    x = s.slice(0, i) + s.slice(i + 1, s.length);
    arr.push(x)
  }
  return Math.max.apply(null, arr)
}
/********************************************************************************************************************* */
function longestDigitsPrefix(inputString) {
  return inputString.match(/^\d*/)[0]
}
/********************************************************************************************************************* */
function bishopAndPawn(bishop, pawn) {
  if (bishop.charCodeAt() === pawn.charCodeAt()) {
    return false;
  }
  var charDiff = Math.abs(bishop.charCodeAt() - pawn.charCodeAt()) % 2;
  var numDiff = Math.abs(bishop.charCodeAt(1) - pawn.charCodeAt(1)) % 2;
  if (charDiff) {
    return !!numDiff;
  } else {
    return !numDiff
  }
}
/********************************************************************************************************************* */
function bishopAndPawn(bishop, pawn) {
  return Math.abs(bishop[0].charCodeAt() - pawn[0].charCodeAt()) === Math.abs(bishop[1] - pawn[1])
}
/********************************************************************************************************************* */
function messageFromBinaryCode(code) {
  let s = "";
  for (let i = 0; i <= code.length - 8; i += 8) {
    s += String.fromCharCode(parseInt(code.substring(i, i + 8), 2));
  }
  return s;
}
/********************************************************************************************************************* */
function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor
}
/********************************************************************************************************************* */
function lateRide(n) {
  return Math.floor(n / 60).toString().split('').map(x => +x).reduce((a, c) => a + c) +
    +(n % 60).toString().split('').map(x => +x).reduce((a, c) => a + c);
}
/********************************************************************************************************************* */
function reachNextLevel(experience, threshold, reward) {
  return experience + reward >= threshold;
}
/********************************************************************************************************************* */
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row)
}
/********************************************************************************************************************* */
var str = '';

function strangeCode(s, e) {
  if (s >= e - 1) {
    return str;
  }
  s++;
  e--
  str += str ? str[str.length - 1] === 'a' ? 'b' : 'a' : 'a';
  return strangeCode(s, e);
}
/********************************************************************************************************************* */
function evenDigitsOnly(n) {
  if (n === 0) {
    return true;
  }
  if (n % 2 !== 0) {
    return false;
  }
  return n.toString().split('').map(x => +x).every(x => x % 2 === 0);
}
/********************************************************************************************************************* */
function splitAddress(address) {
  arr = address.match(/\w+/g)
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'com') {
      arr.splice(i, 1)
    }
  }
  return arr;
}
/********************************************************************************************************************* */
function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (weight1 > maxW && weight2 > maxW) {
    return 0;
  }
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  }
  if (value1 > value2) {
    return weight1 <= maxW ? value1 : value2;
  } else {
    return weight2 <= maxW ? value2 : value1;
  }
}
/********************************************************************************************************************* */
function digitDegree(n, c = 0) {
  n = n.toString()
  if (n.length == 1) return c
  return digitDegree(n.split('').reduce((p, c) => +p + +c), ++c)
}
/********************************************************************************************************************* */
function replaceFirstDigitRegExp(input) {
  return input.replace(/\d/, '#')
}
/********************************************************************************************************************* */
function isTandemRepeat(inputString) {
  return inputString.slice(0, inputString.length / 2) === inputString.slice(inputString.length / 2)
}
/********************************************************************************************************************* */
function firstReverseTry(arr) {
  if (arr.length !== 0) {
    [arr[arr.length - 1], arr[0]] = [arr[0], arr[arr.length - 1]]
  }
  return arr;
}
/********************************************************************************************************************* */
function divideAsLongAsPossible(n, d) {
  while (n % d === 0) {
    n /= d;
  }
  return n;
}
/********************************************************************************************************************* */
function caseUnification(inputString) {
  var arr1 = inputString.match(/[A-Z]/g)
  var arr2 = inputString.match(/[a-z]/g)
  if (arr2 === null) return inputString.toUpperCase();
  if (arr1 === null) return inputString.toLowerCase();
  if (arr1.length > arr2.length) {
    return inputString.toUpperCase();
  } else {
    return inputString.toLowerCase();
  }
}
/********************************************************************************************************************* */
function firstDigit(inputString) {
  return /[0-9]/.exec(inputString)[0];
}
/********************************************************************************************************************* */
function digitsProduct(product) {
  if (product == 0) return 10;
  if (product == 1) return 1;
  var divisor = 10,
    power = 1,
    result = 0;
  while (product > 1) {
    if (--divisor == 1) return -1;
    while (product % divisor == 0) {
      product /= divisor;
      result += divisor * power;
      power *= 10;
    }
  }
  return result;
}
/********************************************************************************************************************* */
function zFunctionNaive(s) {
  var result = [];
  for (var i = 0; i < s.length; i++) {
    result.push(0);
    for (var j = i; j < s.length; j++) {
      if (s[j] === s[result[i]]) {
        result[i]++;
      } else {
        break;
      }
    }
  }
  return result;
}
/********************************************************************************************************************* */
function absoluteValuesSumMinimization(A) {
  return A[Math.ceil(A.length / 2) - 1];
}
/********************************************************************************************************************* */
function fibonacciNumber(n) {
  var fibs = [0, 1];
  for (var i = 2; i <= n; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }
  return fibs.pop();
}
/********************************************************************************************************************* */
function sumOfDivisors(n) {
  arr = [];
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i)
  }
  return arr.reduce((a, c) => a + c)
}
/********************************************************************************************************************* */
function oneTwoMany(n) {
  if (n === 1) return "one";
  if (n === 2) return "two";
  return "many";
}
/********************************************************************************************************************* */
function isIncreasingDigitsSequence(n) {
  n = n.toString()
  for (var i = 0; i < n.length - 1; i++) {
    if (n[i + 1] <= n[i]) return false
  }
  return true;
}
/********************************************************************************************************************* */
function alphabetSubsequence(s) {
  return s.slice(1).split``.every((e, i) => e > s[i]);
}
/********************************************************************************************************************* */
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
/********************************************************************************************************************* */
function arePrizesOK(first, second, third) {
  return first >= second && second >= third
}
/********************************************************************************************************************* */
function leapYear(year) {
  return year % 4 == 0 && year % 100 || year % 400 == 0
}
/********************************************************************************************************************* */
function factorization(z) {
  let factorArr = [];
  let div = 2;
  let factorObj = {};
  while (z > 1) {
    if ((z % div) === 0) {
      factorArr.push(div);
      z = z / div;
    } else {
      div++;
    }
  }

  factorArr.forEach((e) => {
    factorObj[e] = (factorObj[e] || 0) + 1
  })
  return factorObj;
}
/********************************************************************************************************************* */
function maxYogurtCup(n, k, arr) {
  arr = arr.sort((a, b) => a - b);
  let consume = 0;
  day = 1;
  cd = k;
  for (let i = 0; i < n; i++) {
    if (arr[i] >= day) {
      cd--;
      consume += 1;
      if (cd == 0) {
        cd = k;
        day += 1;
      }
    }
  }
  return consume;
}
/********************************************************************************************************************* */
(function outTime() {
  var json = [{
    "value": 30600,
    "text": "Full-Day"
  },
  {
    "value": 16200,
    "text": "Half-Day"
  },
  {
    "value": 41400,
    "text": "Comp-off"
  },
  {
    "value": 55800,
    "text": "Full-day-Comp-off"
  }
  ];
  currentIndex = 0;
  var $wrapperDiv;

  $(function () {
    const wrapper = document.querySelector('#itc_wrapper');

    var select = $("<select></select>").attr("id", "state").attr("name", "state").css({
      float: 'left',
      margin: '0px 10px'
    })
    $.each(json, function (index, json) {
      select.append($("<option></option>").attr("value", json.value).text(json.text));
    });
    $wrapperDiv = $('<div>').attr('id', 'wrapperDiv').appendTo(wrapper);
    $wrapperDiv.empty();
    $text1 = $('<div>').html('<span>Time left for</span>').appendTo($wrapperDiv).css({
      float: 'left',
      verticalAlign: 'middle',
      fontSize: '20px',
      margin: '6px 0px',
      color: 'white'
    });
    $wrapperDiv.append(select).css({
      position: 'relative',
      padding: '20px',
      color: 'white'
    });
    var timeRemain = $('<div>', {
      id: 'timeLeft'
    }).css({
      float: 'left',
      verticalAlign: 'middle',
      fontSize: '20px',
      margin: '6px 10px',
      color: 'white'
    })
    $wrapperDiv.append(timeRemain);
    var text2 = $('<div>').html('<span>Out-time:</span>').css({
      float: 'left',
      verticalAlign: 'middle',
      fontSize: '20px',
      margin: '6px 8px',
      color: 'white'
    })
    $wrapperDiv.append(text2);
    var outTime = $('<div>').attr('id', 'userOutTime').css({
      verticalAlign: 'middle',
      fontSize: '20px',
      margin: '6px 0px',
      color: 'white'
    });
    $wrapperDiv.append(outTime);
    $('#state').off().on('change', onChange);
  })

  function onChange() {
    var newValue = $(this).val();
    for (let i = 0; i < json.length; i++) {
      if (json[i].value === Number(newValue)) {
        currentIndex = i;
        break;
      }
    }
  }
  const targetNode = document.querySelector('.total_time');
  const observerOptions = {
    childList: true,
    attributes: true,
    subtree: true
  }
  const obsever = new MutationObserver(getOutTime);
  obsever.observe(targetNode, observerOptions);

  function getOutTime(mutationList, observer) {
    mutationList.forEach((mutation) => {
      switch (mutation.type) {
        case 'childList':
          getTime(mutation.target.innerText);
          break;
        case 'attributes':
          break;
        default:
          break;
      }
    });
  }

  function getTime(time_elapsed) {
    var timeLeft = json[currentIndex].value - timeInSecond(time_elapsed);
    var userOutTime = timeLeft + timeInSecond(getCurrentTime());
    $('#timeLeft').html(`<span>${timeCalculate(timeLeft)}</span>`);
    $('#userOutTime').html(`<span>${timeCalculate(userOutTime, true)}</span>`)
  }

  function getCurrentTime() {
    var date = new Date();
    const [h, m, s] = [date.getHours() < 10 ? "0" + date.getHours() : date.getHours(), date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(), date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()];
    return [h, m, s].join(':');
  };

  function timeInSecond(t) {
    const [hr, mt, sec] = t.split(':').map(x => +x);
    return timeInSec = hr * 3600 + mt * 60 + sec;
  }

  function timeCalculate(time, bool = false) {
    let [a, b, c] = [Math.floor(time / 3600) % 24, Math.floor(Math.floor(time % 3600) / 60), Math.floor(Math.floor(Math.floor(time % 3600) % 60))];
    [a, b, c] = [a < 0 ? 0 : a, b < 0 ? 0 : b, c < 0 ? 0 : c];
    var outState = 'AM';
    if (bool) {
      if (a >= 12) {
        if (a !== 12) a = a % 12;
        outState = 'PM';
      }
      if (a == 0) {
        a = 12;
      }
    }
    const [lhr, lmt, lsec] = [a < 10 ? '0' + a : a, b < 10 ? '0' + b : b, c < 10 ? '0' + c : c];
    const tempArr = [lhr, lmt, lsec].map(x => x.toString());
    const userOutTime = tempArr.join(":");
    if (bool) {
      return `${userOutTime} ${outState}`;
    }
    return userOutTime;
  }
})()
/********************************************************************************************************************* */
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
/********************************************************************************************************************* */
var reverse = function (x) {
  var isNegative = x < 0;
  x = Number([...String(Math.abs(x))].reverse().join(''));
  if (x > 0x7FFFFFFF) {
    return 0;
  }
  return isNegative ? -x : x
};
/********************************************************************************************************************* */
var hammingDistance = function (x, y) {
  return (x ^ y).toString(2).match(/1/g) ? (x ^ y).toString(2).match(/1/g).length : 0
};
/********************************************************************************************************************* */
var judgeCircle = function (moves) {
  moves = moves.split('');
  tempObj = {
    L: 0,
    R: 0,
    U: 0,
    D: 0
  };
  for (let i = 0; i < moves.length; i++) {
    tempObj[moves[i]] = (tempObj[moves[i]] || 0) + 1;
  }
  return tempObj['L'] === tempObj['R'] && tempObj['U'] === tempObj['D']
};
/********************************************************************************************************************* */
var reverseString = function (s) {
  return [...s].reverse().join('');
};
var reverseString = function (s) {
  var str = '';
  for (let i = s.length - 1; i >= 0; i--) {
    str += s[i]
  }
  return str;
};
/********************************************************************************************************************* */
var singleNumber = function (nums) {
  var key;
  var tempObj = {};
  nums.forEach((e) => {
    tempObj[e] = (tempObj[e] || 0) + 1;
  });

  Object.keys(tempObj).forEach((e) => {
    if (tempObj[e] === 1) {
      key = e;
    }
  })
  return Number(key);
};
/********************************************************************************************************************* */
var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      nums.splice(nums.indexOf(nums[i]), 1);
      nums.push(0);
    }
  }
};
/********************************************************************************************************************* */
var majorityElement = function (nums) {
  var tempObj = {};
  var key;
  for (let i = 0; i < nums.length; i++) {
    tempObj[nums[i]] = (tempObj[nums[i]] || 0) + 1;
  }
  Object.keys(tempObj).forEach((e) => {
    if (tempObj[e] > (nums.length / 2)) {
      key = e;
    }
  })
  return Number(key);
};
/********************************************************************************************************************* */
var transpose = function (A) {
  var transA = new Array(A[0].length).fill(0).map(() => new Array());
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[0].length; j++) {
      transA[j][i] = A[i][j];
    }
  }
  return transA;
};
/********************************************************************************************************************* */
var findComplement = num => parseInt([...num.toString(2)].map(x => x == '0' ? 1 : 0).join(''), 2);
/********************************************************************************************************************* */
function compareTriplets(a, b) {
  var m = 0,
    n = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      m++;
    } else if (a[i] < b[i]) {
      n++;
    }
  }
  return [m, n];
}
/********************************************************************************************************************* */
function diagonalDifference(arr) {
  var primeDiagonal = 0,
    secondaryDogonal = 0;
  for (let i = 0; i < arr.length; i++) {
    primeDiagonal += arr[i][i];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    secondaryDogonal += arr[i][(arr.length - 1) - i];
  }
  return Math.abs(primeDiagonal - secondaryDogonal);
}
/********************************************************************************************************************* */
function plusMinus(arr) {
  var p = 0,
    n = 0,
    z = 0;
  var l = arr.length;
  arr.forEach((e) => {
    if (e > 0) {
      p += 1;
    } else if (e < 0) {
      n += 1;
    } else {
      z += 1;
    }
  })
  return [(p / l).toFixed(6), (n / l).toFixed(6), (z / l).toFixed(6)]
}
/********************************************************************************************************************* */
var countPrimes = function (n) {
  var primeCount = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      primeCount++;
    }
  }
  return primeCount;
};

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
/********************************************************************************************************************* */
var numUniqueEmails = function (emails) {
  var tempArr = [];
  emails.forEach((e) => {
    if (/\+/g.test(e.split('@')[0])) {
      tempArr.push(e.split('@')[0].split('+')[0].split('.').join('') + '@' + e.split('@')[1]);

    } else if (/\./g.test(e.split('@')[0])) {
      tempArr.push(e.split('@')[0].split('.').join('') + '@' + e.split('@')[1]);
    }
  });

  return new Set(tempArr).size;
};
/********************************************************************************************************************* */
var sortArrayByParity = function (A) {
  var tempArr = [];
  A.forEach((e) => {
    if (e % 2 === 0) {
      tempArr.push(e);
    }
  });

  A.forEach((e) => {
    if (e % 2) {
      tempArr.push(e);
    }
  })
  return tempArr;
};
/********************************************************************************************************************* */
var selfDividingNumbers = function (l, r) {
  let tempArr = [];
  for (let i = l; i <= r; i++) {
    if (i < 10) {
      tempArr.push(i);
      continue;
    }
    let tempI = i;
    while (tempI > 0) {
      let m = tempI % 10;
      if (m == 0 || i % m != 0) break;
      tempI = Math.floor(tempI / 10);
    }
    if (tempI == 0) tempArr.push(i);
  }
  return tempArr;
}
/********************************************************************************************************************* */
var setZeroes = function (matrix) {
  var tempArr = matrix.slice();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        for (let k = 0; k < matrix[i].length; k++) {
          tempArr[i][k] = 0;
        }
        for (let l = 0; l < matrix.length; l++) {
          tempArr[l][j] = 0
        }
      }
    }
  }
  return tempArr;
};
/********************************************************************************************************************* */
var setZeroes = function (matrix) {
  var A = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        for (m = 0; m < matrix.length; m++) {
          A[m][j] = 1;
        }


        for (let n = 0; n < matrix[0].length; n++) {
          A[i][n] = 1;
        }
      };
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (A[i][j]) {
        matrix[i][j] = 0
      }
    }
  }
};
/********************************************************************************************************************* */
var maxSubArray = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] > 0) nums[i] += nums[i - 1];
  }
  return Math.max(...nums);
};
/********************************************************************************************************************* */
var diStringMatch = function (S) {
  const tempArr = [];
  let min = 0;
  let max = S.length;
  for (i = 0; i < S.length; i++) {
    if (S[i] == 'I') {
      tempArr.push(min);
      min++;
    } else {
      tempArr.push(max);
      max--;
    }
  }
  tempArr.push(min)
  return tempArr;
};
/********************************************************************************************************************* */
var reverseWords = function (s) {
  s = s.split(' ');
  const tempArr = [];
  s.forEach(e => {
    tempArr.push(e.split(``).reverse().join(''));
  })
  return tempArr.join(' ');
};

var reverseWords = (s) => s.split(' ').map(word => word.split('').reverse().join('')).join(' ');

/********************************************************************************************************************* */
var containsDuplicate = function (nums, tempObj = {}) {
  for (var i = 0; i < nums.length; i++) {
    if (tempObj[nums[i]]) {
      return true;
    } else {
      tempObj[nums[i]] = 1;
    }
  }
  return false;
};
/********************************************************************************************************************* */
var longestPalindrome = function (s, storeObj = {}) {
  var count = 0;
  for (let i = 0; i < s.length; i++) {
    if (storeObj[s[i]] == 1) {
      count += 2;
      storeObj[s[i]] = 0;
    } else {
      storeObj[s[i]] = 1;
    }
  }
  if (count < s.length) {
    count++;
  }
  return count;
};
/********************************************************************************************************************* */
var isPalindrome = function (s) {
  return s.replace(/[^A-Za-z0-9]/g, '').toLowerCase() === [...s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()].reverse().join('');
};
/********************************************************************************************************************* */
var countPrimes = function (n) {
  var isPrime = [],
    result = 0;
  if (n < 3) return result; // number less than 3 there in no any prime number
  for (var i = 2; i < n; i++) {
    if (isPrime[i] == undefined) { // optimization i.e. proceed for only new numbers (not multiple of prime number)
      isPrime[i] = 1; // found prime number
      result++;
      for (var j = 2; j * i < n; j++) { // multiple of prime number need to be discard we are setting value '0' to set certain value.
        isPrime[i * j] = 0;
      }

    }
  }
  return result;
}
/********************************************************************************************************************* */
var checkPossibility = function (sequence) {
  var c = 0;
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] < sequence[i - 1]) {
      c++;
      if (c > 1) return false; // check for same number not repeated more than twice consequintely
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
    }
  }
  return true;
};
/********************************************************************************************************************* */
var reverseBits = function (n, maxBit = 32) {
  n = [...n.toString(2)].reverse();
  var len = maxBit - n.length;
  for (let i = 0; i < len; i++) {
    n.push('0');
  }
  return parseInt(n.join(''), 2);
};
/********************************************************************************************************************* */
var rotate = function (nums, k) {
  var rmEl;
  for (let i = 0; i < k; i++) {
    rmEl = nums.pop();
    nums.unshift(rmEl);
  }
};
var rotate = function (nums, k) {
  var rmArr = nums.splice(nums.length - k);
  nums.unshift(...rmArr)
};
/********************************************************************************************************************* */
var flipAndInvertImage = function (A) {
  for (var i = 0; i < A.length; i++) {
    A[i].reverse();
    for (var j = 0; j < A[0].length; j++) {
      A[i][j] = A[i][j] ? 0 : 1;
    }
  }
  return A;
};
var flipAndInvertImage = function (A) {
  return A.map(arr => arr.reverse()).map(arr => arr.map(e => e ? 0 : 1));
};
/********************************************************************************************************************* */
var peakIndexInMountainArray = function (A) {
  return A.indexOf(Math.max(...A))
};
/********************************************************************************************************************* */
var reverseList = function (head) {
  var prevNode = null;
  var currentNode = head;
  while (currentNode != null) {
    var tempNode = currentNode;
    currentNode = tempNode.next;
    tempNode.next = prevNode;
    prevNode = tempNode;
  }
  return prevNode;
};
/********************************************************************************************************************* */
var fizzBuzz = function (n) {
  const tempArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      tempArr.push('FizzBuzz');
    } else if (i % 3 == 0) {
      tempArr.push('Fizz');
    } else if (i % 5 == 0) {
      tempArr.push('Buzz')
    } else {
      tempArr.push(`${i}`)
    }
  }
  return tempArr;
};
/********************************************************************************************************************* */
var titleToNumber = function (s) {
  let colNo = 0;
  var temp = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    colNo += (s.charCodeAt(i) - 64) * temp;
    temp = temp * 26;
  }
  return colNo;
};
/********************************************************************************************************************* */
var findMedianSortedArrays = function (nums1, nums2) {
  var tempArr = [...nums1, ...nums2].sort((a, b) => a - b);
  var middle = Math.floor(tempArr.length / 2);
  if (tempArr.length % 2 === 0) {
    return (tempArr[middle - 1] + tempArr[middle]) / 2;
  } else {
    return tempArr[middle];
  }
};
/********************************************************************************************************************* */
var convertToTitle = function (n) {
  for (var ret = '', a = 1, b = 26;
    (n -= a) >= 0; a = b, b *= 26) {
    ret = String.fromCharCode(parseInt((n % b) / a) + 65) + ret;
  }
  return ret;
};
/********************************************************************************************************************* */
var numJewelsInStones = function (J, S) {
  var result = 0;
  for (let i = 0; i < S.length; i++) {
    if (J.indexOf(S[i]) > -1) result++;
  }
  return result;
};
/********************************************************************************************************************* */
var isMonotonic = function (A) {
  var inc = 0,
    dec = 0;
  for (var i = 0, inc = 0; i < A.length - 1; i++) {
    if (A[i] <= A[i + 1]) inc++
  }
  for (var i = 0, dec = 0; i < A.length - 1; i++) {
    if (A[i] >= A[i + 1]) dec++
  }
  if (inc == A.length - 1 || dec == A.length - 1) {
    return true;
  }
  return false;
};

var isMonotonic = function (A) {
  var isIncreased = true;
  var isDecreased = true;

  for (let i = 1; i < A.length; i++) {
    isIncreased = isIncreased && (A[i] >= A[i - 1]);
    isDecreased = isDecreased && (A[i] <= A[i - 1]);
  }
  return isIncreased || isDecreased;
}
/********************************************************************************************************************* */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  for (var i = 0, sum = 0; i < nums.length; i += 2) {
    sum += nums[i]
  }
  return sum;
};
/********************************************************************************************************************* */
var shortestToChar = function (S, C) {
  var tempArr = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      tempArr[i] = 0;
    } else {
      for (var j = i + 1, left = 0; j < S.length; j++) {
        left++
        if (S[j] === C) {
          break;
        } else if (j == S.length - 1) {
          left = 0;
        }
      }
      for (var k = i - 1, right = 0; k >= 0; k--) {
        right++
        if (S[k] === C) {
          break;
        } else if (k == 0) {
          right = 0;
        }
      }
      tempArr[i] = left * right == 0 ? Math.max(left, right) : Math.min(left, right);
    }
  }
  return tempArr;
};
/********************************************************************************************************************* */
var findDisappearedNumbers = function (nums) {
  var tempArr = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) tempArr.push(i);
  }
  return tempArr;
};
var findDisappearedNumbers = function (nums) {
  var result = [];
  var storeObj = {};
  for (var i = 0; i < nums.length; i++) {
    storeObj[nums[i]] = 1;
  }
  for (var i = 1; i < nums.length + 1; i++) {
    if (!storeObj[i]) result.push(i);
  }
  return result;
}
/********************************************************************************************************************* */
var addDigits = function (num) {
  var reduceAdd = 0;
  if (num < 10) return num;
  while (num >= 10) {
    reduceAdd = num % 10 + Math.floor(num / 10);
    num = reduceAdd;
  }
  return num;
}
var addDigits = function (num) {
  for (; num.toString().length > 1;) {
    num = num.toString().split``.map(x => +x).reduce((a, c) => a + c);
  }
  return num;
};
/********************************************************************************************************************* */
var climbStairs = function (n) {
  var fibs = [1, 1];
  for (var i = 2; i <= n; i++) {
    fibs.push(fibs[i - 1] + fibs[i - 2]);
  }
  return fibs.pop();
};
/********************************************************************************************************************* */
var firstUniqChar = function (s) {
  var storeObj = {};
  for (var i = 0; i < s.length; i++) {
    storeObj[s[i]] = (storeObj[s[i]] || 0) + 1;
  }
  for (i = 0; i < s.length; i++) {
    if (storeObj[s[i]] == 1) {
      return i;
    }
  }
  return -1;
};
/********************************************************************************************************************* */
var removeDuplicates = function (nums) {
  var previous,
    dupCount = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (previous !== nums[i]) {
      previous = nums[i];
      dupCount = 1;
    } else if (dupCount === 2) {
      nums.splice(i, 1);
    } else {
      dupCount++;
    }
  }
};
/********************************************************************************************************************* */
var missingNumber = function (nums) {
  var max = Math.max(...nums);
  max = max > nums.length ? max : nums.length;
  for (let i = 0; i <= max; i++) {
    if (!nums.includes(i)) return i;
  }
};
/********************************************************************************************************************* */
var uncommonFromSentences = function (A, B) {
  var storeObj = {}
  var concateStr = `${A} ${B}`;
  var resultArr = [];
  concateStr = concateStr.split` `;
  concateStr.forEach(e => {
    storeObj[e] = (storeObj[e] || 0) + 1;
  })
  Object.keys(storeObj).forEach(key => {
    if (storeObj[key] == 1) resultArr.push(key);
  })
  return resultArr;
};
/********************************************************************************************************************* */
var isPowerOfThree = function (n) {
  if (n == 0) return false; // avoid recurssive loop
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};

var isPowerOfThree = function (n) {
  var powerArr = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323, 4782969, 14348907, 43046721, 129140163, 387420489, 1162261467];
  return powerArr.includes(n)
}

var isPowerOfThree = function (n) {
  var powerArr = [1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 177147, 531441, 1594323, 4782969, 14348907, 43046721, 129140163, 387420489, 1162261467];
  for (let i = 0; i < powerArr.length; i++) {
    if (n == powerArr[i]) return true;
  }
  return false;
}
/********************************************************************************************************************* */
var isPowerOfTwo = function (n) {
  if (n == 0) return false; // avoid recurssive loop
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
};
/********************************************************************************************************************* */
var reverseOnlyLetters = function (S) {
  if (!/[A-Za-z]/.test(S)) return S;
  var reverseStr = S.match(/[A-Za-z]+/g).join``.split``.reverse().join``;
  var str = ''
  for (var i = 0, j = 0; i < S.length; i++) {
    if (/[A-Za-z]/.test(S[i])) {
      str += reverseStr[j];
      j++
    } else {
      str += S[i];
    }
  }
  return str;
};
/********************************************************************************************************************* */
var numSquares = function (n) {
  var arr = [];
  var i = 1;
  var count = 0;
  while (i ** 2 <= n) {
    arr.push(i ** 2);
    i++;
  }
  var checkObj = new Set();
  checkObj.add(n);
  while (!checkObj.has(0)) {
    count++;
    var temp = new Set();
    for (m of checkObj) {
      for (n of arr) {
        if (m == n) return count;
        if (m < n) break;
        temp.add(m - n)
      }
    }
    checkObj = temp;
  }
  return count;
};
/********************************************************************************************************************* */
var findTheDifference = function (s, t) {
  var tempStr = '';
  for (let i = 0; i < s.length; i++) {
    if (t.includes(s[i])) {
      tempStr = t.replace(s[i], '');
      t = tempStr;
    }
  }
  return t;
};
/********************************************************************************************************************* */
var lengthOfLastWord = function (s) {
  s = s.trim().split` `;
  return s[s.length - 1].length;
};
/********************************************************************************************************************* */
var projectionArea = function (grid) {
  var gridSize = grid.length ** 2;
  var emptyGrid = 0;
  var [xy, yz, xz] = [0, 0, 0];
  var tempArr;
  for (var i = 0, l = 0; i < grid.length; i++ , l++) {
    tempArr = [];
    for (var k = 0; k < grid.length; k++) {
      tempArr.push(grid[k][l])
    }
    yz += Math.max(...tempArr);
    xz += Math.max(...grid[i]);
    for (var j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 0) emptyGrid++;
    }
  }
  xy = gridSize - emptyGrid;
  return xy + yz + xz;
};
/********************************************************************************************************************* */
var maxArea = function (height) {
  var l = 0,
    r = height.length - 1,
    max = 0,
    h, w;

  while (l < r) {
    h = Math.min(height[l], height[r]);
    w = r - l;
    max = Math.max(max, h * w);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};
/********************************************************************************************************************* */
var checkRecord = function (s) {
  var absent = /A/.test(s) ? s.match(/A/g).length : 0;
  var lateValid = true;
  for (var i = 0; i < s.length; i++) {
    if (s[i] = 'L') {
      if (s[i] == 'L' && s[i + 1] == 'L' && s[i + 2] == 'L') lateValid = false;
    }
  }
  return lateValid && (absent < 2);
};
/********************************************************************************************************************* */
var findMaxConsecutiveOnes = function (nums) {
  var storeObj = {},
    key = 1;
  nums.forEach(e => {
    if (e === 0) {
      key++;
    } else {
      storeObj[key] = (storeObj[key] || 0) + 1;
    }
  })
  return Object.keys(storeObj).length > 0 ? Math.max(...Object.values(storeObj)) : 0
};
/********************************************************************************************************************* */
var findDuplicates = function (nums, obj = {}) {
  var tempArr = [];
  nums.forEach(e => {
    obj[e] = (obj[e] || 0) + 1
  })
  Object.keys(obj).forEach(e => {
    if (obj[e] > 1) {
      tempArr.push(+e)
    }
  })
  return tempArr;
};

var findDuplicates = function (nums, obj = {}) {
  var tempArr = [];
  nums.forEach(e => {
    if (obj[e]) {
      tempArr.push(e);
    } else {
      obj[e] = 1;
    }
  })
  return tempArr;
};
/********************************************************************************************************************* */
var myPow = function (x, n) {
  return x ** n;
};
/********************************************************************************************************************* */
var singleNonDuplicate = function (nums) {
  for (var i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
};
/********************************************************************************************************************* */
var removeElement = function (nums, val) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == val) nums.splice(i, 1);
  }
};
/********************************************************************************************************************* */
var reverseWords = function (str) {
  str = str.replace(/ +/g, ' ').trim();
  return str.split` `.reverse().join` `;
};
/********************************************************************************************************************* */
var isPerfectSquare = function (num) {
  return Number.isInteger(num ** 0.5);
};
/********************************************************************************************************************* */
function gcdEuclid(a, b) {
  if (!a) {
    return b;
  }
  return gcdEuclid(b % a, a);
}
/********************************************************************************************************************* */
function isDiagonalMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if (i !== j && matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}
/********************************************************************************************************************* */
function arraySumAdjacentDifference(inputArray) {
  var tempArr = [];
  for (let i = inputArray.length - 1; i >= 1; i--) {
    tempArr.push(Math.abs(inputArray[i] - inputArray[i - 1]));
  }
  return tempArr.reduce((a, c) => a + c);
}
/********************************************************************************************************************* */
function replaceAllDigitsRegExp(input) {
  return input.replace(/\d/g, '#');
}
/********************************************************************************************************************* */
function evenDigitsOnly(n) {
  return n.toString().split``.every(x => x % 2 == 0);
}
/********************************************************************************************************************* */
var detectCapitalUse = function (word) {
  var isLowercase = /[a-z]/.test(word[0]);
  if (isLowercase) {
    return word.split``.every(x => /[a-z]/.test(x));
  } else {
    var tempStr = word.slice(1);
    return tempStr.split``.every(x => /[a-z]/.test(x)) || tempStr.split``.every(x => /[A-Z]/.test(x));
  }
};
/********************************************************************************************************************* */
var generate = function (numRows) {
  var tempArr = new Array(numRows).fill(0).map(() => new Array())
  for (var i = 0; i < numRows; i++) {
    tempArr[i][0] = 1;
    tempArr[i][i] = 1;
  }
  for (i = 2; i < tempArr.length; i++) {
    for (var j = 1; j < tempArr[i].length - 1; j++) {
      tempArr[i][j] = tempArr[i - 1][j - 1] + tempArr[i - 1][j]
    }
  }
  return tempArr;
};
/********************************************************************************************************************* */
var maxProfit = function (prices) {
  let lowestPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    if (currentPrice < lowestPrice) {
      lowestPrice = currentPrice;
    } else if (currentPrice - lowestPrice > maxProfit) {
      maxProfit = currentPrice - lowestPrice;
    }
  }
  return maxProfit;
}
/********************************************************************************************************************* */
var romanToInt = function (s) {
  var storeObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  for (var i = 0, result = 0; i < s.length; i++) {
    result += storeObj[s[i]] < storeObj[s[i + 1]] ? -storeObj[s[i]] : storeObj[s[i]];
  }
  return result;
};
/********************************************************************************************************************* */
var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  return !!haystack.match(needle) ? haystack.match(needle).index : -1;
};
/********************************************************************************************************************* */
var isValid = function (s) {
  var count = s.length
  while (count > 1) {
    s = s.replace(/\[\]|\{\}|\(\)/g, '');
    count -= 2;
  }
  return s === '';
};
/********************************************************************************************************************* */
var removeDuplicates = function (nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] == nums[i - 1]) nums.splice(i, 1);
  }
  return nums.length;
};
/********************************************************************************************************************* */
var repeatedNTimes = function (A) {
  let N = A.length / 2;
  var storeObj = {};
  var result;
  A.forEach(function (e) {
    storeObj[e] = (storeObj[e] || 0) + 1;
  });
  Object.keys(storeObj).forEach(function (e) {
    if (storeObj[e] == N) result = e;
  })
  return result;
};
/********************************************************************************************************************* */
var maxWidthRamp = function (A) {
  var min, max, res = 0;
  for (let j = A.length - 1; j >= 0; j--) {
    for (let i = 0; i < A.length; i++) {
      if (A[i] <= A[j]) {
        min = i;
        max = j;
        res = max - min > res ? max - min : res;
        break;
      }
    }
  }
  return res;
};
/********************************************************************************************************************* */
var plusOne = function (digits) {
  var carry = 0
  for (let i = digits.length - 1; i > -1; i--) {
    digits[i] += 1;
    if (digits[i] < 10) {
      carry = 0;
      break;
    } else {
      carry = 1;
      digits[i] = 0;
    }

  }
  if (carry) digits.unshift(carry)
  return digits;
};
/********************************************************************************************************************* */
var pivotIndex = function (nums) {
  var pIndex = -1;
  var leftArr = [], rightArr = [];
  for (let i = 0; i < nums.length; i++) {
    leftArr = nums.slice(0, i);
    rightArr = nums.slice(i + 1);
    if (leftArr.reduce((a, c) => a + c, 0) == rightArr.reduce((a, c) => a + c, 0)) {
      pIndex = i;
      break;
    }
  }
  return pIndex;
};
/********************************************************************************************************************* */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (!t.includes(s[i])) return false;
    t = t.replace(s[i], ``);
  }
  return true;
};
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sObj = {}, lObj = {};
  for (let i = 0; i < s.length; i++) {
    sObj[s[i]] = (sObj[s[i]] || 0) + 1;
    lObj[t[i]] = (lObj[t[i]] || 0) + 1;
  }
  for (key in sObj) {
    if (sObj[key] !== lObj[key]) return false;
  }
  return true;
};
/********************************************************************************************************************* */
var productExceptSelf = function (nums) {
  var tempArr = [];
  for (let i = 0; i < nums.length; i++) {
    tempArr[i] = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        tempArr[i] *= nums[j]
      }
    }
  }
  return tempArr;
};
/********************************************************************************************************************* */
var coinChange = function (coins, amount) {
  coins = coins.sort((a, b) => b - a);
  let cnt = 0;
  let i = 0;
  while (i < coins.length) {
    if (coins[i] <= amount && amount > 0) {
      cnt++;
      amount -= coins[i];
    } else {
      i++;
    }
  }
  return amount !== 0 ? -1 : cnt;
};
/********************************************************************************************************************* */
function antiHrFormate(time = '15:05:30') {
  const hour = +time.substr(0, 2);
  let hr = (hour % 12) || 12;
  hr = hr < 10 ? `0${hr}` : hr;
  const state = hour < 12 ? 'AM' : 'PM';
  return `${hr}${time.substr(2, 6)} ${state}`;
}
/********************************************************************************************************************* */
function isArithmeticProgression(sequence) {

  var difference = sequence[1] - sequence[0];
  for (var i = 2; i < sequence.length; i++) {
    if (sequence[i] - sequence[i - 1] !== difference) {
      return false;
    }
  }
  return true;
}
/********************************************************************************************************************* */
function allLongestStrings(inputArray) {
  var answer = [inputArray[0]];
  for (var i = 1; i < inputArray.length; i++) {
    if (inputArray[i].length === answer[0].length) {
      answer.push(inputArray[i]);
    }
    if (inputArray[i].length > answer[0].length) {
      answer = [inputArray[i]];
    }
  }
  return answer;
}

/********************************************************************************************************************* */
function properOrImproper(a) {
  if (Math.abs(a[0] / a[1]) < 1) {
    return 'Proper';
  }
  return 'Improper';
}
/********************************************************************************************************************* */
function fullName(first, last) {
  return `${first} ${last}`
}
/********************************************************************************************************************* */
function rightTriangle(sides) {
  var sqr = function (value) {
    return value * value;
  }
  var compareNumbers = function (a, b) {
    return a - b;
  }
  sides.sort(compareNumbers);
  if (sqr(sides[0]) + sqr(sides[1]) === sqr(sides[2])) {
    return true;
  }
  return false;
}
/********************************************************************************************************************* */
/********************************************************************************************************************* */
/********************************************************************************************************************* */
/********************************************************************************************************************* */
/********************************************************************************************************************* */
