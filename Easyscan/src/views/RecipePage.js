import { useLocation } from "react-router";
import { useState } from "react";
const RecipePage = () => {
  const location = useLocation();
  const {
    banner,
    name,
    persons,
    cal,
    time,
    category,
    preparation,
    ingredients,
  } = location.state;

  const preparationList = preparation.map((preparations, index) => (
    <div key={index}>
      <h2 className="bereidingStap">Stap {index + 1}</h2>
      <li className="bereiding">{preparations}</li>
      <div className="bereidingBorder"></div>
    </div>
  ));

  const ingredientsList = ingredients.map((ingredient) => (
    <div key={ingredient}>
      <li className="ingredienten">{ingredient}</li>
    </div>
  ));

  const ingredientsAddList = ingredients.map((ingredient, index) => (
    <div id="ingredientsAddList" key={index}>
      <input type="checkbox" value={index} onClick={() => {
      }}/>
      <li className="ingredienten">{ingredient}</li>
    </div>
  ));

  const [selected, setSelected] = useState(0);

  const [menuToggleState, setMenuToggleState] = useState(false);
  const menuToggle = () => {
    setMenuToggleState(!menuToggleState);
    if(document.querySelector('body').style.overflowY === 'hidden'){
      document.querySelector('body').style.overflowY = 'auto';
    }
    else{
      document.querySelector('body').style.overflowY = 'hidden';
    }
    
    window.scrollTo(0, 0)
  };

  return (
    <div>
      <div className="RecipePageBanner">
        <img src={banner} alt="" />
      </div>
      <div className="RecipePageContent">
        <h1>{name}</h1>
        <div id="RecipePageInfo">
          <h2>
            <i className="fas fa-user"></i> &nbsp;{persons}
          </h2>
          <h2>
            <i className="fas fa-fire-alt"></i> &nbsp;{cal}
          </h2>
          <h2>
            <i className="fas fa-clock"></i> &nbsp;{time}
          </h2>
          <h2>
            <i className="fas fa-utensils"></i> &nbsp;{category}
          </h2>
        </div>
        <div className="RecipePageOption">
          <h2 onClick={() => setSelected(0)}>Ingrediënten</h2>
          <h2 onClick={() => setSelected(1)}>Bereiding</h2>
        </div>

        {selected === 0 && (
          <div>
          <div className="optionLine"></div>
          <div id="ingredienten">
            <ul>{ingredientsList}</ul>
            <button id="ingredientenButton"
              onClick={menuToggle}>Ingrediënten toevoegen aan boodschappenlijst</button>
          </div>
          </div>
        )}

        {selected === 1 && (
          <div>
          <div className="optionLine" id="optionLine2"></div>
          <div id="bereidingswijze">
            <ul>{preparationList}</ul>
          </div>
          </div>
        )}
      </div>

      <div id="addToShoppingList" className={menuToggleState ? "test" : ""}>
      <div id="overlay">
      <h2 id="addToShoppingListOverlayClose" onClick={menuToggle}><i className="fas fa-times"></i></h2>
      <ul id="addToShoppingListOverlaylist">{ingredientsAddList}</ul>
      <button id="addToShoppingListOverlayButton">Voeg toe aan boodschappenlijst</button>
      </div>
      </div>
    </div>
  );
};

export default RecipePage;
