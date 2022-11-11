import rs from "./RegSignIn.module.css";
import ns from "../Nav/Nav.module.css";
import {NavLink} from "react-router-dom";

function RegSignIn() {
  return (
    <div className={rs.Registration}>
      <div className={rs.signInContainer}>
        <div className={rs.title}>
          <h1 className={rs.title}>LogBook</h1>
        </div>
        <div className={rs.inputData}>
          <input placeholder={"Имя пользователя или эл. адрес"} />
          <input placeholder={"Пароль"} />
        </div>
        <div className={rs.signInButton}>
          <span>Войти</span>
        </div>
        <div className={rs.helpButtons}>
          <span>Забыли пароль?</span>
        </div>
      </div>
      <div className={rs.signUpContainer}>
        <div className={rs.signUpLink}>
          <p>
            У вас нет аккаунта?
            <NavLink
                to="/sign-up"
                className={(navData) => (navData.isActive ? ns.active : "")}
            > Зарегистрируйтесь
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegSignIn;
