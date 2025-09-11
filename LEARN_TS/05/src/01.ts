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
  }

  const benz = new Car(100);
  console.log(benz.speed);
}
