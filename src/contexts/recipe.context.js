import React, {createContext, useState } from "react";

export const RecipeContext = createContext();

export function RecipeProvider(props){
    const [recipes, setRecipes] = useState(() => {
        async function getData(){
            const response = await Axios.get('http://127.0.0.1:8000/api/recipe/recipes/');
            setRecipes(response.data);
        }
        getData();
    });
    return(
        <RecipeContext.Provider value={{recipes}}>
            {props.children}
        </RecipeContext.Provider>
    )
}