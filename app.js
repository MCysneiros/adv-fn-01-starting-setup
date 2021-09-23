// const add = (num1, num2) => num1 + num2;
// console.log(add(1, 2));
// console.log(add(12, 2));

// const addRandom = (num1) => num1 + Math.random();
// console.log(addRandom(5));

// let previousResult = 0;

// const addMoreNumbers = (num1, num2) => {
//   const sum = num1 + num2;
//   previousResult = sum;
//   return sum;
// };
// addMoreNumbers(1, 6);
// console.log(previousResult);

// const hobbies = ['sports', 'music'];

// const printHobbies = (h) => {
//   h.push('vava');
//   console.log(h);
// };

// printHobbies(hobbies);

// let multiplier = 1.1;

// const createTaxCalculator = (tax) => {
//   const calculateTax = (amount) => amount * tax * multiplier;

//   return calculateTax;
// };

// const vatCalculator = createTaxCalculator(0.19);
// const incomeTaxCalculator = createTaxCalculator(0.25);

// multiplier = 1.2;

// console.log(vatCalculator(100));
// console.log(vatCalculator(200));

// let userName = 'matheus';

// const greetUser = () => {
//   let name = 'ana';
//   console.log('Hi ' + name);
// };

// let name = 'lira';
// greetUser();
// userName = 'bia ';

// const powerOff = (x, n) => (n === 1 ? x : x * powerOff(x, n - 1));
// if (n === 1) {
//   return x;
// }
// return x * powerOff(x, n - 1);

// console.log(powerOff(2, 3));

const mySelf = {
  name: 'matheus',
  friends: [
    {
      name: 'lira',
      friends: [{ name: 'bacalhau', friends: [{ name: 'luis' }] }],
    },
    {
      name: 'markus',
    },
  ],
};

const printFriendNames = (person) => {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friends of person.friends) {
    collectedNames.push(friends.name);
    collectedNames.push(...printFriendNames(friends));
  }
  return collectedNames;
};

console.log(printFriendNames(mySelf));
