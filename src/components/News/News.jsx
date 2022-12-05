import ns from "./News.module.css";
import React from "react";
import { Context } from "../../context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Posts from "./Posts";
import { checkUsers } from "../../redux/users-reducer";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../redux/news-reducer";

function News() {
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

  let newPostElement = React.createRef();
  let posts = store
    .getState()
    .newsPage.posts.map((p) => <Posts message={p.message} />);

  let addPost = () => {
    store.dispatch(addPostActionCreater());
    newPostElement.current.value = "";
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreater(text);
    store.dispatch(action);
  };

  const handleKeyUp = (e) => {
    if (e.key == "Enter") addPost();
  };
  checkUsers();
  return (
    <div className={ns.News}>
      <div className={ns.container}>
        <div className={ns.postContent}>
          <textarea
            cols="50"
            rows="5"
            ref={newPostElement}
            onChange={onPostChange}
            onKeyUp={(e) => handleKeyUp(e)}
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
