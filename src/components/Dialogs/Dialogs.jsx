import ds from "./Dialogs.module.css";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Dialogs(props) {
  useEffect(() => {
    // Логика, которую вы хотите выполнить при монтировании компонента
    alert("DidMounted");

    return () => {
      alert("Unmounted: Are you sure?");
      // Логика при размонтировании компонента
    };
  }, []);
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

  let newMessageElement = React.createRef();
  let sendMessage = () => {
    props.sendMessage();
    newMessageElement.current.value = "";
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className={ds.Dialogs}>
      <div className={`${ds.containerDialogs} container`}>
        <div className={ds.containerUser}>{props.users}</div>
        <div className={ds.containerMessage}>
          <div className={ds.messageItems}>{props.messages}</div>

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
              value={props.dialogsPage.newMessageText}
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
