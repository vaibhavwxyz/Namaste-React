import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement(
  "h1",
  { className: "heading", key: "head" },
  "Hello, Vaibhav"
);
const footer = React.createElement(
  "footer",
  { id: "footer", style: { backgroundColor: "red" }, key: "foot" },
  "this is footer"
);
const container = React.createElement("div", { className: "container" }, [
  header,
  footer,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
