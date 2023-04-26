import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement(
  "h1",
  { className: "head" },
  "Hello, Vaibhav"
);
const footer = <footer>This is footer</footer>;

const Container = () => {
  return (
    <>
      {header}
      {footer}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
