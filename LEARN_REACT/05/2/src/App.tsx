// 이벤트
// JSX 특징 -> 속성은 카멜케이스로 작성한다.
// 이벤트 객체
// import Button from "./components/Button";
export default function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e); //명시적으로 전달해서 사용해야 함.
    console.log(event);
  };
  // const handleClick2 = () => {
  //   // alert("hello");
  // };
  return (
    <>
      <button onClick={(e) => handleClick(e)}>클릭</button>
      {/* <button onClick={handleClick}>클릭</button> */}
      {/* <button onClick={() => handleClick("kim")}>클릭</button> */}
      {/* <Button handleClick={handleClick} handleClick2={handleClick2} /> */}
    </>
  );
}
