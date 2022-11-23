import ns from "./News.module.css";
import React from "react";
import { Context } from "../../context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Posts from "./Posts";

function News() {
  const { store } = useContext(Context);
  let newPostElement = React.createRef();
  let posts = store._state.newsPage.posts.map((p) => (
    <Posts message={p.message} />
  ));

  let addPost = () => {
    store.addPost();
    newPostElement.current.value = "";
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    store.updateNewPostText(text);
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
          <hr/>
          <button onClick={addPost}>Опубликовать</button>
      </div>
        {posts}
      </div>
    </div>
  );
}

export default News;
