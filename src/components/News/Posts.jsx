import ns from "./News.module.css";
import { Context } from "../../context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function Posts(props) {
  return (
    <div className={ns.Posts}>
      <div className={ns.containerPosts}>
        <img src="user.png" alt="user" />
        <div className={ns.message}>{props.message}</div>
      </div>
    </div>
  );
}

export default Posts;
