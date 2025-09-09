// 1. 기본 자료형
// 1.1 문자열 -> string
// 1.2 숫자 -> number
// 1.3 논리 -> boolean
// 1.4 undefined -> undefined
// 1.5 null -> null
// 1.6 symbol -> symbol
// 1.7 Bigint -> bigint
{
  const str: string = 'Hello';
  const num: number = 10;
  const bool: boolean = true;
  const undi: undefined = undefined;
  const nul: null = null;
  const sym: symbol = Symbol('a');
  const big: bigint = 100n;

  console.log(typeof str);
  console.log(typeof num);
  console.log(typeof bool);
  console.log(typeof undi);
  console.log(typeof nul);
  console.log(typeof sym);
  console.log(typeof big);
}
{
  let str: string = 'hello';
  str = 'A';
  console.log(str);

  let num: number = 10;
  num = 20;
  console.log(num);
}

// 2. 참조 자료형
// 2.1 배열
// 2.1.1 []
// 2.1.2 Array<> (제네릭)
// 2.2 객체
// 2.3 함수 (o -> 나중에 살펴봄)
{
  const arr: number[] = [1, 2, 3];
  arr.push(4);

  // 튜플(tuple)
  const arr1_1: [number, string] = [1, 'a'];
  const arr2: Array<number> = [1, 2, 3];
  arr2.push(4);

  const matrix: [number[], string[], boolean[]] = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [true, false],
  ];

  const matrix2: Array<Array<number>> = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const blocks: string[][][] = [
    [['a', 'b'], ['c']],
    [['d', 'e'], ['f']],
  ];
  const blocks2: [[string[], number[]], [string[], number[]]] = [
    [['a', 'b'], [1]],
    [['d', 'e'], [2]],
  ];
}

// 객체
{
  const obj: {} = {}; // Record<string, never>
  const user: {
    name: string;
    age: number;
    gender: string;
    fruits: string[];
    address: {
      zipcode: number;
      details: (string | number)[];
    };
  } = {
    name: 'kim',
    age: 20,
    gender: 'male',
    fruits: ['apple', 'banana'],
    address: {
      zipcode: 111333,
      details: ['서울특별시', '관악구', 11],
    },
  };

  const members: { id: number; name: string }[] = [
    { id: 1, name: 'kim' },
    { id: 2, name: 'park' },
  ];

  const prject: {
    id: string;
    members: { id: number; name: string }[];
  } = {
    id: 'p1',
    members,
  };
}
