{
  // 1
  // string 또는 number 타입의 값을 받아서 해당 값을 출력하는 함수 printValue를 작성하세요.
  // 이 함수는 입력된 값이 string이면 문자열 그대로 출력하고, number이면 숫자 그대로 출력해야 합니다.
  const printValue = (value: string | number): string | number => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return value;

    throw new Error('Invalid Type');
  };

  printValue('Hello'); // "Hello" 출력
  printValue(42); // 42 출력
}

{
  // 2
  // 주어진 입력 값이 string이면 그 길이를, number이면 2배 값을 반환하는 함수 doubleOrLength를 작성하세요.
  // 함수는 string 타입이면 문자열의 길이를, number 타입이면 그 숫자의 두 배 값을 반환해야 합니다.
  const doubleOrLength = (value: string | number): number => {
    if (typeof value === 'string') return value.length;
    if (typeof value === 'number') return value * 2;

    throw new Error('Invalid Type');
  };

  console.log(doubleOrLength('hello')); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}

{
  // 3
  // name과 age 속성을 가진 사람 객체와 jobTitle과 salary 속성을 가진 직장인 객체가 있을 때,
  // 이 두 객체를 합쳐서 새로운 객체를 반환하는 함수 mergeObjects를 작성하세요. 결과 객체는 이름, 나이, 직업, 월급을 포함해야 합니다.
  const mergeObjects = (
    person: { name: string; age: number },
    salaryman: { jobTitle: string; salary: number }
  ): { name: string; age: number } & { jobTitle: string; salary: number } => {
    const merge = {
      name: person.name,
      age: person.age,
      jobTitle: salaryman.jobTitle,
      salary: salaryman.salary,
    };
    return merge;
  };
  const person = { name: 'Alice', age: 30 };
  const employee = { jobTitle: 'Engineer', salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}

{
  // 4
  // 배열이 number[] 또는 string[]일 때, 배열의 첫 번째 요소를 반환하는 함수 getFirstElement를 작성하세요.
  // 배열이 비어 있을 경우 undefined를 반환해야 합니다. 반환값은 배열의 첫 번째 요소 타입과 동일해야 합니다.
  const getFirstElement = (
    arr: number[] | string[]
  ): number | string | undefined => {
    return arr[0];
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(['a', 'b', 'c'])); // "a"
  console.log(getFirstElement([])); // undefined
}

{
  // 5
  // 두 값을 받아서 두 값이 같으면 true를, 다르면 false를 반환하는 함수 isEqual을 작성하세요.
  // 입력 값은 string 또는 number일 수 있으며, 두 값이 동일하면 true를 반환하고, 다르면 false를 반환해야 합니다.
  const isEqual = (val1: number | string, val2: number | string): boolean => {
    return val1 === val2;
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual('hello', 'world')); // false
  console.log(isEqual(5, '5')); // false
}

{
  // 6
  // name과 age 속성을 가진 객체에 address를 추가하는 함수 updateAddress를 작성하세요.
  // address는 string 또는 undefined일 수 있습니다. address가 전달되지 않으면 기존 객체에 address는 포함되지 않아야 합니다.
  const updateAddress = (
    person: { name: string; age: number },
    address?: string
  ): { name: string; age: number; address?: string } => {
    if (address !== undefined) return { ...person, address: address };
    else return person;
  };

  const updatedPerson = updateAddress(
    { name: 'Jane', age: 28 },
    '123 Maple St'
  );
  console.log(updatedPerson);
  // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

  const updatedPersonWithoutAddress = updateAddress({ name: 'John', age: 22 });
  console.log(updatedPersonWithoutAddress);
  // 예상 출력: { name: "John", age: 22 }
}

{
  // 7
  // 두 값을 받아서 그 중 더 큰 값을 반환하는 함수 maxValue를 작성하세요.
  // 입력 값은 number 또는 string일 수 있으며, 숫자일 경우 그대로 반환하고,
  // 문자열일 경우 길이가 더 긴 문자열을 반환합니다. 만약 두 값이 같으면 그 값을 반환하세요.
  const maxValue = (val1: number | string, val2: number | string) => {
    if (typeof val1 === 'number' && typeof val2 === 'number')
      return val1 >= val2 ? val1 : val2;

    if (typeof val1 === 'string' && typeof val2 === 'string')
      return val1.length >= val2.length ? val1 : val2;

    throw new Error('differant Type');
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue('apple', 'banana')); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue('cat', 'dog')); // "dog"
}

{
  // 8
  // getValue 함수는 string 또는 number를 받아서 string 값을 반환합니다. number인 경우에는 그 값을 string으로 변환하고, string인 경우 그대로 반환합니다.
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(val: number): string;
  function getValue(val: string): string;
  function getValue(val: number | string) {
    return val.toString();
  }

  console.log(getValue(123)); // "123"
  console.log(getValue('abc')); // "abc"
}

{
  // 9
  // name, age 속성을 포함하는 객체와 email 속성을 포함하는 객체를 합쳐서 새로운 객체를 반환하는 createContact 함수를 작성하세요.
  // 두 객체를 합친 결과는 이름, 나이, 이메일을 포함해야 합니다
  type Person = { name: string; age: number };
  type Contact = { email: string };
  const createContact = (
    person: Person,
    contact: Contact
  ): Person & Contact => {
    return { ...person, ...contact };
  };

  const person = { name: 'Alice', age: 28 };
  const contact = { email: 'alice@example.com' };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

{
  // 10
  // age 값을 받아서, string일 경우 나이로 변환하여 처리하고, number일 경우 그대로 반환하는 getAge 함수를 작성하세요.
  // 만약 string을 받았을 경우에는 그 값을 number로 변환하여 반환해야 합니다. 변환할 수 없는 string이면 NaN을 반환합니다.
  const getAge = (age: string | number) => {
    if (typeof age === 'string') return Number(age);
    if (typeof age === 'number') return age;
    if (typeof age === 'undefined') return NaN;
  };

  console.log(getAge('25')); // 25
  console.log(getAge(30)); // 30
  console.log(getAge('abc')); // NaN
}
