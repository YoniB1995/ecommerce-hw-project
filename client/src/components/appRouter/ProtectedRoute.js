import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
      const [isLogin, setIsLogin] = useState(localStorage.getItem("token"));

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogin) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { form: props.location } }} />
          );
        }
      }}
    />
  );
};