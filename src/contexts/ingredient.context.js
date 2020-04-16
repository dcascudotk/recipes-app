import React, {createContext, useState, useEffect } from "react";
import Axios from "axios";

export const IngredientContext = createContext();

export function IngredientProvider(props){

    const [ingredients, setIngredients] = useState([]);
    useEffect(() => {
        async function getData(){
            const response = await Axios.get('http://127.0.0.1:8000/api/recipe/ingredients/');
            setIngredients(response.data);
        };
        getData();
    }, []);

    const addIngredient = (ingredient) => {
        async function add(){
            const response = await Axios.post(
                'http://127.0.0.1:8000/api/recipe/ingredients/', 
                ingredient,
                {
                    headers: {
                        'Authorization': 'Token e02f2bb130748e69bc71d608ba464716c47dd048'
                    }
                });
            console.log(response);
        }
    };
    

    return(
        <IngredientContext.Provider value={{ingredients, addIngredient}}>
            {props.children}
        </IngredientContext.Provider>
    )
}