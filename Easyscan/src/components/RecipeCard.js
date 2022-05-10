const RecipeCard = ({ image, name, cal, time }) => {
  return (
    <div className="recipeCardWrapper">
      <div className="recipeCardImg">
        <img src={image} alt=""/>
      </div>
      <div className="recipeCardText">
        <h3 className="recipeCardTextName">{name}</h3>
        <p className="recipeCardTextCal">{cal}</p>
        <p className="recipeCardTextTime">{time}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
