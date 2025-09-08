// 타입추론
// 타입을 명시하지 않아도, 컴파일러가 값, 문맥, 흐름을 보고 적절한 타입을 자동으로 결정하는 기능
// 기본자료형 -> 타입추론
// 참조자료형 -> 타입명시
{
  let str = 'Hello';
  let num = 10;
  let bool = true;
  let undi = undefined;
  let nul: null = null;
  let sym = Symbol('a');
  let big = 100n;

  // TODO: 나중에 타입 지정하기
  let a: string;
  a = 'a';
}
