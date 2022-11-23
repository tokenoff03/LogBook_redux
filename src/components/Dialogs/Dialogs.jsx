import ds from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import Users from "./Users/Users";
import { NavLink, Navigate } from "react-router-dom";
import { Context } from "./../../context";
import { useContext } from "react";
function Dialogs() {
  const { store } = useContext(Context);
  let logInfo = JSON.parse(localStorage.getItem("logInfo"));
  let currentUser;
  logInfo.users.forEach((element) => {
    if (element.isAuth) {
      currentUser = element;
    }
  });
  if (!currentUser) return <Navigate to="/sign-in" />;
  return (
    <div className={ds.Dialogs}>
      <div className={`${ds.containerDialogs} container`}>
        <div className={ds.containerUser}>
          {store.getState().dialogsPage.usersDialog.map((user) => (
            <NavLink
              key={user.id}
              to={`${user.id}`}
              className={(navData) => (navData.isActive ? ds.active : "")}
            >
              <Users fullName={user.name} />
            </NavLink>
          ))}
        </div>
        <div className={ds.containerMessage}>
          <Messages />
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
