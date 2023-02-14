const sourceJSON = `{"data":[10,45,81,90,82,6,29,31,22,5,99,27,55,68,17,88,14,47,50,67]}`;

const object = JSON.parse(sourceJSON);

function getData(obj) {
  return new Promise((resolve, reject) => {
    resolve(obj.data);
  });
}

function sortedArr(arr) {
  return new Promise((resolve, reject) => {
    resolve(arr.sort((a, b) => a - b));
  });
}

function getTotal(arr) {
  return new Promise((resolve, reject) => {
    resolve(arr.reduce((total, curr) => total + curr, 0));
  });
}

function oddOrEven() {
  return new Promise(async (res, rej) => {
    let arr = await sortedArr(await getData(object));
    let evens = [];
    let odds = [];
    arr.forEach((element) => {
      if (element % 2 === 0) {
        evens.push(element);
      } else {
        odds.push(element);
      }
    });
    res({ evens, odds });
  });
}

function isEven(total) {
  return new Promise((res, rej) => {
    if (total % 2 === 0) {
      res(true);
    } else {
      res(false);
    }
  });
}

function biggestArrSum(arr1, arr2) {
  return new Promise(async (res, rej) => {
    let arrays = await oddOrEven(await getData(object));
    let evensSum = getTotal(arrays.evens);
    let oddsSum = getTotal(arrays.odds);
    console.log('The array has got biggest sum: ');
    res(evensSum > oddsSum ? arrays.evens : arrays.odds);
  });
}

getData(object)
  .then((result) => {
    console.log(result);
    return sortedArr(result);
  })
  .then((sorted) => {
    console.log('sorted array:');
    console.log(sorted);
    return getTotal(sorted);
  })
  .then((tot) => {
    console.log('sum of all numbers : ');
    console.log(tot);
    return isEven(tot);
  })
  .then((val) => {
    console.log(val);
  });

getData(object)
  .then((res) => {
    return sortedArr(res);
  })
  .then((sorted) => {
    return oddOrEven(sorted);
  })
  .then((seperatedNums) => {
    let { evens, odds } = seperatedNums;
    console.log('evens: ', evens, 'odds: ', odds);
    return biggestArrSum(seperatedNums);
  })
  .then((biggestArr) => {
    console.log(biggestArr);
  });

function process() {
  return new Promise(async (res, rej) => {
    let data = await getData(object);
    let sorted = await sortedArr(data);
    let oddEven = await oddOrEven(data);
    let total = await getTotal(sorted);
    let evenChecker = await isEven(total);
    res(evenChecker);
  });
}

//having issues with creating this class and implementing functionalities to work correctly
class Data {
  static process() {}
  static getOdd() {}
  static getEven() {}
  static getbiggestArr() {}
}
