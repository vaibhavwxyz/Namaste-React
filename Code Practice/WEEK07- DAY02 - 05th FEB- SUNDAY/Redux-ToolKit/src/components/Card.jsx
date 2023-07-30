import { useContext } from "react";
import UserContext from "../context/userContext";

const Card = ({ cardData }) => {
  const { strMealThumb: image, strMeal, strArea } = cardData;

  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div className="shadow-lg rounded-md p-2">
      <img className="rounded-xl" src={image} alt="img" />
      <h3>{strMeal}</h3>
      <h3>{strArea}</h3>
      <h3 className="mt-2">{user.name}</h3>
      <h3>{user.email}</h3>
    </div>
  );
};

export default Card;
