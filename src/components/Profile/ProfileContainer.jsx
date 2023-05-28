import { Navigate } from "react-router-dom";
import { checkUsers } from "../../redux/users-reducer";
import Profile from "./Profile";
import { useSelector } from "react-redux";
function ProfileContainer() {
  let currentUser = useSelector((state) => state.usersInfo.currentUser);
  let logInfo = JSON.parse(localStorage.getItem("logInfo"));
  if (!logInfo) return <Navigate to="/sign-up" />;

  logInfo.users.forEach((element) => {
    if (element.isAuth) {
      currentUser.login = element.login;
      currentUser.isAuth = element.isAuth;
    }
  });

  if (!currentUser.isAuth) return <Navigate to="/sign-in" />;
  checkUsers();

  let imagesUser = currentUser.images.map((p) => (
    <img src={`./img/${p}`} alt="usersImg" key={p}></img>
  ));
  return <Profile imagesUser={imagesUser} currentUser={currentUser} />;
}

export default ProfileContainer;
