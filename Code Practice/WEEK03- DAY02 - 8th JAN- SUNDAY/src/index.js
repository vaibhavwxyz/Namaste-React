import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Navbar";
import Cards from "./components/Card";
import { mealsData } from "./config";
import Search from "./components/Search";

const App = () => {
  return (
    <>
      <Nav />
      <Search />
      <div className="max-w-6xl mx-auto grid gap-5 grid-cols-4 grid-rows-3">
        {mealsData.map((prop) => {
          return <Cards cardData={prop} key={prop.idMeal} />;
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
