import rs from "./RegSignUp.module.css";
import ns from "../Nav/Nav.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../../context";

function RegSignUp() {
  const { store } = useContext(Context);
  let Navig = useNavigate();
  const [password, setPassword] = useState();
  const [login, setLogin] = useState();
  const checkUser = (usersArray, existLogin, existPassword) => {
    for (let i = 0; i < usersArray.length; i++) {
      if (
        usersArray[i].login == existLogin &&
        usersArray[i].password == existPassword
      ) {
        return true;
      }
    }
    return false;
  };
  function clickButton(event) {
    let logInfo = JSON.parse(localStorage.getItem("logInfo"));
    if (login != "" && password != "") {
      if (logInfo) {
        if (checkUser(logInfo.users, login, password)) {
          alert("User Exist!!");
          Navig("/sign-in");
        } else {
          logInfo.users.push({
            login: login,
            password: password,
            isAuth: false,
          });
          localStorage.setItem("logInfo", JSON.stringify(logInfo));
          Navig("/sign-in");
        }
      } else {
        localStorage.setItem(
          "logInfo",
          JSON.stringify({
            users: [{ login: login, password: password, isAuth: false }],
          })
        );
        Navig("/sign-in");
      }
    } else {
      alert("Login or password is empty");
    }
  }

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
          <input placeholder={"Электронный адрес"} type="email" />
          <input placeholder={"Имя и фамилия"} />
          <input
            placeholder={"Имя пользователя"}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder={"Пароль"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={rs.privacyPolicy}>
          <p>
            Регистрируясь, вы принимаете наши{" "}
            <b>Условия, Политику конфедициональности</b> и{" "}
            <b>Политику в отношении файлов cookie</b>.
          </p>
        </div>

        <button
          className={rs.signUpButton}
          onClick={(event) => clickButton(event)}
        >
          Регистрация
        </button>
      </div>
      <div className={rs.signInContainer}>
        <div className={rs.signInLink}>
          <p>
            Есть аккаунт?
            <NavLink
              to="/sign-in"
              className={(navData) => (navData.isActive ? ns.active : "")}
            >
              {" "}
              Войти
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegSignUp;
