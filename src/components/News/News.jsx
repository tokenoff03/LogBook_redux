import ns from "./News.module.css";
import React from "react";
import { Context } from "../../context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Posts from "./Posts";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../redux/state";

function News() {
  const { store } = useContext(Context);
  let logInfo = JSON.parse(localStorage.getItem("logInfo"));
  if (!logInfo) return <Navigate to="/sign-up" />;
  let currentUser;
  logInfo.users.forEach((element) => {
    if (element.isAuth) {
      currentUser = element;
    }
  });
  if (!currentUser) return <Navigate to="/sign-in" />;

  let newPostElement = React.createRef();
  let posts = store._state.newsPage.posts.map((p) => (
    <Posts message={p.message} />
  ));

  let addPost = () => {
    store.dispatch(addPostActionCreater());
    newPostElement.current.value = "";
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreater(text);
    store.dispatch(action);
  };
  return (
    <div className={ns.News}>
      <div className={ns.container}>
        <div className={ns.postContent}>
          <textarea
            cols="50"
            rows="5"
            ref={newPostElement}
            onChange={onPostChange}
          ></textarea>
          <hr />
          <button onClick={addPost}>Опубликовать</button>
        </div>
        {posts}
      </div>
    </div>
  );
}

export default News;
