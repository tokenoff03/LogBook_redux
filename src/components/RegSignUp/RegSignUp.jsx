import rs from "./RegSignUp.module.css";
import ns from "../Nav/Nav.module.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function RegSignUp() {
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
    if (localStorage.getItem("logInfo")) {
      let log_info = JSON.parse(localStorage.getItem("logInfo"));
      if (checkUser(log_info.users, login, password)) {
        alert("User Exist!!");
      } else {
        log_info.users.push({ login: login, password: password });
        localStorage.setItem("logInfo", JSON.stringify(log_info));
      }
    } else {
      let log_info = [{ login: login, password: password }];
      localStorage.setItem("logInfo", JSON.stringify({ users: log_info }));
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
        <NavLink to="/sign-in">
          <button
            className={rs.signUpButton}
            onClick={(event) => clickButton(event)}
          >
            Регистрация
          </button>
        </NavLink>
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
