class Microsoft {
  constructor(name) {
    this.name = name;
  }
  
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  occupation() {
    return `${this.name} is philanthropist!`;
  }
}

class Facebook extends Microsoft {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  studentAge() {
    return `${this.name} is ${this.age}`;
  }
}

let henry = new Microsoft("William Henry Gates III");
console.log(henry.occupation());
let elliot = new Facebook("Mark Elliot Zuckerberg", "23");
console.log(elliot.occupation());
console.log(elliot.studentAge());

module.exports = {
  Microsoft,
  Facebook,
};
