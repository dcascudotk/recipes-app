import React, { useContext, useState } from "react"
import useInputState from '../../hooks/useInputState';

import './RecipeForm.css';
import noImage from '../../images/no-image-box.png';
import {RecipeContext} from '../../contexts/recipe.context';
import {IngredientContext} from '../../contexts/ingredient.context';

function RecipeForm(props){
    const {recipes, addRecipe} = useContext(RecipeContext);
    const {ingredients} = useContext(IngredientContext);

    console.log(ingredients);
    const id = props.match.params.id;
    const recipe = recipes.find(r => r.id !== id) || {
        title: "",
        description: "",
        time_minutes: "",
        price: "",
        ingredients: []
    };

    const [titleInput, hanldeTitleInput, resetTitleInput] = useInputState(recipe.title);
    const [descriptionInput, hanldeDescriptionInput, resetDescriptionInput] = useInputState(recipe.description);
    const [minutesInput, hanldeMinutesInput, resetMinutesInput] = useInputState(recipe.time_minutes);
    const [priceInput, hanldePriceInput, resetPriceInput] = useInputState(recipe.price);
    const [imageInput, hanldeImageInput, resetImageInput] = useInputState([]);
    const [recipe_ingredients, setRecipeIngredients] = useState(recipe.ingredients);

    const submitClick = () => {

        //Handle add recipe
        const recipe = {
            title: titleInput,
            description: descriptionInput,
            time_minutes: minutesInput,
            price: priceInput,
            ingredients: recipe_ingredients
        }


        //reset inputs
        resetInputs();
    };

    const resetInputs = () => {
        resetTitleInput();
        resetDescriptionInput();
        resetMinutesInput();
        resetPriceInput();
        resetImageInput();
    };

    const hanldeIngredientInput = (evt) => {
        console.log(evt.target);
        
    }


    return(
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <h1>Add new recipe</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" 
                               className="form-control" 
                               id="title" 
                               placeholder="" 
                               value={titleInput} 
                               onChange={hanldeTitleInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" 
                                  id="description" 
                                  rows="3"
                                  value={descriptionInput} 
                                  onChange={hanldeDescriptionInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="timeMinutes">Time in minutes</label>
                        <input type="text" 
                               className="form-control" 
                               id="timeMinutes" 
                               placeholder="" 
                               value={minutesInput} 
                               onChange={hanldeMinutesInput} />
                 </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="text" 
                               className="form-control" 
                               id="price" 
                               placeholder="" 
                               value={priceInput} 
                               onChange={hanldePriceInput} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Upload image</label>
                        <input type="file" 
                               className="form-control-file" 
                               id="file" 
                               value={imageInput}
                               onChange={hanldeImageInput}/>

                        <img src={noImage} alt="no-image" className="Recipeform-img"/>
                    </div>                        
                    <div className="form-group">
                        <label htmlFor="tag">Tags</label>
                        <input type="text" 
                               className="form-control" 
                               id="tag" 
                               placeholder="" 
                               />
                        <span className="badge badge-pill badge-secondary ml-1">Breakfast</span>
                        <span className="badge badge-pill badge-secondary ml-1">Vegetarian</span>
                    </div>
                    <div class="form-group">
                        <label htmlFor="ingredient">Ingredients</label>
                        <select className="form-control" 
                                id="ingredient" 
                                value={recipe_ingredients}
                                onChange={hanldeIngredientInput}>
                        {ingredients.map(ing => {
                            return <option value={ing.id} key={ing.id}>{ing.name}</option>
                        })}
                        </select>
                    </div>
                    <div className="form-group">

                    </div>


                    <button type="submit" className="btn btn-primary" onClick={submitClick}>Save</button>
                </form>
            </div>
        </div>
    )
};

export default RecipeForm;