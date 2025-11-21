import React, { useState } from "react";

const FunctionComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>
        <div>
          <h1>Clicks counter from RFC</h1>
          <p>Counter: {counter}</p>
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default FunctionComponent;
