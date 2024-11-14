import { useAuthContext } from "../context/AuthContext";

const MyLibrary = () => {
  const { isLoggedIn } = useAuthContext();

  if (isLoggedIn) return <h1>Test</h1>;
};

export default MyLibrary;
