import ms from "./Messages.module.css";
import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "./../../../context";
function Messages(props) {
  return (
    <div className={ms.Messages}>
      <p>{props.message}</p>
    </div>
  );
}

export default Messages;
