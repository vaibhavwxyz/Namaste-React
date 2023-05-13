import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MealDetail = () => {
  const { id } = useParams();
  const [mealDetail, setMealDetail] = useState([]);

  useEffect(() => {
    getMealDetail();
  }, []);

  async function getMealDetail() {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
    );
    const json = await data.json();
    setMealDetail(json.meals);
  }

  return (
    <div className="my-10">
      <img
        className="w-48 rounded-md"
        src={mealDetail[0]?.strMealThumb}
        alt="img"
      />
      <h1 className="font-semibold text-xl">{mealDetail[0]?.strMeal}</h1>
      <h3 className="text-sm">{mealDetail[0]?.strArea}</h3>
    </div>
  );
};

export default MealDetail;
