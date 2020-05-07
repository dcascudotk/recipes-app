import React, { useContext } from "react";
import RecipeCard from "./RecipeCard";
import './RecipeList.css'
import { Link } from "react-router-dom/cjs/react-router-dom";
import { RecipeContext } from '../../contexts/recipe.context';

function RecipeList(){

    const {recipes} = useContext(RecipeContext);
    const list = recipes.map(r => {
        return (
            <div className="col col-md-4 col-sm-6" key={r.id}>
                <RecipeCard info={r} key={r.id} id={r.id} />
            </div>
        )
    });

    return(
        <div className="RecipeList">
            <div className="row">
                {list}
            </div>
        </div>
    )
}

export default RecipeList;