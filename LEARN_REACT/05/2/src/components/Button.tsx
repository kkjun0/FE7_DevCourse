export default function Button({
  children,
  handleClick,
}: {
  children: string;
  handleClick: (name: string) => void;
}) {
  return (
    <>
      <button onClick={() => handleClick('kim')}>{children}</button>
    </>
  );
}
