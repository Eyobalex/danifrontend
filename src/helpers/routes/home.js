import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { LOGOUT } from "../../constants/actionTypes";

export const HomeRoute = ({
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
        if (!user | user?.current?.role !== 'CLIENT' ) {
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
