import ps from "./Profile.module.css";
import { Context } from "../../context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function Profile() {
  const { store } = useContext(Context);
  let logInfo = JSON.parse(localStorage.getItem("logInfo"));
  if (!logInfo) return <Navigate to="/sign-up" />;

  logInfo.users.forEach((element) => {
    if (element.isAuth) {
      store.getState().currentUser.login = element.login;
      store.getState().currentUser.isAuth = element.isAuth;
    }
  });

  if (!store.getState().currentUser.isAuth) return <Navigate to="/sign-in" />;
  return (
    <div className={ps.Profile}>
      <div className={ps.container}>
        <div className={ps.header}>
          <div className={ps.headerLeft}>
            <img
              className={ps.headerLeftLogo}
              width={150}
              height={150}
              src="/img/logo.png"
              alt="photo"
            />
          </div>
          <div className={ps.headerRight}>
            <div className={ps.ProfileName}>
              <h2>{store.getState().currentUser.login}</h2>

              {/*<a className={ps.ProfileEdit}>Редактировать профиль</a>*/}
              {/*<img className={ps.ProfileSetting} width={24} height={24} src="/img/settings.png"/>*/}
            </div>

            <ul className={ps.ProfileFriends}>
              <li className={ps.ProfileFriend}>
                <span>3</span> пубкликаций
              </li>
              <li className={ps.ProfileFriend}>
                <span>168</span> подписчиков
              </li>
              <li className={ps.ProfileFriend}>
                <span>206</span> друзья
              </li>
            </ul>

            <div className={ps.ProfileInformation}>
              <span>Askhvt_Kaym kz</span>
              <br />
              <div>
                IITU'24
                <br />
                19 y.o.
                <br />
                Личная жизнь, не выставляемая на показ, приносит столько
                радости. Словно это и есть настоящая жизнь.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
