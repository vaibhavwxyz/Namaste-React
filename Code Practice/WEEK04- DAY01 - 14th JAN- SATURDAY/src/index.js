import React from "react";
import ReactDOM from "react-dom/client";
import { mealsData } from "./config";
import { useState } from "react";
import Nav from "./components/Navbar";
import Search from "./components/Search";
import Cards from "./components/Card";

const App = () => {
  const [meals, setMeals] = useState(mealsData);

  return (
    <>
      <Nav />
      <Search meals={meals} setMeals={setMeals} />
      <div className="max-w-6xl mx-auto grid gap-5 grid-cols-4 grid-rows-3">
        {meals.map((prop) => {
          return <Cards cardData={prop} key={prop.idMeal} />;
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
