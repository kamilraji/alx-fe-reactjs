import { useContext } from "react";
import UserContext from "./context/UserContext";
import UserInfo from "./UserInfo";

function UserProfile() {
  const userData = useContext(UserContext);

  return <UserInfo userData={userData} />;
}

export default UserProfile;
