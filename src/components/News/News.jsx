import ns from "./News.module.css";
import React from "react";

function News(props) {
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
        {props.posts}
      </div>
    </div>
  );
}

export default News;
