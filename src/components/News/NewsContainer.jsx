import React from "react";
import { Context } from "../../context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { checkUsers } from "../../redux/users-reducer";
import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../redux/news-reducer";
import Posts from "./Posts";
import News from "./News";

function NewsContainer() {
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

  let addPost = () => {
    store.dispatch(addPostActionCreater());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreater(text);
    store.dispatch(action);
  };
  checkUsers();
  let posts = store
    .getState()
    .newsPage.posts.map((p) => (
      <Posts
        message={p.message}
        currentUser={store.getState().usersInfo.currentUser}
      />
    ));
  return (
    <News updateNewPostText={onPostChange} addPost={addPost} posts={posts} />
  );
}

export default NewsContainer;
