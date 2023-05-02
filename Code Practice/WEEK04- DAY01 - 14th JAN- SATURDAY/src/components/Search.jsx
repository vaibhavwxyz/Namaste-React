import { useState } from "react";
import { mealsData } from "../config";

const Search = ({ meals, setMeals }) => {
  const [searchText, setSearchText] = useState("");

  function handelSearch(searchText, meals) {
    if (searchText.length === 0) {
      setMeals(...mealsData);
      console.log(mealsData);
    }
    const filterData = meals.filter((meal) =>
      meal.strMeal.toLowerCase().includes(searchText)
    );

    return filterData;
  }

  return (
    <div class="flex w-full max-w-sm items-center space-x-2 my-5">
      <input
        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
        type="email"
        placeholder="what food are you craving today?"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 bg-indigo-600 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4"
        onClick={() => {
          const data = handelSearch(searchText, meals);
          setMeals(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
