class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return this.firstName + " " + this.lastName;
  }
}

Object.defineProperty(Person.prototype, "name", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
  set: function (newName) {
    this.firstName = newName.split(" ")[0];
    this.lastName = newName.split(" ")[1];
  },
});
