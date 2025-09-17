type User = {
  name: string;
  age: number;
};

interface UserProps {
  userObj: User;
  clickHandeler: () => void;
}
