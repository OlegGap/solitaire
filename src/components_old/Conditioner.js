import React from "react";

class Conditioner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 0 };

    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  onIncrease() {
    this.setState(prevState => ({
      temperature: prevState.temperature + 1
    }));
  }

  onDecrease() {
    console.log(this);
    
    this.setState(function(prevState) {
      if (prevState.temperature === 0) {
        return { temperature: prevState.temperature };
      } else {
        return { temperature: prevState.temperature - 1 };
      }
    });
  }
  render() {
    return (
      <div>
        <h2>Текущая температура: {this.state.temperature}</h2>
        <button onClick={this.onDecrease}>-</button>
        <button onClick={this.onIncrease}>+</button>
      </div>
    );
  }
}

export default Conditioner;
