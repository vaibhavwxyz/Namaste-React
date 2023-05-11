import React, { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./Search";

const Body = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    getMeals();
  }, []);

  async function getMeals() {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const json = await data.json();
    setAllMeals(json.meals);
    setFilteredMeals(json.meals);
  }
  // console.log(allMeals);

  return (
    <>
      <Search allMeals={allMeals} setFilteredMeals={setFilteredMeals} />
      <div className="grid grid-cols-4 gap-5 my-10">
        {filteredMeals.map((meal) => (
          <Card filteredMeals={meal} key={meal.idMeal} />
        ))}
      </div>
    </>
  );
};

export default Body;
