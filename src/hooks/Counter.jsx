import React, { Fragment, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useDocumentTitle(`${name} clicked ${counter} times.`);

  return (
    <Fragment>
      <input
        type="text"
        onChange={v => setName(v.currentTarget.value)}
        value={name}
      />
      <p>
        {name} clicked {counter} times{" "}
        <button onClick={() => setCounter(counter + 1)}>
          Increase counter
        </button>
        .
      </p>
    </Fragment>
  );
};

export default Counter;
