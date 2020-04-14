import React, {Component} from "react"
import useInputState from '../../hooks/useInputState';

import './AddRecipe.css';
import noImage from '../../images/no-image-box.png';

function AddRecipe(){

    const [titleInput, hanldeTitleInput, resetTitleInput] = useInputState("");
    const [descriptionInput, hanldeDescriptionInput, resetDescriptionInput] = useInputState("");
    const [minutesInput, hanldeMinutesInput, resetMinutesInput] = useInputState("");
    const [priceInput, hanldePriceInput, resetPriceInput] = useInputState("");
    const [imageInput, hanldeImageInput, resetImageInput] = useInputState("");
    const [ingredientInput, hanldeIngredientInput, resetIngredientInput] = useInputState("");

    const submitClick = () => {

        //Handle add recipe

        //reset inputs
        resetInputs();
    };

    const resetInputs = () => {
        resetTitleInput();
        resetDescriptionInput();
        resetMinutesInput();
        resetPriceInput();
        resetImageInput();
        resetIngredientInput();
    };

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

                        <img src={noImage} alt="no-image" className="AddRecipe-img"/>
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
                    <div className="form-group">
                        <label htmlFor="ingredient">Ingredients</label>
                        <input type="text" 
                               className="form-control" 
                               id="ingredient" 
                               value={ingredientInput} 
                               onChange={hanldeIngredientInput} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={submitClick}>Save</button>
                </form>
            </div>
        </div>
    )
};

export default AddRecipe;