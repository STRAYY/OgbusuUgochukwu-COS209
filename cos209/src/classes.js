// Concept: Classes allow you to define blueprints for objects with constructors, methods, and inheritance.
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  greet() {
    return `Hi, I'm ${this.fullName}`;
  }

  static species() {
    return 'Homo sapiens';
  }
}

class Employee extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName);
    this.role = role;
  }

  greet() {
    return `${super.greet()} — I work as a ${this.role}`;
  }
}

const alice = new Employee('Alice', 'Ng', 'Developer');
console.log(alice.greet());
console.log('Species:', Employee.species());
