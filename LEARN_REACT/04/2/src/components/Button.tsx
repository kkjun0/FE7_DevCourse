export default function Button({
  children,
  onClick,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
}
