import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Navbar";
import Cards from "./components/Card";
import { mealsData } from "./config";
import Search from "./components/Search";
import { useState } from "react";

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
