import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { RecipeContext } from '../../contexts/recipe.context';

import './RecipeDetails.css';
import { IngredientContext } from "../../contexts/ingredient.context";
import { TagContext } from "../../contexts/tag.context";

function RecipeDetails(props){

    const {recipes} = useContext(RecipeContext);
    const {ingredients} = useContext(IngredientContext);
    const {tags} = useContext(TagContext);


    const [recipeIngredients, setRecipeIngredients] = useState([])
    const [recipeTags, setRecipeTags] = useState([])
    const [recipe, setRecipe] = useState(undefined)

    useEffect(() => {

        if(!recipe)
            return;

        const ilist = ingredients.filter( ing => recipe.ingredients.includes(ing.id));
        setRecipeIngredients(ilist);

        const tlist = tags.filter(t => recipe.tags.includes(t.id));
        setRecipeTags(tlist);
    }, [recipe])

    useEffect(() => {
        const id = Number(props.match.params.id);
        const rec = recipes.find(r => r.id === id);
        setRecipe(rec);

    }, [recipes])

    if(recipe === undefined)
        return(<h1>Empty</h1>)

    return(
        <div className="RecipeDetails card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={recipe.image} className="card-img" alt={recipe.title} />
                </div>
                <div className="col-md-8">
                    <div className="RecipeDetails-body card-body">
                        <h5 className="card-title">{recipe.title}</h5>
                        <p className="card-text">{recipe.description}</p>
                        <h6>Ingredients</h6>
                        <ul className="card-text">
                            {recipeIngredients.map(ing => {
                                return <li
                                            key={`ing_${ing.id}`}
                                            id={ing.id}>
                                            <small className="text-muted">{ing.name}</small>
                                        </li>
                            })}
                        </ul>  
                        <h6>Tags</h6>
                        <p className="card-text">
                        {recipeTags.map(t => {
                                return <span className="badge badge-pill badge-secondary ml-1" 
                                            key={`tag_${t.id}`}
                                            id={t.id}>
                                            {t.name}
                                        </span>
                            })}                        
                        </p>
                        <Link to={`/recipe/${recipe.id}`}><i className="fas fa-pen fa-2x"></i></Link>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default RecipeDetails;