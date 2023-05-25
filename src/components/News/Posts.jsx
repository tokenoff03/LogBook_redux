import ns from "./News.module.css";
import React, { useState } from "react";
function Posts(props) {
  const [checkEdit, setCheckEdit] = useState(true);
  function openEdit() {
    setCheckEdit(false);
  }
  let newMessageElement = React.createRef();

  function updatePosts(id) {
    props.updatePost(id);
    newMessageElement.current.value = "";
    setCheckEdit(true);
  }

  let deletePost = () => {
    props.deletePost(props.id);
  };

  let onTextChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };
  const handleKeyUp = (e, id) => {
    if (e.key === "Enter") updatePosts(id);
  };

  return (
    <div className={ns.Posts}>
      <div className={ns.containerPosts}>
        <span className={ns.circleImage}>
          <img src={`./img/${props.currentUser.photoProfile}`} alt="user" />
        </span>

        <div className={ns.containerPostsDetails}>
          <div className={ns.header}>
            <h4>{props.currentUser.login}</h4>
            <svg
              onClick={openEdit}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
            <button className={ns.btn} onClick={deletePost}>
              Delete
            </button>
          </div>
          {checkEdit ? (
            <div className={ns.message}>{props.message}</div>
          ) : (
            <div>
              <input
                ref={newMessageElement}
                type="text"
                onChange={onTextChange}
                onKeyUp={(e) => handleKeyUp(e, props.id)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Posts;
