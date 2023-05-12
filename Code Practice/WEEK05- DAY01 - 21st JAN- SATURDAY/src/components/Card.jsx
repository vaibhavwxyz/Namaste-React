const Card = ({ filteredMeals }) => {
  const { strMealThumb, strMeal, strArea } = filteredMeals;
  return (
    <div className="p-2 shadow-md rounded-md">
      <img className="rounded-md " src={strMealThumb} alt="img" />
      <h3 className="font-semibold text-lg">{strMeal}</h3>
      <h3 className="text-sm">{strArea}</h3>
    </div>
  );
};

export default Card;
