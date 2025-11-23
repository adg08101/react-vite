import React from "react";

const FunctionComponent = ({
  counter,
  increase,
  decrease,
  message,
  callback,
}) => {
  return (
    <>
      <div>
        <div>
          <h1>{message}</h1>
          <p>Counter: {counter}</p>
          <button onClick={increase}>Increment</button>
          <button onClick={decrease}>Decrement</button>
          <button
            onClick={() => {
              callback(message);
            }}
          >
            Callback
          </button>
        </div>
      </div>
    </>
  );
};

export default FunctionComponent;
