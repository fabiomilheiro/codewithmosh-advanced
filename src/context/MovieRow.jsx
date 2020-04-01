import React, { useContext } from "react";
import UserContext from "./userContext";

const MovieRow = props => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      Movie A (user = {currentUser ? currentUser.name : "<Logged out>"})
    </div>
  );
};

export default MovieRow;
