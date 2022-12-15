import us from "./Users.module.css";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
function Users(props) {
  let currentUser = useSelector((state) => state.usersInfo.currentUser);
  let logInfo = JSON.parse(localStorage.getItem("logInfo"));
  if (!logInfo) return <Navigate to="/sign-up" />;

  logInfo.users.forEach((element) => {
    if (element.isAuth) {
      currentUser.login = element.login;
      currentUser.isAuth = element.isAuth;
    }
  });

  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }
  if (!currentUser.isAuth) return <Navigate to="/sign-in" />;
  return (
    <div className={`${us.containerMain} container`}>
      {props.users.map((u) => (
        <div className={us.usersContainer} key={u.id}>
          <div className={us.leftSide}>
            <span className={us.circleImage}>
              <img
                src={u.photos.small != null ? u.phtos.small : `user.png`}
                alt="user"
              />
            </span>
            {u.followed ? (
              <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.id)}>Follow</button>
            )}
          </div>
          <div className={us.rightSide}>
            <div className={us.name}>
              <p>{u.name}</p>
            </div>

            <div className={us.location}>
              <p>{/* {u.location.country}, <br /> {u.location.city} */}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
