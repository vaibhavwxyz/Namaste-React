import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Card from "./components/Card";
import Shimmer from "./components/Shimmer";

const App = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const json = await data.json();
    setAllRestaurants(json?.meals);
    setFilteredRestaurants(json?.meals);
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <Nav />
      <Search
        allRestaurant={allRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="grid grid-cols-4 grid-rows-3 gap-5 mb-10">
        {filteredRestaurants.map((restaurant) => {
          return <Card cardData={restaurant} key={restaurant.idMeal} />;
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
