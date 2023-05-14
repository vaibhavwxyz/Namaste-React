import React from "react";
import ParentClass from "./ParentClass";

class GrandParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 100,
    };
    console.log("GrandParentClass constructor");
  }

  componentDidMount() {
    console.log("GrandParentClass componentDidMount");
  }

  render() {
    const { count } = this.state;
    console.log("GrandParentClass render");
    return (
      <div className="mt-10">
        <h1>This is GrandParentClass Component</h1>
        <h1>Count: {count}</h1>
        <button
          onClick={() =>
            this.setState({
              count: 101,
            })
          }
        >
          Click
        </button>
        <ParentClass />
      </div>
    );
  }
}

export default GrandParentClass;
