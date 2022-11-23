import ns from "./Nav.module.css"
import { NavLink } from "react-router-dom"
import { useContext, useState } from "react"
import { Context } from "../../context"
import { useEffect } from "react"

function Nav({ isAuth, setIsAuth }) {
    const { store } = useContext(Context)

    const exitFunc = (event) => {
        let logInfo = JSON.parse(localStorage.getItem("logInfo"))
        for (let i = 0; i < logInfo.users.length; i++) {
            if (logInfo.users[i].isAuth) {
                logInfo.users[i] = {
                    login: logInfo.users[i].login,
                    password: logInfo.users[i].password,
                    isAuth: false,
                }
                localStorage.setItem("logInfo", JSON.stringify(logInfo))
                setIsAuth(false)
            }
        }
    }

    return (
        <div className={ns.Nav}>
            <div className={ns.container}>
                <h1 className={ns.title}>LogBook</h1>
                <ul className={ns.ul}>
                    <NavLink to="/" className={(navData) => (navData.isActive ? ns.active : "")}>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                            >
                                {" "}
                                <path
                                    fillRule="evenodd"
                                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                                    id="mainIconPathAttribute"
                                    strokeWidth="0.3"
                                    stroke="#000000"
                                    fill="#000000"
                                ></path>{" "}
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                                    id="mainIconPathAttribute"
                                    stroke="#000000"
                                    fill="#000000"
                                ></path>{" "}
                            </svg>
                            Профиль
                        </li>
                    </NavLink>
                    <NavLink to="/news" className={(navData) => (navData.isActive ? ns.active : "")}>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                className="bi bi-newspaper"
                                viewBox="0 0 16 16"
                                id="IconChangeColor"
                            >
                                {" "}
                                <path
                                    d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"
                                    id="mainIconPathAttribute"
                                ></path>{" "}
                                <path
                                    d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"
                                    id="mainIconPathAttribute"
                                ></path>{" "}
                            </svg>
                            Новости
                        </li>
                    </NavLink>
                    <NavLink to="/dialogs" className={(navData) => (navData.isActive ? ns.active : "")}>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                id="IconChangeColor"
                            >
                                {" "}
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" id="mainIconPathAttribute"></path>{" "}
                                <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" id="mainIconPathAttribute"></path>{" "}
                                <line x1="12" y1="12" x2="12" y2="12.01"></line> <line x1="8" y1="12" x2="8" y2="12.01"></line>{" "}
                                <line x1="16" y1="12" x2="16" y2="12.01"></line>{" "}
                            </svg>
                            Сообщение
                        </li>
                    </NavLink>
                    <NavLink to="/notification" className={(navData) => (navData.isActive ? ns.active : "")}>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
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
                    <NavLink to="/friends" className={(navData) => (navData.isActive ? ns.active : "")}>
                        <li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
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

                    {!isAuth ? (
                        <NavLink to="/sign-in" className={`${((navData) => (navData.isActive ? ns.active : ""), ns.signLi)}`}>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="currentColor"
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
                    ) : (
                        <NavLink to="/sign-in" className={(navData) => (navData.isActive ? ns.active : "")} onClick={exitFunc}>
                            <li className={ns.signLi}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                    id="IconChangeColor"
                                >
                                    {" "}
                                    <path
                                        d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"
                                        id="mainIconPathAttribute"
                                    ></path>{" "}
                                </svg>
                                Выйти
                            </li>
                        </NavLink>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Nav
