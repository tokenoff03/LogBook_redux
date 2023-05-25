import us from "./Users.module.css";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";
function Users(props) {
  const [value, setValue] = useState("");

  function changeTextInSearch(value) {
    setValue(value);
  }

  function clearSearchText() {
    setValue("");
  }

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
  return (
    <div className={`${us.containerMain} container`}>
      <div>
        <div className={us.form}>
          <input
            className={us.searchInput}
            value={value}
            placeholder="Searching"
            onChange={(e) => changeTextInSearch(e.target.value)}
          ></input>
          <button onClick={clearSearchText}>Clear</button>
        </div>
      </div>
      <div className={value == "" ? "" : "disable"}>
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
      <div className={value == "" ? "disable" : ""}>
        {props.users.map((u) =>
          u.name.includes(value) ? (
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
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Users;
