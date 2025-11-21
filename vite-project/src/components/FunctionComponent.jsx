import React, { useState } from "react";

const FunctionComponent = ({ counter, increase, decrease }) => {
  return (
    <>
      <div>
        <div>
          <h1>Clicks counter from RFC</h1>
          <p>Counter: {counter}</p>
          <button onClick={increase}>Increment</button>
          <button onClick={decrease}>Decrement</button>
        </div>
      </div>
    </>
  );
};

export default FunctionComponent;
