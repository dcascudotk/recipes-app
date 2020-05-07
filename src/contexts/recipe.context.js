import React, {createContext, useState, useEffect } from "react";
import Axios from "axios";

export const RecipeContext = createContext();
export const RecipeDispatchContext = createContext();

export function RecipeProvider(props){

    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState({
        id: 0,
        title: "",
        description: "",
        time_minutes: "",
        price: "",
        ingredients: [],
        tags: []
    });

    useEffect(() => {
        async function getData(){
            const response = await Axios.get('http://127.0.0.1:8000/api/recipe/recipes/');
            setRecipes(response.data);
        };
        getData();
    }, []);

    const updateRecipe = (currentRecipe) => {
        setRecipe(currentRecipe);
        console.log(currentRecipe);
    }

    const getRecipe = (id) => {
        async function fetchRecipe(){
            const response = await Axios.get(`http://127.0.0.1:8000/api/recipe/recipes/${id}`);
            setRecipe(response.data);
        }; 
        fetchRecipe();
    }

    const uploadRecipe = (uploadRecipe, file) => {
        async function add(data){
            const response = await Axios.post(
                'http://127.0.0.1:8000/api/recipe/recipes/', 
                data,
                {
                    headers: {
                        'Authorization': 'Token a60f2cd3d44796da10db9c7184756f1b11992416',
                        'content-type': 'multipart/form-data'
                    }
                });
            console.log("response:" + response);
        };

        async function edit(data){
            const response = await Axios.put(
                `http://127.0.0.1:8000/api/recipe/recipes/${recipe.id}/`, 
                data,
                {
                    headers: {
                        'Authorization': 'Token a60f2cd3d44796da10db9c7184756f1b11992416',
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(function (response) {
                    console.log(response);
                })
                .catch(function (response){
                    console.log(response);
                });
            
        };


        const formData = new FormData();
        formData.append('title', uploadRecipe.title);
        formData.append('description', uploadRecipe.description);
        formData.append('time_minutes', uploadRecipe.time_minutes);
        formData.append('price', uploadRecipe.price);
        for(var i=0; i < uploadRecipe.ingredients.length; i++){
            formData.append('ingredients', uploadRecipe.ingredients[i]);
        }
        for(var i=0; i < uploadRecipe.tags.length; i++){
            formData.append('tags', uploadRecipe.tags[i]);
        }

        if(file != undefined)
            formData.append('image',file);

        if(uploadRecipe.id !== 0)
            edit(formData);
        else
            add(formData);
    };
    
    return(
        <RecipeContext.Provider value={{recipes}}> 
            <RecipeDispatchContext.Provider value={{recipe, getRecipe, updateRecipe, uploadRecipe}}> 
                {props.children}
            </RecipeDispatchContext.Provider>
        </RecipeContext.Provider>
    )
}