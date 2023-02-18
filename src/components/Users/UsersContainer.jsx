import { connect } from "react-redux";
import { FollowAC, setUsersAC, UnFollowAC } from "../../redux/users-reducer";
import Users from "./Users";

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
export default connect(mapStateToProps, mapDispatchToProps)(Users);
