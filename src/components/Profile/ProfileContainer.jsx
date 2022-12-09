import ps from "./Profile.module.css";
import { Context } from "../../context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { checkUsers } from "../../redux/users-reducer";
import Profile from "./Profile";
function ProfileContainer() {
  const { store } = useContext(Context);
  let logInfo = JSON.parse(localStorage.getItem("logInfo"));
  if (!logInfo) return <Navigate to="/sign-up" />;

  logInfo.users.forEach((element) => {
    if (element.isAuth) {
      store.getState().usersInfo.currentUser.login = element.login;
      store.getState().usersInfo.currentUser.isAuth = element.isAuth;
    }
  });

  if (!store.getState().usersInfo.currentUser.isAuth)
    return <Navigate to="/sign-in" />;
  checkUsers();

  let imagesUser = store
    .getState()
    .usersInfo.currentUser.images.map((p) => (
      <img src={`./img/${p}`} alt="usersImg" key={p}></img>
    ));
  return (
    <Profile
      imagesUser={imagesUser}
      currentUser={store.getState().usersInfo.currentUser}
    />
  );
}

export default ProfileContainer;
