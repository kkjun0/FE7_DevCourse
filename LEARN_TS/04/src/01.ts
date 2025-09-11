{
  // TODO: 나중에 타입 교체
  // any - 아무 값이나 대입, 사용할 수 있어 타입 검사를 우회하는 특수한 타입
  // unknown - 알 수 없는 타입 (안전한 any, 유연한 any)
  let x: unknown;
  x = 10.12;

  // unknown은 타입 좁히기 필요
  if (typeof x === 'number') {
    console.log(x.toFixed(2));
  }

  (x as number).toFixed(1);
  (<number>x).toFixed(1); // 리액트 안씀, JSX문법과 충돌남
}
