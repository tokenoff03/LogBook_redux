import ds from "./Dialogs.module.css";
import Messages from "./Messages/Messages";
import DialogUsers from "./DialogUsers/DialogUsers";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  sendMessageActionCreater,
  updateNewMessageTextActionCreater,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.dialogsPage.usersDialog.map((user) => (
      <NavLink
        key={user.id}
        to={`${user.id}`}
        className={(navData) => (navData.isActive ? ds.active : "")}
      >
        <DialogUsers fullName={user.name} />
      </NavLink>
    )),
    messages: state.dialogsPage.messages.map((p) => (
      <Messages message={p.message} key={p.id} />
    )),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreater());
    },
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreater(text);
      dispatch(action);
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
