export default function Cmessageld({
  message,
  num,
  fruit,
  obj,
  bol,
  onclick,
  name = '홍길동',
  style,
  Header,
}: {
  message: string;
  num: number;
  fruit: string[];
  obj: {
    name: string;
    age: number;
  };
  bol: boolean;
  onclick: () => void;
  name: string;
  style: { [key: string]: string };
  Header: React.ReactNode;
}) {
  const isLoggedIn = bol;
  return (
    <>
      <h1>
        {message}, {num} ,{fruit[0]}
      </h1>
      <h1>
        {obj.name},{obj.age}
      </h1>
      {isLoggedIn && <h2>로그인됨</h2>}
      {!isLoggedIn && <h2>로그인안됨</h2>}
      <button onClick={onclick}>클릭</button>
      <h3>{name}</h3>
      <h3 style={style}>스타일</h3>
      {Header}
    </>
  );
}
