// 2. 접근 제한자가 지원된다는 점
// 2.1 public, protected, private, readonly
// 2.2 #private가 추가되었지만, 이거랑 다른 것
// 3. 추상클래스, 인터페이스와 결합이 가능한 것

{
  // 클래스
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }

    start(name: string): string {
      return `${name}, start!`;
    }
  }

  const benz = new Car(100);
  console.log(benz.start('benz'));
  console.log(benz.speed);

  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    introduce(): string {
      return `Hello, ${this.name}, ${this.age}`;
    }
  }
  const person = new Person('john', 20);
  console.log(person.introduce);
}

{
  class Car {
    public speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    private secret(): string {
      return '차 사고 크게 난 적 있음.';
    }
    search(): string {
      return this.secret();
    }
  }
  const car = new Car(100);
  console.log(car.speed);
  console.log(car.search());
}
{
  class Car {
    private engineOn: boolean = false;

    // 엔진 시작
    start() {
      if (this.engineOn) {
        console.log('Engine is already started');
        return;
      }
      this.engineOn = true;
      console.log('Engine started');
    }

    // 엔진 정지
    stop() {
      if (!this.engineOn) {
        console.log('Engine is already stopped');
        return;
      }
      this.engineOn = false;
      console.log('Engine stopped');
    }

    // 엔진 상태
    isEngineOn(): void {
      console.log(this.engineOn);
    }
  }
  const benz = new Car();
  benz.start();
  benz.isEngineOn();
  benz.stop();
}

{
  class Car {
    protected speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
  }

  class Benz extends Car {
    showSpeed() {
      console.log(this.speed);
    }
  }

  const benz = new Benz(100);
  benz.showSpeed();
}

{
  class Character {
    protected hp: number = 100;
  }
  class Warrior extends Character {
    atack() {
      this.hp -= 10;
      console.log(`HP after acctac: ${this.hp}`);
    }
    displayWarriorInfo() {
      console.log(`Warrior HP: ${this.hp}`);
    }
  }
  const warrior = new Warrior();
  warrior.displayWarriorInfo();
  warrior.atack();
}

{
  // 메소드 오버라이딩
  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }
    getSpeed(): string {
      return `Car: ${this.speed}`;
    }
  }

  class Benz extends Car {
    name: string;
    constructor(speed: number, name: string) {
      super(speed);
      this.name = name;
    }
    getSpeed(): string {
      return `Be: ${this.speed}`;
    }
  }
  const benz = new Benz(100, 'S class');
  console.log(benz.getSpeed());
}

{
  // 추상클래스
  // 직접 인스턴스를 생성할 수 없는 클래스로,
  // 주로 공통의 속성이나 메서드를 정의하기 위해서 사용 (직접 구현도 가능)
  abstract class CarAbstract {
    abstract name: string;
    abstract speed: number;
    abstract color: string;
    abstract maxSpeed(): number;
  }

  class benz extends CarAbstract {
    name: string;
    speed: number;
    color: string;
    constructor(name: string, speed: number, color: string) {
      super();
      this.name = name;
      this.speed = speed;
      this.color = color;
    }

    maxSpeed(): number {
      return this.speed;
    }
  }
}

{
  // 단점: 다른 클래스를 추가 상속하지 못하게 한다.

  // implements + interface(type)
  // 추상 클래스는 직접 구현이 가능한데
  // 직접 구현이 불가능, 여러개 implements 가능

  type Runner = {
    name: string;
    run(): void;
  };

  interface Swimmer {
    swim(): void;
  }

  class Person implements Runner, Swimmer {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    run(): void {
      console.log('Person is Run!');
    }

    swim(): void {
      console.log('Person is Swim!');
    }
  }
}

{
  interface A {
    a(): void;
  }
  interface B extends A {
    b(): void;
  }
  class X implements B {
    a(): void {}
    b(): void {}
  }
}
