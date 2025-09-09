{
  // 1
  // 함수 정의
  const add = function add(n1: number, n2: number): number {
    return n1 + n2;
  };

  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15
}

{
  // 2
  // 함수 정의
  const greet: (str: string) => string = function greet(str) {
    return `Hello, ${str}`;
  };

  // 함수 호출
  const greeting = greet('Alice');
  console.log(greeting); // "Hello, Alice!"
}

{
  // 3
  // 함수 정의
  const sumAll = function (...arr: number[]): number {
    return arr.reduce((acc, cur) => acc + cur);
  };
  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}

{
  // 4
  // 함수 정의
  const sum = function sum(n1: number, n2?: number): number {
    return n1 + (n2 || 0);
  };

  // 함수 호출
  const result = sum(5);
  console.log(result); // 5
}

{
  // 5
  // 함수 정의
  const multiply = function sum(n1: number, n2: number): number {
    return n1 * n2;
  };

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20
}

{
  // 6
  // 함수 정의
  const concatStringAndNumber: (str: string, num: number) => string =
    function concatStringAndNumber(str, num) {
      return `${str}${num}`;
    };

  // 함수 호출
  const result = concatStringAndNumber('Hello', 10);
  console.log(result); // "Hello10"
}

{
  // 7
  // 함수 정의
  const greet = (str1: string, str2 = 'Wellcome') => `${str2}, ${str1}`;

  // 함수 호출
  const greeting1 = greet('Alice', 'Hello');
  const greeting2 = greet('Bob');
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}

{
  // 8
  // 함수 정의
  const findMax = function findMax(arr: number[]) {
    return Math.max(...arr);
  };

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}

{
  // 9
  // 함수 정의
  const double = function double(num: number): number {
    return num * 2;
  };

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}
