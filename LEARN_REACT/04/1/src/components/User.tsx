export default function User({
  userObj: { name, age },
  clickHandeler,
}: UserProps) {
  // const { name, age } = props;
  return (
    <>
      <h1>Name: {name} </h1>
      <h1>Age: {age} </h1>
      <button onClick={clickHandeler}>클릭</button>
    </>
  );
}
