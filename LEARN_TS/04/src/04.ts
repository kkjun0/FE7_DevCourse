{
  // class
  // 1. 타입 시스템이 추가 되었음.
  class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet(): string {
      return `Hello, ${this.name}`;
    }
  }

  const person = new User('kisu', 20);
  console.log(person.greet());
}

{
}
