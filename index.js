// *---------Task 1 : Warm up !-------------- //

let user = {
  firstName: "Lamia",
  lastName: "ElHbari",
  age: "38",
  fullName: "",

  getFullName: function () {
    let newfullName =
      '"' + "<" + this.firstName + ">" + " " + "<" + this.lastName + ">" + '"';
    return newfullName;
  },
  setFullName: function (newfullName) {
    this.firstName = newfullName;
  },
};
console.log(user.getFullName());

// *--------------Task 2 : Are you Older Than me ?--------------- //

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(otherPerson) {
    if (this.age < otherPerson.age) {
      return `"${otherPerson.name} is older than me."`;
    } else if (this.age > otherPerson.age) {
      return `"${otherPerson.name} is younger than me."`;
    } else {
      return `"${otherPerson.name} is the same age as me."`;
    }
  }
}
// Test:
const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));

// *--------------Task 3 : Most Occurred --------------- //

function mostOccurred(numbers) {
  const frequencyMap = {};

  numbers.forEach((number) => {
    frequencyMap[number] = (frequencyMap[number] || 0) + 1;
  });

  let mostOccurredNumber;
  let maxFrequency = 0;

  for (const number in frequencyMap) {
    if (frequencyMap[number] > maxFrequency) {
      mostOccurredNumber = parseInt(number);
      maxFrequency = frequencyMap[number];
    }
  }

  return mostOccurredNumber;
}
// Test : mostOccurred([4, 2, 2, 7, 2]) ➞ 2

const result = mostOccurred([1, 5, 1, 8, 2]);
console.log(result);
