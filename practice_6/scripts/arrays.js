const other = filterNumeric(['sdfsd', 2, 3, 4, 'sdf', true]);
const numericArray = filterNumeric([
  'hello',
  20,
  'asd',
  true,
  10,
  37,
  'juk',
  {},
]); // [20, 10, 37]

function findMaxValue(someArray) {
  let maxValue = someArray[0];
  for (let i = 1; i < someArray.length; i++) {
    if (maxValue < someArray[i]) {
      maxValue = someArray[i];
    }
  }

  return maxValue;
}

const maxValue = findMaxValue([20, 34, 1, 5, 67, 38, 20, 123]);

function mapToLength(stringArray) {
  const length = [];
  // for (let i = 0; i < stringArray.length; i++) {
  //   const element = stringArray[i];
  //   length.push(element.length);
  // }
  for (let element of stringArray) {
    length.push(element.length);
  }
  return length;
}

function mapToPrice(products) {}

const prices = mapToPrice([
  {
    title: 'phone',
    price: 200,
  },
  {
    title: 'laptop',
    price: 2400,
  },
  {
    title: 'pc',
    price: 1234,
  },
]); // [200, 2400, 1234]

const arrayWithLength = mapToLength(['hello', 'hi', 'test']); // [5, 2, 4];
