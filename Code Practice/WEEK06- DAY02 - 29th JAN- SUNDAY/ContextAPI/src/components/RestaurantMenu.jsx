import { useParams } from "react-router-dom";
import getRestaurantInfo from "../utils/GetRestaurantInfo";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = getRestaurantInfo(id);

  return (
    <div className="my-10">
      <h1 className="font-bold font-xl">Restorant id: {id}</h1>
      <img
        className="w-48 rounded-md"
        src={restaurant[0]?.strMealThumb}
        alt="img"
      />
      <h1 className="font-bold font-xl">{restaurant[0]?.strMeal}</h1>
      <h2>{restaurant[0]?.strArea}</h2>
    </div>
  );
};

export default RestaurantMenu;
