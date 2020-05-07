import React, { useContext, useState, useEffect } from "react"
import useInputState from '../../hooks/useInputState';

import './RecipeForm.css';
import noImage from '../../images/no-image-box.png';
import {RecipeDispatchContext} from '../../contexts/recipe.context';
import {IngredientContext} from '../../contexts/ingredient.context';
import {TagContext} from '../../contexts/tag.context';

function RecipeForm(props){
    const {recipe, getRecipe, updateRecipe, uploadRecipe} = useContext(RecipeDispatchContext);
    const {ingredients} = useContext(IngredientContext);
    const {tags} = useContext(TagContext);
    
    useEffect(() => {
        getRecipe(props.match.params.id);
        console.log("init");
    }, []);

    useEffect(() => {
        setTitleInput(recipe.title);
        setDescriptionInput(recipe.description);
        setMinutesInput(recipe.time_minutes);
        setPriceInput(recipe.price);
        setRecipeIngredients(recipe.ingredients);
        setRecipeTags(recipe.tags);
        setImageDisplay(recipe.image);
    }, [recipe])

    const [titleInput, hanldeTitleInputChange, setTitleInput] = useInputState(recipe.title);
    const [descriptionInput, hanldeDescriptionInputChange, setDescriptionInput] = useInputState(recipe.description);
    const [minutesInput, hanldeMinutesInputChange, setMinutesInput] = useInputState(recipe.description);
    const [priceInput, hanldePriceInputChange, setPriceInput] = useInputState(recipe.description);

    const submitClick = (evt) => {

        let recipe_ingredients = recipeIngredients.map(ing => {
            return ing.id;
        });

        let recipe_tags = recipeTags.map(t => {
            return t.id;
        });

        evt.preventDefault();
        let upload = {
            id: recipe.id,
            title: titleInput,
            description: descriptionInput,
            time_minutes: minutesInput,
            price: priceInput,
            ingredients: recipe_ingredients,
            tags: recipe_tags
        };
        uploadRecipe(upload, imageInput);
    };

    const [recipeIngredients, setRecipeIngredients] = useState([]);
    const [ingredient] = useInputState(""); 
    const hanldeIngredientInput = (evt) => {

        let value = parseInt(evt.target.value);
        if(value != 0 && recipeIngredients.find(ing => ing.id == value) === undefined){
            let newIngredient = ingredients.find(ing => ing.id == value);
            setRecipeIngredients([...recipeIngredients, newIngredient]);
        }
    }

    const hanldeRemoveIngredient = (evt) => {
        let id = parseInt(evt.currentTarget.id);
        let filtered = recipeIngredients.filter(ing => ing.id !== id);
        setRecipeIngredients(filtered);
    }

    const [recipeTags, setRecipeTags] = useState([]);
    const [tag] = useInputState(""); 
    const hanldeTagInput = (evt) => {

        let value = parseInt(evt.target.value);
        if(value != 0 && recipeTags.find(t => t.id == value) === undefined){
            let newTag = tags.find(t => t.id == value);
            setRecipeTags([...recipeTags, newTag]);
        }
    }

    const hanldeRemoveTag = (evt) => {
        let id = parseInt(evt.currentTarget.id);
        let filtered = recipeTags.filter(t => t.id !== id);
        setRecipeTags(filtered);
    }
    
    const [imageDisplay, setImageDisplay] = useState(recipe.image);
    const [imageInput, setImageInput] = useState(undefined);
    const handleImageInput = (evt) => {

        if(evt.currentTarget.id && evt.currentTarget.id === "trash"){
            setImageDisplay(undefined);
            setImageInput(undefined);
        }
        else{
            let new_image = evt.target.files[0];
        
            if(new_image !== undefined){
                setImageDisplay(URL.createObjectURL(new_image));
                setImageInput(new_image);
            }
        }
        
    }

    const deleteImage = () => {
        setImageInput(undefined);
    }

    return(
        <div className='RecipeForm'>
            <h1>New recipe</h1>
            <form>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" 
                                className="form-control" 
                                id="title" 
                                placeholder="" 
                                value={titleInput} 
                                onChange={hanldeTitleInputChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" 
                                    id="description" 
                                    rows="3"
                                    value={descriptionInput} 
                                    onChange={hanldeDescriptionInputChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="timeMinutes">Time in minutes</label>
                            <input type="text" 
                                className="form-control" 
                                id="timeMinutes" 
                                placeholder="" 
                                value={minutesInput} 
                                onChange={hanldeMinutesInputChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type="text" 
                                className="form-control" 
                                id="price" 
                                placeholder="" 
                                value={priceInput} 
                                onChange={hanldePriceInputChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tag">Tags</label>
                            <select className="form-control" 
                                    id="tag" 
                                    value={tag}
                                    onChange={hanldeTagInput}>
                            {tags
                                .sort(({id: previousID}, {id: currentID}) => previousID - currentID)
                                .map(t => {
                                return <option value={t.id} key={t.id}>{t.name}</option>
                            })}
                            </select>
                        </div>
                        <div className="form-group">
                            {recipeTags.map(t => {
                                return <span className="badge badge-pill badge-secondary ml-1 RecipeForm-badge" 
                                            key={`tag_${t.id}`}
                                            id={t.id}
                                            onClick={hanldeRemoveTag}>
                                            {t.name}
                                            <i className="fas fa-times"></i>
                                        </span>
                            })}
                        </div>                    

                        <div className="form-group">
                            <label htmlFor="ingredient">Ingredients</label>
                            <select className="form-control" 
                                    id="ingredient" 
                                    value={ingredient}
                                    onChange={hanldeIngredientInput}>
                            {ingredients
                                .sort(({id: previousID}, {id: currentID}) => previousID - currentID)
                                .map(ing => {
                                return <option value={ing.id} key={ing.id}>{ing.name}</option>
                            })}
                            </select>
                        </div>
                        <div className="form-group">
                            {recipeIngredients.map(ing => {
                                return <span className="badge badge-pill badge-secondary ml-1 RecipeForm-badge" 
                                            key={`ing_${ing.id}`}
                                            id={ing.id}
                                            onClick={hanldeRemoveIngredient}>
                                            {ing.name}
                                            <i className="fas fa-times"></i>
                                        </span>
                            })}
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={submitClick}>Save</button>
                    </div>

                    <div className='col-md-6 col-sm-12'>
                    <div className="form-group">
                        <label htmlFor="image">Upload image</label>
                        <input type="file" 
                            className="form-control-file" 
                            id="file" 
                            onChange={handleImageInput}/>

                        <div className='RecipeForm-img'>
                            <i className="fas fa-trash-alt fa-2x RecipeForm-trash" id="trash" onClick={handleImageInput}></i>
                            <img src={imageDisplay || noImage} alt="no-image" className="img-thumbnail "/>
                        </div>
                        
                    </div>
                </div>
                </div>                
            </form>
        </div>        
    )
};

export default RecipeForm;