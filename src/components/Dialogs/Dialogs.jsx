import ds from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import Users from "./Users/Users";
import { NavLink } from "react-router-dom";
import { Context } from "./../../context";
import { useContext } from "react";
function Dialogs() {
  const { usersDialog } = useContext(Context);
  return (
    <div className={ds.Dialogs}>
      <div className={`${ds.containerDialogs} container`}>
        <div className={ds.containerUser}>
          {usersDialog.map((user) => (
            <NavLink
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
