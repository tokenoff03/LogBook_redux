import ns from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function Nav() {
  const [loginBlock, setLoginBlock] = useState(false);
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
  return (
    <div className={ns.Nav}>
      <div className={ns.container}>
        <h1 className={ns.title}>LogBook</h1>
        <ul className={ns.ul}>
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? ns.active : "")}
          >
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  id="mainIconPathAttribute"
                  stroke-width="0.3"
                  stroke="#000000"
                  fill="#000000"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  id="mainIconPathAttribute"
                  stroke="#000000"
                  fill="#000000"
                ></path>{" "}
              </svg>
              Профиль
            </li>
          </NavLink>
          <NavLink
            to="/search"
            className={(navData) => (navData.isActive ? ns.active : "")}
          >
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {" "}
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  id="mainIconPathAttribute"
                ></path>{" "}
              </svg>
              Поисковый запрос
            </li>
          </NavLink>
          <NavLink
            to="/message"
            className={(navData) => (navData.isActive ? ns.active : "")}
          >
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-message-circle-2"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                id="IconChangeColor"
              >
                {" "}
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                  id="mainIconPathAttribute"
                ></path>{" "}
                <path
                  d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"
                  id="mainIconPathAttribute"
                ></path>{" "}
                <line x1="12" y1="12" x2="12" y2="12.01"></line>{" "}
                <line x1="8" y1="12" x2="8" y2="12.01"></line>{" "}
                <line x1="16" y1="12" x2="16" y2="12.01"></line>{" "}
              </svg>
              Сообщение
            </li>
          </NavLink>
          <NavLink
            to="/notification"
            className={(navData) => (navData.isActive ? ns.active : "")}
          >
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {" "}
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                  id="mainIconPathAttribute"
                ></path>{" "}
              </svg>
              Уведомление
            </li>
          </NavLink>
          <NavLink
            to="/friends"
            className={(navData) => (navData.isActive ? ns.active : "")}
          >
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-people"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {" "}
                <path
                  d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                  id="mainIconPathAttribute"
                ></path>{" "}
              </svg>
              Друзья
            </li>
          </NavLink>
          <NavLink
            to="/sign-in"
            className={(navData) => (navData.isActive ? ns.active : "")}
          >
            <li className={ns.signLi}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-door-open-fill"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {" "}
                <path
                  d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"
                  id="mainIconPathAttribute"
                ></path>{" "}
              </svg>
              Войти
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
