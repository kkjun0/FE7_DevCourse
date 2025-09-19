export default function CountButton(props: {
  handlePlus: (num: number) => void;
}) {
  return (
    <>
      <button onClick={() => props.handlePlus(-1)}>감소</button>
      <button onClick={() => props.handlePlus(0)}>0</button>
      <button onClick={() => props.handlePlus(1)}>증가</button>
    </>
  );
}
