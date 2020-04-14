import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import './RecipeList.css'
import Axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom";

function RecipeList(){

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        async function getData(){
            const response = await Axios.get('http://127.0.0.1:8000/api/recipe/recipes/');
            setRecipes(response.data);
        }
        getData();
    }, [recipes]);

    const list = recipes.map(r => {
        return (
            <div className="col col-md-4" key={r.id}>
                <Recipe info={r} key={r.id} id={r.id} />
            </div>
        )
    });

    return(
        <div className="RecipeList">
            <div className="RecipeList-Add row">
                <Link className="btn btn-primary" to="/add">Add Recipe</Link>
            </div>
            <div className="row">
                {list}
            </div>
        </div>
    )
}

export default RecipeList;