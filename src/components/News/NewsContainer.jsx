import {
  addPostActionCreater,
  updateNewPostTextActionCreater,
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
  };
};

let AuthRedirectComponent = withAuthRedirect(News);
const NewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);
export default NewsContainer;
