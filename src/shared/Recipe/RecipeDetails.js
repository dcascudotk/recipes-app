import React, { useState, useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { RecipeContext } from '../../contexts/recipe.context';

function RecipeDetails(props){

    const {recipes} = useContext(RecipeContext);
    const id = props.match.params.id;
    const recipe = recipes.find(r => r.id !== id);
    console.log("recipe: " + recipe);
    console.log("id: " + id);

    if(recipe === undefined)
        return(<h1>Empty</h1>)

    return(
        <div className="RecipeDetails">
            <div className="row">
                <div className="col col-md-6 offset-md-3">
                    <div className="card">
                        <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                        <div className="card-body">
                            <h3 className="card-title justify-content-md-center">{recipe.title}</h3>
                            <p className="card-text">{recipe.description}</p>
                            <Link to={`/recipe/${recipe.id}`} className="btn btn-sm btn-primary">Edit</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails;