class Employee {
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Lamp {
  constructor(color) {
    this.isEnabled = false;
    this.color = color;
  }

  toggle() {
    this.isEnabled = !this.isEnabled;
  }
}

const myLamp = new Lamp('green');
const myLamp2 = new Lamp('red');

// Контекст это обьект от имени которого вызывается функция!!!!!
const employees = [
  new Employee('John', 'Snow', 40000),
  new Employee('Jack', 'Doe', 1000),
  new Employee('Albert', 'Shtein', 10000),
];

const body = document.querySelector('body');
for (const employee of employees) {
  const div = document.createElement('div');
  div.textContent = employee.getFullName();
  body.append(div);
}
