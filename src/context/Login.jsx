import React, { Fragment, useContext } from "react";
import UserContext from "./userContext";

const Login = () => {
  const userContext = useContext(UserContext);
  return (
    <Fragment>
      <button onClick={userContext.handleLogIn}>Log in</button>
      <button onClick={userContext.handleLogOut}>Log out</button>
    </Fragment>
  );
};

export default Login;
