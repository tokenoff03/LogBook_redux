import us from "./Users.module.css";

function Users(props) {
  return (
    <div className={us.Users}>
      <div className={us.usersItems}>
        <img src="user.png" alt="User" />
        <div className={us.infoBlock}>
          <p className={us.name}>{props.fullName}</p>
          <p>some message</p>
        </div>
      </div>
    </div>
  );
}

export default Users;
