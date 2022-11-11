import rs from "./RegSignUp.module.css";
import ns from "../Nav/Nav.module.css";
import {NavLink} from "react-router-dom";

function RegSignUp() {
  return (
    <div className={rs.Registration}>
      <div className={rs.signUpContainer}>
        <div className={rs.title}>
          <h1 className={rs.title}>LogBook</h1>
        </div>
        <div className={rs.note}>
          <h3>Зарегистрируйтесь, чтобы увидеть фото и посты ваших друзей</h3>
        </div>
        <div className={rs.inputData}>
          <input placeholder={"Электронный адрес"}/>
          <input placeholder={"Имя и фамилия"}/>
          <input placeholder={"Имя пользователя"}/>
          <input placeholder={"Пароль"}/>
        </div>
        <div className={rs.privacyPolicy}>
          <p>
            Регистрируясь, вы принимаете наши <b>Условия, Политику конфедициональности</b> и <b>Политику в отношении файлов cookie</b>.
          </p>
        </div>
        <div className={rs.signUpButton}>
          <span>Регистрация</span>
        </div>
      </div>
      <div className={rs.signInContainer}>
        <div className={rs.signInLink}>
          <p>
            Есть аккаунт?
            <NavLink
                to="/sign-in"
                className={(navData) => (navData.isActive ? ns.active : "")}
            > Войти
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegSignUp;
