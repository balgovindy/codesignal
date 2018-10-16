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
  for (var n = 1;; n++)
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
  return s.slice(1).split ``.every((e, i) => e > s[i]);
}
/********************************************************************************************************************* */
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0);
    return false;
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
    $('#userOutTime').html(`<span>${timeCalculate(userOutTime,true)}</span>`)
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
/********************************************************************************************************************* */
/********************************************************************************************************************* */
/********************************************************************************************************************* */
/********************************************************************************************************************* */
/********************************************************************************************************************* */
/********************************************************************************************************************* */
/********************************************************************************************************************* */
/********************************************************************************************************************* */