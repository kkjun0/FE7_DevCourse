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
    else {
      return value.length * 2;
    }
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue('hello');
  console.log(result1); // 10
  console.log(result2); // 10
}

{
  // 3
  // 함수 정의
  const multiplyArrays = function multiplyArrays(
    arr1: number[],
    arr2: number[]
  ): number[] {
    return arr1
      .slice(0, Math.min(arr1.length, arr2.length))
      .map((num, i) => num * (arr2[i] || 0));
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]

  const result2 = multiplyArrays([1, 2], [4, 5, 6]);
  console.log(result2); // [4, 10]
}

{
  // 4
  // 함수 정의
  const intersection: (arr1: number[], arr2: number[]) => number[] = (
    arr1,
    arr2
  ) => {
    return arr1.filter((num) => arr2.includes(num));
  };

  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

{
  // 5
  // 함수 정의
  const formatInfo: (obj: { name?: string; age?: number }) => string = (
    obj
  ) => {
    return obj.name ? `Name: ${obj.name}` : `Age: ${obj.age}`;
  };

  // 함수 호출
  const info = formatInfo({ name: 'Alice' });
  console.log(info); // "Name: Alice"
}

{
  // 6
  // 함수 정의
  // combineStrings 함수는 두 개의 문자열을 받아 합쳐서 반환하는 함수입니다.
  // 적절한 타입을 지정하여 함수를 정의하고 호출해보세요.
  const combineStrings: (st1: string, str2: string) => string = (
    str1,
    str2
  ) => {
    const result = str1 + str2;
    return result;
  };

  // 함수 호출
  const combined = combineStrings('Hello', 'World');
  console.log(combined); // "HelloWorld"
}

{
  // 7
  // 함수 정의
  // squareArray 함수는 숫자 배열을 받아 그 배열의 각 값에 대해 제곱을 계산하여 새로운 배열을 반환합니다.
  const squareArray: (arr: number[]) => number[] = (arr) => {
    return arr.map((acc) => acc * acc);
  };

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}

{
  // 8
  // addStringAndNumber 함수는 문자열과 숫자를 인자로 받아 두 값을 더하여 문자열로 반환하는 함수입니다.
  // 적절한 타입을 지정하여 함수를 정의하고 호출해보세요.
  // 함수 정의
  const addStringAndNumber: (str: string, num: number) => string = (
    str,
    num
  ) => {
    const result = `${str}${num}`;
    return result;
  };

  // 함수 호출
  const result = addStringAndNumber('The number is ', 10);
  console.log(result); // "The number is 10"
}

{
  // 9
  // 함수 정의
  // compareValues 함수는 숫자와 문자열을 받아 두 값을 비교하여 결과를 출력하는 함수입니다.
  // 숫자가 크면 "Number is larger", 문자열의 길이가 길면 "String is larger"를 반환하도록 하세요.
  const compareValues: (num: number, str: string) => string = (num, str) => {
    return num >= str.length ? 'Number is larger' : 'String is larger';
  };

  // 함수 호출
  const result = compareValues(10, 'Hello');
  console.log(result); // "Number is larger"
}

{
  // 10
  // checkValue 함수는 숫자, 문자열, 불리언 값을 인자로 받습니다. 이 값이 숫자라면 "It's a number",
  // 문자열이라면 "It's a string", 불리언이라면 "It's a boolean"을 반환하도록 하세요.
  // 함수 정의
  const checkValue = (any: number | string | boolean): string => {
    if (typeof any === 'number') return "It's a number";
    if (typeof any === 'string') return "It's a string";
    if (typeof any === 'boolean') return "It's a boolean";

    throw new Error('invalid Type');
  };

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}
