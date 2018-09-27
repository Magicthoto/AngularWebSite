interface People {
  firstName: string;
  lastName: string;
  sayHello: () => string;
}

export default class Person implements People {
  constructor(public firstName, public lastName) {}
  sayHello(): string {
    return `Hello ${this.firstName} ${this.lastName}\n`;
  }

  static infos(...persons: any[]): string {
    let ret = "";
    persons.forEach(p => {
      if (p.sayHello) ret += p.sayHello();
    });
    return ret;
  }
}

// import Person from "../typescript/Person";

// let p = new Person("tata", "titi");
// let d = new Person("toto", "tyty");

// console.log(Person.infos(p, d));
