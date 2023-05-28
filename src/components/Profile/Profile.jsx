import { useEffect } from "react";
import ps from "./Profile.module.css";
function Profile(props) {
  useEffect(() => {
    // Логика, которую вы хотите выполнить при монтировании компонента
    alert("DidMounted");

    return () => {
      alert("Unmounted: Are you sure?");
      // Логика при размонтировании компонента
    };
  }, []);

  return (
    <div className={ps.Profile}>
      <div className={ps.container}>
        <div className={ps.header}>
          <div className={ps.headerLeft}>
            <span className={ps.circleImage}>
              <img
                className={ps.headerLeftLogo}
                src={`/img/${props.currentUser.photoProfile}`}
                alt="photo"
              />
            </span>
          </div>
          <div className={ps.headerRight}>
            <div className={ps.ProfileName}>
              <h2>{props.currentUser.login}</h2>

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
              <span>{props.currentUser.name}</span>
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
      <div className={ps.imagesBlock}>{props.imagesUser}</div>
    </div>
  );
}

export default Profile;
