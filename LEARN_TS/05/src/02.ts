// 제네릭
// 제네릭은 타입을 미리 지정하지 않고, 사용하는 시점에 타입을 정의해서 쓸 수 있는 문법
// 코드의 재사용성을 높이고, 다양한 타입에 대해 하나의 함수나 클래스를 작성할 수 있게 도와줍니다.
// T = Type (가장 일반적인 타입 변수)
// K = Key (객체의 키)
// V = Value (객체의 값)
// E = Element (배열의 요소나 이벤트)
// U = Another Type (T 이외에 만만하면 U)

{
  // 함수의 제네릭
  // function getFirstElement<number>(arr:number[]):number{}
  function getFirstElements(arr: (number | string)[]): number | string;
  function getFirstElements(arr: boolean[]): boolean;
  function getFirstElements(arr: string[]): string;
  function getFirstElements(arr: number[]): number;
  function getFirstElements(
    arr: number[] | string[] | boolean[] | (number | string)[]
  ): number | string | boolean | undefined {
    return arr[0];
  }

  // 널 아님 보장 연산자
  function getFirstElement<T>(arr: T[]): T {
    return arr[0]!;
  }
  console.log(getFirstElement<string>(['A', 'B', 'C'])); // "A"
  console.log(getFirstElement<boolean>([true, false])); // true
  console.log(getFirstElement<number | string>([1, 'A'])); // true
}

{
  function makeTuple<T, K, V>(a: T, b: K, c: V): [T, K, V] {
    return [a, b, c];
  }
  const numTuple = makeTuple(1, 2, 3);
  const strTuple = makeTuple('a', 'b', 'c');
  const mixTuple = makeTuple(1, 'a', true);
}
{
  function sumArray<T extends number>(arr: T[]): number {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }
}
{
  function returnLength<T extends { length: number }>(arr: T[]): number {
    return arr.length;
  }
  returnLength(['a', 'b', 'c']);
}
{
  function logKey<T extends { name: string }>(obj: T): void {
    console.log(`${obj.name}`);
  }
  logKey({ name: 'HI' });
}

{
  // 인터ㅔ이스의 제네릭
  // 인터페이스의 제네릭
  // interface Box {
  //   // value: string | number;
  //   // getValue(): string | number;
  // // }
  interface Box<T> {
    value: T;
    getValue(): T;
  }
  const stringBox: Box<string> = {
    value: 'kim',
    getValue() {
      return this.value;
    },
  };
  const numberBox: Box<number> = {
    value: 10,
    getValue() {
      return this.value;
    },
  };
}

{
  class Box<T extends { id: number }> {
    private items: T[] = [];
    add(item: T) {
      this.items.push(item);
    }
    getAll(): T[] {
      return this.items;
    }
  }
  const stringBox = new Box<{ id: number; name: string }>();
  stringBox.add({ id: 1, name: 'jun' });
  console.log(stringBox.getAll());
}
