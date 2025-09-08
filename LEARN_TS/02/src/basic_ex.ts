{
  // 1
  // 함수 정의
  const sumAllNumbers = function sumAllNumbers(...arr: number[][]) {
    return arr.map((result) => result.reduce((acc, cur) => acc + cur));
  };

  // 함수 호출
  const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
  console.log(result); // [3, 12, 13]
}

{
  // 2
  // 함수 정의
  const doubleValue = function doubleValue(value: number | string) {
    if (typeof value === 'number') return value * 2;
    if (typeof value === 'string') return value.length * 2;
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue('hello');
  console.log(result1); // 10
  console.log(result2); // 10
}
