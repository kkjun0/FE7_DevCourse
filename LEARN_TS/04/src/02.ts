{
  // enum(이넘)
  type MoveX = 'left' | 'right';
  function characterMoveX(direction: MoveX): void {
    if (direction === 'left') {
      console.log('왼쪽으로 이동');
    }
    if (direction === 'right') {
      console.log('오른쪽으로 이동');
    }
  }

  characterMoveX('left');
  characterMoveX('right');

  type Move = 'left' | 'right' | 'up' | 'down';
  function vehicleMoveX(direction: Move): void {
    if (direction === 'left') {
      console.log('왼쪽으로 이동');
    }
    if (direction === 'right') {
      console.log('오른쪽으로 이동');
    }
    if (direction === 'up') {
      console.log('위쪽으로 이동');
    }
    if (direction === 'down') {
      console.log('아래쪽으로 이동');
    }
  }

  vehicleMoveX('up');
  vehicleMoveX('down');
  vehicleMoveX('left');
  vehicleMoveX('right');
}
{
  // 이넘 (enum)
  // 고정된 값들의 집합을 정의하는 데 사용하는 특수한 타입
  enum CharacterMoveX {
    LEFT,
    RIGHT,
  } // 방향

  enum RotationMoveX {
    LEFT,
    RIGHT,
  } // 회전

  function characterMoveX(direction: CharacterMoveX | RotationMoveX): void {
    if (direction === CharacterMoveX.LEFT) {
      console.log('왼쪽으로 이동');
    }
    if (direction === CharacterMoveX.RIGHT) {
      console.log('오른쪽으로 이동');
    }
  }

  characterMoveX(CharacterMoveX.LEFT);
  characterMoveX(CharacterMoveX.RIGHT);

  characterMoveX(RotationMoveX.RIGHT);
  characterMoveX(RotationMoveX.LEFT);
}

{
  // 숫자형 enum
  enum Direction {
    UP = 200, // 0
    DOWN = 100, // 100
    LEFT = 300, // 300
    RIGHT, // 301
  }

  console.log(Direction.UP); // 0
  console.log(Direction.DOWN); // 1
  console.log(Direction.LEFT); // 1
  console.log(Direction.RIGHT); // 2
}
{
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }

  function handleResponse(code: StatusCode) {
    switch (code) {
      case StatusCode.OK:
        return '성공';
      case StatusCode.BadRequest:
        return '실패';
      case StatusCode.Unauthorized:
        return '인증에러';
      case StatusCode.NotFound:
        return '찾을 수 없음';
    }
  }

  handleResponse(StatusCode.BadRequest);
}

{
  enum StatusCode {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
  }

  function handleResponse(code: StatusCode) {
    switch (code) {
      case StatusCode.OK:
        return '성공';
      case StatusCode.BadRequest:
        return '실패';
      case StatusCode.Unauthorized:
        return '인증에러';
      case StatusCode.NotFound:
        return '찾을 수 없음';
    }
  }

  handleResponse(StatusCode.BadRequest);
}

{
  // 혼합 enum(열거형)
  enum Mix {
    YES = 1,
    NO = 'NO',
  }
  console.log(Mix);
  enum Direction {
    RIGHT = 200,
    LEFT = 300,
    UP = 'right',
    DOWN = 'left',
  }
}

{
  // 리버스 매핑(역방향 매핑)
  // 숫자형 이넘에만 지원한 개념
  enum Direction {
    UP,
    DOWN, // 201
    LEFT, // 202
    RIGHT,
  }

  console.log(Direction.UP); // 0
  console.log(Direction[0]); // 'UP'
}

{
  enum Key {
    ArrowUp,
    ArrowDown,
  }

  function onKeyPressed(code: Key) {
    console.log('Pressed : ' + Key[code]);
  }

  onKeyPressed(Key.ArrowDown); // 1
  onKeyPressed(1);
}
{
  enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }
  const enum Direction2 {
    UP,
    DOWN,
    LEFT,
    RIGHT,
  }

  type Direction3 = 'UP' | 'DOWN';
}

{
  // 객체 - interface (type)
  // 리터럴 타입 - enum (const enum)
  // 타입 별칭 - 유니온타입, 인터섹션
  const enum Role {
    ADMIN = 'admin',
    GUEST = 'guest',
  }

  interface Account {
    id: number;
    role: Role;
  }

  type AuthAccount = Account & { token?: string };
}
