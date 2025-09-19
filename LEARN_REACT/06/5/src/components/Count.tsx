import CountButton from './CountButton';
import CountDisplay from './CountDisplay';

export default function Count(props: {
  value: number;
  handlePlus: (num: number) => void;
}) {
  return (
    <>
      <CountDisplay value={props.value} />
      <CountButton handlePlus={props.handlePlus} />
    </>
  );
}
