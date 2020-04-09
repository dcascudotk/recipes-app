import React, {Component} from "react"
import useInputState from '../../hooks/useInputState';

import './AddRecipe.css';
import noImage from '../../images/no-image-box.png';

export default function AddRecipe(){

    const [titleInput, hanldeTitleInput, resetTitleInput] = useInputState("");
    const [descriptionInput, hanldeDescriptionInput, resetDescriptionInput] = useInputState("");
    const [minutesInput, hanldeMinutesInput, resetMinutesInput] = useInputState("");
    const [priceInput, hanldePriceInput, resetPriceInput] = useInputState("");
    const [imageInput, hanldeImageInput, resetImageInput] = useInputState("");
    const [ingredientInput, hanldeIngredientInput, resetIngredientInput] = useInputState("");

    const submitClick = () => {

        resetTitleInput
    };

    return(
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" 
                               className="form-control" 
                               id="title" 
                               placeholder="" 
                               value={titleInput} 
                               onChange={hanldeTitleinput} />
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
                    <div class="form-group">
                        <label for="image">Upload image</label>
                        <input type="file" 
                               class="form-control-file" 
                               id="file" 
                               value={imageInput} />

                        <img src={noImage} alt="no-image" className="AddRecipe-img"/>
                    </div>                        
                    <div className="form-group">
                        <label htmlFor="tag">Tags</label>
                        <input type="text" 
                               className="form-control" 
                               id="tag" 
                               placeholder="" 
                               />
                        <span class="badge badge-pill badge-secondary ml-1">Breakfast</span>
                        <span class="badge badge-pill badge-secondary ml-1">Vegetarian</span>
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
}