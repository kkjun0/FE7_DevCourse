{
  // 인터페이스
  // 객체의 타입을 지정할 때 사용하는 타입 지정 방법
  // interface
  // type 식별자 = 할당
  // interface 식별자 { }
  interface Person {
    name: string;
    age: number;
    gender: 'male' | 'female' | 'natural';
  }
  const person: {
    name: string;
    age: number;
    gender: 'male' | 'female' | 'natural';
  } = {
    name: 'kim',
    age: 20,
    gender: 'male',
  };
}

{
  interface Person {
    name: string;
    age: number;
    greet(message: string): void; //greet: () => void;
  }

  const person: Person = {
    name: 'kim',
    age: 20,
    greet(message) {
      console.log(`Hello, ${this.name}`);
    },
  };
}

{
  // 자동 병합
  interface Person {
    name: string;
  }

  interface Person {
    age: number;
  }

  const person: Person = {
    name: 'kim',
    age: 20,
  };
}

{
  // 상속
  interface Person {
    name: string;
    age: number;
  }

  interface Developer extends Person {
    skill: string;
  }
  const developer: Developer = {
    name: 'kim',
    age: 20,
    skill: 'javascript',
  };
}

{
  // 다중 인터페이스 상속
  interface Flyer {
    fly(): void;
  }

  interface Swimmer {
    swim?(): void;
  }

  interface Bird extends Flyer, Swimmer {
    sound(): void;
  }

  const duck: Bird = {
    fly() {},
    swim() {},
    sound() {},
  };
}

{
  interface AddFn {
    (a: number, b: number): number;
  }
  const add: AddFn = (a, b) => a + b;
}
