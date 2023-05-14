import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 100,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>This is Class Component</h1>
        <h1>Count: {count}</h1>
        <h1>Count: {this.state.count2}</h1>
        <button
          onClick={() =>
            this.setState({
              count: 1,
            })
          }
        >
          Click
        </button>
      </div>
    );
  }
}

export default Home;
