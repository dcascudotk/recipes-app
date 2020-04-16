import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import './Recipe.css'

function RecipeCard(props){
    const recipe = props.info;
    const ingredients = recipe.ingredients.map(i => {
        return <li key={`time_${i.id}`}>{i.name}</li>
    });
    

    return (
        <div className="Recipe-card card">
            <img src={recipe.image} className="card-img-top" alt={recipe.title} />
            <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.description}</p>
                <Link to={`/recipe/details/${recipe.id}`} className="btn btn-primary">Datails...</Link>
            </div>
        </div>
    )
};

export default RecipeCard;