import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
} from "../../redux/news-reducer";

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
  };
};

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
export default NewsContainer;
