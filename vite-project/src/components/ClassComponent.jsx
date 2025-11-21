import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>Clicks counter from RCC</h1>
        <p>Counter: {counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassComponent;
