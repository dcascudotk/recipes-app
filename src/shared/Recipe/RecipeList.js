import React, { useState, useContext } from "react";
import RecipeCard from "./RecipeCard";
import './RecipeList.css'
import { Link } from "react-router-dom/cjs/react-router-dom";
import { RecipeContext } from '../../contexts/recipe.context';

function RecipeList(){

    const {recipes} = useContext(RecipeContext);
    const list = recipes.map(r => {
        return (
            <div className="col col-md-4" key={r.id}>
                <RecipeCard info={r} key={r.id} id={r.id} />
            </div>
        )
    });

    return(
        <div className="RecipeList">
            <div className="RecipeList-Add row">
                <Link className="btn btn-primary" to="/recipe/0">Add Recipe</Link>
            </div>
            <div className="row">
                {list}
            </div>
        </div>
    )
}

export default RecipeList;