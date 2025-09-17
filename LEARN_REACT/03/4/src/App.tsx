import User from './components/User';

export default function App() {
  return (
    <>
      <User
        name={'준영'}
        age={20}
        address={{ zipcode: 111, detail: 'seoul' }}
      />
    </>
  );
}
