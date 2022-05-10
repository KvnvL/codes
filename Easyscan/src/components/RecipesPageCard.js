import React from 'react'

const RecipesPageCard = ({image, name, persons, cal, time}) => {
    return (
        <div className="RecipesPageCardWrapper">
            <img src={image} alt="" />
            <div className="RecipePageCardInfo">
            <h1>{name}</h1>
            <div className="RecipePageCardInfoExtra">
            <h2><i className="fas fa-user"></i>  &nbsp;{persons}</h2>
            <h2><i className="fas fa-fire-alt"></i>  &nbsp;{cal}</h2>
            <h2><i className="fas fa-clock"></i>  &nbsp;{time}</h2>
            </div>
            </div>
        </div>
    )
}

export default RecipesPageCard
