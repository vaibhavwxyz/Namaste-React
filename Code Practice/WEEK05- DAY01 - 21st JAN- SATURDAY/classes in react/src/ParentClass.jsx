import React from "react";
import ChildClass from "./ChildClass";

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "parentClass",
    };

    console.log("ParentClass constructor");
  }

  componentDidMount() {
    console.log("ParentClass componentDidMount");
  }

  render() {
    console.log("ParentClass render");
    return (
      <div className="mt-16">
        <h1>This is ParentClass Component</h1>
        <p>{this.state.name}</p>
        <ChildClass />
      </div>
    );
  }
}

export default ParentClass;
