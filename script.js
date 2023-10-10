//1. Write a program that takes an array of elements and counts the occurrences of each element using a Map.

function countOccurrences(arr) {
  const elementCountMap = new Map();

  for (const element of arr) {
    if (elementCountMap.has(element)) {
      elementCountMap.set(element, elementCountMap.get(element) + 1);
    } else {
      elementCountMap.set(element, 1);
    }
  }

  return elementCountMap;
}

const arr = [1, 2, 3, 2, 1, 4, 5, 4];

const result = countOccurrences(arr);
console.log(result);

//2. Write a program that takes an array of integers and a target sum. Check if there exists a subarray with the given sum using a Set.

function hasSubarrayWithSum(num, taragetSum) {
  for (let start = 0; start < num.length; start++) {
    let currentSum = 0;
    for (let end = start; end < num.length; end++) {
      currentSum += num[end];
      if (currentSum === taragetSum) {
        return true;
      }
    }
  }
  return false;
}

const num = [1, 4, 20, 3, 10, 5];
const taragetSum = 33;

const results = hasSubarrayWithSum(num, taragetSum);
console.log(results);

//3. Write a program that takes an array of strings and groups anagrams together using a Map.

function groupAnagrams(item) {
  const anagramMap = new Map();

  for (const str of item) {
    const sortedStr = str.split("").sort().join("");
    if (anagramMap.has(sortedStr)) {
      anagramMap.get(sortedStr).push(str);
    } else {
      anagramMap.set(sortedStr, [str]);
    }
  }

  return anagramMap;
}
const item = ["eat", "tea", "tan", "ate", "nat", "bat"];

const output = groupAnagrams(item);
console.log(output);

// 4. Write a program that takes an array of strings and reverses each string in the array using the array methods.

const fruit = ["apple", "banana", "orange"];

const reversedArray = fruit.map((str) => {
  return str.split("").reverse().join("");
});

console.log(reversedArray);

//5. Write a program that takes an array of numbers and filters out the perfect square numbers using the array methods.

const number = [1, 2, 4, 7, 9, 16, 25];

function isPerfectSquare(num) {
  const sqrt = Math.sqrt(num);
  return Math.floor(sqrt) === sqrt;
}

const perfectSquares = number.filter(isPerfectSquare);

console.log(perfectSquares);

//6. Write a program that takes two objects and merges them into a single object

const obj1 = { name: "John", age: 30 };
const obj2 = { city: "New York", occupation: "Engineer" };

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);

//7. Write a program that takes an array of objects and converts it into a single object using Object.assign() and Object.entries().

const key = [
  { key: "name", value: "John" },
  { key: "age", value: 30 },
  { key: "city", value: "New York" },
];

const resultObject = {};
for (const item of key) {
  resultObject[item.key] = item.value;
}

console.log(resultObject);
