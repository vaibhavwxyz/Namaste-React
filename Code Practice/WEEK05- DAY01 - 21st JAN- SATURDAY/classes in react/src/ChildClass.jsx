import React from "react";

class ChildClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };

    console.log("ChildClass constructor");
  }

  componentDidMount() {
    console.log("ChildClass componentDidMount");
  }

  render() {
    console.log("ChildClass render");
    return (
      <div className="mt-16">
        <h1>This is ChildClass Component</h1>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default ChildClass;
