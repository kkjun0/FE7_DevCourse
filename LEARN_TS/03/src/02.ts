{
  type Person = {
    name: string;
    age: number;
    gender: string;
  };

  const user1: Person = {
    name: 'park',
    age: 30,
    gender: 'male',
  };

  const user2: Person = {
    name: 'park',
    age: 30,
    gender: 'male',
  };

  const user3: Person = {
    name: 'park',
    age: 30,
    gender: 'male',
  };
}
{
  // 1. 기본 타입 별칭
  type ID = string | number;
  const userId: ID = 'junyoung_Kim';
  const productId: number = 1;
}

{
  // 2. 객체 타입 별칭
  type User = {
    name: string;
    readonly age?: number;
  };

  type Person = {
    [key: string]: string | number;
  };

  const per1: User = {
    name: 'kim',
    age: 20,
  };

  const per2: Person = {
    name: 'kim',
    age: 20,
  };
}

{
  // 3. 함수 타입 별칭
  type AddFun = (a: number, b: number) => number;
  const add: AddFun = (a, b) => a + b;
}

{
  // 4. 튜플 타입 별칭
  type Point = [number, number];
  const point: Point = [10, 20];
}

{
  // 5. 인터섹션(유니온) 타입 별칭(타입 확장)
  type StringID = string;
  type NumberID = number;
  type ID = StringID | NumberID;
}

{
  // 6. 리터럴 타입 별칭
  type Direction = 'UP' | 'RIGHT' | 'LEFT' | 'DOWN';
  const direct: Direction = 'RIGHT';
}
