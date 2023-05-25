import { connect } from "react-redux";
import { FollowAC, setUsersAC, UnFollowAC } from "../../redux/users-reducer";
import Users from "./Users";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    users: state.usersInfo.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(FollowAC(userId));
    },
    unFollow: (userId) => {
      dispatch(UnFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};
let AuthRedirectComponent = withAuthRedirect(Users);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);
