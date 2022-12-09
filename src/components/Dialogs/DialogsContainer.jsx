import ds from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import Users from "./Users/Users";
import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { Context } from "../../context";
import { useContext } from "react";
import {
  sendMessageActionCreater,
  updateNewMessageTextActionCreater,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer() {
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

  let users = store.getState().dialogsPage.usersDialog.map((user) => (
    <NavLink
      key={user.id}
      to={`${user.id}`}
      className={(navData) => (navData.isActive ? ds.active : "")}
    >
      <Users fullName={user.name} />
    </NavLink>
  ));
  let messages = store
    .getState()
    .dialogsPage.messages.map((p) => <Messages message={p.message} />);

  let sendMessage = () => {
    store.dispatch(sendMessageActionCreater());
  };

  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreater(text);
    store.dispatch(action);
  };

  return (
    <Dialogs
      updateNewMessageText={onMessageChange}
      messages={messages}
      sendMessage={sendMessage}
      users={users}
    />
  );
}

export default DialogsContainer;
