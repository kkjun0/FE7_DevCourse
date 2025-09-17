import Profile from './components/Profile';
export default function App() {
  const Event = () => {
    alert('팔로우 되었습니다.');
  };
  return (
    <>
      <Profile
        bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        Event={Event}
      />
    </>
  );
}
