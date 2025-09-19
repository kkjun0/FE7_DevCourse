import { useState } from 'react';
// 리렌더링(rerendering)
export default function App() {
  const [count, setCount] = useState(0); // useState<number>(0)
  const handleIncrement = () => {
    // setCount(count + 1); // 0 -> 1
    // setCount(count + 1); // 1 -> 2
    // setCount(count + 1); // 2 -> 3
    // setCount(10); // setCount(값)
    setCount((prev) => prev + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    // setCount((count) => count + 1); // setCount(콜백함수)
  };
  const [name, setName] = useState('');
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>증가</button>
      <h1>name: {name}</h1>
      <button onClick={() => setName('kim')}>이름변경</button>
    </>
  );
}
