export default function User(props: {
  name: string;
  age: number;
  address: { zipcode: number; detail: string };
}) {
  console.log(props);
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.address.zipcode}</h1>
    </>
  );
}
