// interface is only for TS
// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }

// If using react express or node then using class is required
class Human {
  // "public" allows the variable to be accessible outside the class
  // "public" is not available in js
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const me = new Human("Keon Oh Kim", 24, "male");

const sayHi = (person: Human) => {
  return `Hello! ${person.name}, you are ${person.age} year old, ${person.gender}!`;
};

console.log(sayHi(me));

export {};
