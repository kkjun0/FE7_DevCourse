{
  // 1
  interface Person {
    name: string;
    age: number;
  }
  const P1: Person = {
    name: 'kim',
    age: 13,
  };
}

{
  // 2
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }
  const car: Car = {
    brand: 'KIA',
    model: 'sorento',
    start() {
      console.log('출발!');
    },
  };
}

{
  // 3
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }
  const em = {
    name: 'kim',
    position: 'devel',
    department: 'hi',
  };
}

{
  // 4
  interface Team {
    name: string;
    members: string[];
  }
  const sola = {
    name: 'sola',
    members: ['a', 'b', 'c'],
  };
}

{
  // 5
  interface Animal {
    name: string;
    age: number;
  }
  interface Dog extends Animal {
    breed(): void;
  }

  const bbobbi: Dog = {
    name: 'bbobbi',
    age: 13,
    breed() {
      console.log('왈');
    },
  };
}

{
  // 6
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }
  const p1: Person = {
    name: 'jun',
    age: 23,
    greet() {
      return `Hello, my name is ${name}`;
    },
  };
}

{
  // 7
  interface Shape {
    area(): number;
  }
  interface Rectangle extends Shape {
    width: number;
    height: number;
  }
  interface Circle extends Shape {
    radius: number;
  }
}

{
  // 8
  interface Person {
    name: string;
    age: number;
  }
  interface Address {
    street: string;
    city: string;
    zipcode: string;
  }
  interface Contact extends Person, Address {}
}

{
  // 9
  interface Dictionary {
    [key: string]: string;
  }
}

{
  // 10
  interface Operation {
    (v1: number, v2: number): number;
  }
  const add: Operation = (a, b) => a + b;
  const subtract: Operation = (a, b) => a / b;
}
