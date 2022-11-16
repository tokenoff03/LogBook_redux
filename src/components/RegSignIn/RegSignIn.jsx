import rs from "./RegSignIn.module.css";
import ns from "../Nav/Nav.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "./../../context";

function RegSignIn() {
  const { usersDialog, users } = useContext(Context);
  const navigate = useNavigate();
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

  const clickButton = () => {
    if (users.length != 0) {
      if (checkUser(users, login, password)) {
        navigate("/");
        alert("Welcome " + login);
      } else alert("Incorrect password or User does not exist");
    } else alert("User does not exist");
  };

  return (
    <div className={rs.Registration}>
      <div className={rs.signInContainer}>
        <div className={rs.title}>
          <h1 className={rs.title}>LogBook</h1>
        </div>
        <div className={rs.inputData}>
          <input
            placeholder={"Имя пользователя или эл. адрес"}
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            placeholder={"Пароль"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className={rs.signInButton} onClick={clickButton}>
          Войти
        </button>

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
            >
              {" "}
              Зарегистрируйтесь
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegSignIn;
