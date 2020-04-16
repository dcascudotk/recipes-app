import React, {createContext, useState, useEffect } from "react";
import Axios from "axios";

export const RecipeContext = createContext();

export function RecipeProvider(props){

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        async function getData(){
            const response = await Axios.get('http://127.0.0.1:8000/api/recipe/recipes/');
            setRecipes(response.data);
        };
        getData();
    }, []);

    const addRecipe = (recipe) => {
        async function add(){
            const response = await Axios.post(
                'http://127.0.0.1:8000/api/recipe/recipes/', 
                recipe,
                {
                    headers: {
                        'Authorization': 'Token e02f2bb130748e69bc71d608ba464716c47dd048'
                    }
                });
            console.log(response);
        }
    };
    

    return(
        <RecipeContext.Provider value={{recipes, addRecipe}}>
            {props.children}
        </RecipeContext.Provider>
    )
}