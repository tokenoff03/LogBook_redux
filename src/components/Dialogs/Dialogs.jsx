import ds from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import Users from "./Users/Users";
import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { Context } from "./../../context";
import { useContext } from "react";
import {
  sendMessageActionCreater,
  updateNewMessageTextActionCreater,
} from "./../../redux/dialogs-reducer";

function Dialogs() {
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

  let messages = store
    .getState()
    .dialogsPage.messages.map((p) => <Messages message={p.message} />);

  let newMessageElement = React.createRef();
  let sendMessage = () => {
    store.dispatch(sendMessageActionCreater());
    newMessageElement.current.value = "";
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    let action = updateNewMessageTextActionCreater(text);
    store.dispatch(action);
  };

  const handleKeyUp = (e) => {
    if (e.key == "Enter") sendMessage();
  };

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
          <div className={ds.messageItems}>{messages}</div>

          <div className={ds.inputBlock}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-emoji-smile"
              viewBox="0 0 16 16"
              id="IconChangeColor"
            >
              {" "}
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                id="mainIconPathAttribute"
              ></path>{" "}
              <path
                d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"
                id="mainIconPathAttribute"
              ></path>{" "}
            </svg>
            <input
              type="textarea"
              placeholder="Напишите сообщение..."
              ref={newMessageElement}
              onChange={onMessageChange}
              onKeyUp={(e) => handleKeyUp(e)}
            />
            <button onClick={sendMessage}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
