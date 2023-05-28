import ms from "./Messages.module.css";

import React from "react";

function Messages(props) {
  return (
    <div className={ms.Messages}>
      <p>{props.message}</p>
    </div>
  );
}

export default Messages;
