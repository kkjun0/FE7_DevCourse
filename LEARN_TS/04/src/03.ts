{
  // 인덱스 접근 타입
  // 객체 타입에서 특정 키를 사용해 그 키의 값 타입을 추출하는 문법
  // 런타임에서 객체의 속성으로 값을 꺼내듯이, 타입차원에서 타입 속성으로 값의 타입을 꺼내는 것
  type Person = {
    name: string;
    age: number;
  };

  type NameType = Person['name'];
  type AgeType = Person['age'];

  type NameAndAge = Person['name' | 'age'];
}

{
  // const 단언
  // 값을 -> 리터럴
  // 객체의 속성의 값을 -> readonly
  let x = 'Hello' as const;
  const numArr = [1, 2, 3] as const;
  const obj = {
    name: 'kim',
    age: 20,
  } as const;
}

{
  enum Status {
    Pending = 'PENDING',
    Success = 'SUCCESS',
    Fail = 'FAIL',
  }

  const options = Object.values(Status).map((value) => ({
    label: value,
    value,
  }));

  console.log(options);
}

{
  const Status = {
    Pending: 'PENDING',
    Success: 'SUCCESS',
    Fail: 'FAIL',
  } as const;

  type Status = (typeof Status)[keyof typeof Status];
}

{
  const LoginStatus = {
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT: 'LOGGED_OUT',
  } as const;

  type LoginStatus = (typeof LoginStatus)[keyof typeof LoginStatus];

  function checkLoginStatus(status: LoginStatus): string {
    if (status === LoginStatus.LOGGED_IN) return 'You are logged in.';
    if (status === LoginStatus.LOGGED_OUT) return 'You are logged out.';
    return 'Unknown status';
  }
}
