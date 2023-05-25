import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
  updatePostActionCreater,
  updateNewMessageTextActionCreater,
  deletePostActionCreater,
} from "../../redux/news-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

import News from "./News";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newsPage: state.newsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreater(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreater());
    },
    updatePost: (id) => {
      let action = updatePostActionCreater(id);
      dispatch(action);
    },
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreater(text);
      dispatch(action);
    },
    deletePost: (id) => {
      let action = deletePostActionCreater(id);
      dispatch(action);
    },
  };
};

let AuthRedirectComponent = withAuthRedirect(News);
const NewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);
export default NewsContainer;
