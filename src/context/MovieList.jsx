import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("Context", this.context);
  }

  render() {
    const { currentUser } = this.context;

    return (
      <div>
        Movie list {currentUser ? currentUser.name : "<Logged out>"}
        <MovieRow />
        <MovieRow />
        <MovieRow />
      </div>
    );
  }
}

export default MovieList;
