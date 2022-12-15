import ns from "./News.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { checkUsers } from "../../redux/users-reducer";
import Posts from "./Posts";

function News(props) {
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
  checkUsers();
  let posts = props.newsPage.posts.map((p) => (
    <Posts message={p.message} currentUser={currentUser} key={p.id} />
  ));

  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
    newPostElement.current.value = "";
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") addPost();
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
