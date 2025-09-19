import { useState } from 'react';
import Count from './components/Count';
import CountOutSide from './components/CountOutSide';

export default function App() {
  const [value, setValue] = useState(0);
  const handlePlus = (num: number) => {
    if (num === 0) setValue(0);
    if (num === 1 || num === -1) setValue(() => value + num);
    return;
  };
  return (
    <>
      <Count value={value} handlePlus={handlePlus} />
      <CountOutSide value={value} />
    </>
  );
}
