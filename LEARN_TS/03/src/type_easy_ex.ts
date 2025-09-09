{
  // 1
  // 사람을 나타내는 Person 타입을 정의하세요. 이 타입은 name (문자열), age (숫자) 속성을 가집니다.
  // 그리고 이를 사용하는 getPersonInfo 함수를 작성하여 Person 객체를 출력하세요.
  type Person = {
    name: string;
    age: number;
  };
  function getPersonInfo(obj: Person): Person {
    return obj;
  }
  const p1 = getPersonInfo({ name: 'kim', age: 13 });
  console.log(p1);
}

{
  // 2
  // Config 타입을 정의하여 host (문자열), port (숫자), ssl (불린값)을 갖는 객체 타입입니다. createConfig 함수는 Config 타입을 반환하도록 하세요.
  //code
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };

  function createConfig(host: string, port: number, ssl: boolean): Config {
    return {
      host: host,
      port: port,
      ssl: ssl,
    };
  }

  const config = createConfig('localhost', 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

{
  // 3
  // Rectangle 타입을 정의하여 width (숫자)와 height (숫자) 속성을 가지게 하세요. calculateArea 함수를 작성하여 Rectangle 객체의 면적을 계산하세요.
  type Rectangle = {
    width: number;
    height: number;
  };
  const calculateArea = (rect: Rectangle): number => {
    return rect.height * rect.width;
  };
  const result = calculateArea({ width: 3, height: 4 });
  console.log(result);
}

{
  // 4
  // Student 타입을 정의하여 name (문자열), age (숫자), grades (숫자 배열) 속성을 포함하게 하세요.
  // calculateAverageGrade 함수를 작성하여 평균 성적을 계산하세요.
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };
  const calculateAverageGrade = (std: Student): number => {
    return std.grades.reduce((acc, cur) => acc + cur) / std.grades.length;
  };
  const result = calculateAverageGrade({
    name: 'kim',
    age: 13,
    grades: [90, 100, 88, 59],
  });

  console.log(result);
}

{
  // 5
  type Response = {
    status: string;
    data: string;
    message: string;
  };
  const createResponse = (
    status: string,
    data: string,
    message: string
  ): Response => {
    return { status, data, message };
  };

  console.log(createResponse('success', 'John', 'fetch success')); // { status: 'success', data: 'John', message: 'fetch success'
}

{
  // 6
  // Employee 타입을 작성하여 id (문자열), name (문자열), position (문자열) 속성을 가집니다. getEmployeeInfo 함수에서 이 정보를 반환하도록 하세요.
  //code
  type Employee = {
    id: string;
    name: string;
    position: string;
  };
  const getEmployeeInfo = (p1: Employee): string => {
    return `${p1.name} works as a ${p1.position} with ID: ${p1.id}`;
  };
  console.log(
    getEmployeeInfo({ id: '1', name: 'james', position: 'developer' })
  ); // "james works as a developer with ID: 1."
}

{
  // 7
  // Circle 타입을 작성하여 radius (숫자) 속성을 가지게 하세요. calculateCircumference 함수에서 원의 둘레를 계산하는 기능을 작성하세요.
  type Circle = {
    radius: number;
  };
  function calculateCircumference(cir: Circle): number {
    return cir.radius * 2 * Math.PI;
  }
  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

{
  // 8
  //code
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };
  // 원본 금액 - 할인된 금액(원본금액 * (할인율 / 100))
  function getDiscountedPrice(product: Product, discount: number): number {
    return product.price - product.price * (discount / 100);
  }

  console.log(
    getDiscountedPrice({ name: 'bag', price: 1000, inStock: true }, 10)
  ); // 900
}

{
  // 9
  //code..
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  function getBookSummary(book: Book): string {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}.`;
  }

  console.log(
    getBookSummary({ title: 'river', author: 'james', publishedYear: 2020 })
  ); // "river by james, published in 2020."
}

{
  // 10
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };
  function isValidTransaction(transition: Transaction): boolean {
    return transition.amount > 0;
  }
}
