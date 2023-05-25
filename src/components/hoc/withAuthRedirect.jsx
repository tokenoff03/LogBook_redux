import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const withAuthRedirect = (Component) => {
  function RedirectComponent(props) {
    let currentUser = useSelector((state) => state.usersInfo.currentUser);
    if (!currentUser.isAuth) return <Navigate to="/sign-in" />;
    return <Component {...props} />;
  }
  return RedirectComponent;
};
