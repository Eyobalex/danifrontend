import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { LOGOUT } from "../../constants/actionTypes";

export const AdminRoute = ({
  component: Component,
  ...rest
}) => {
    const user = useRef(null);
    const dispatch = useDispatch();
    user.current = JSON.parse(localStorage.getItem('profile'));
  return (
    <Route
      {...rest}
      render={props => {
        if (user?.current?.result.role === 'ADMIN') {
          return <Component {...props} />;
        } else {
          dispatch({type: LOGOUT})
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
