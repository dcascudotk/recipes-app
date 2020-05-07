import React, {createContext, useState, useEffect } from "react";
import Axios from "axios";

export const TagContext = createContext();

export function TagProvider(props){

    const [tags, setTags] = useState([]);
    useEffect(() => {
        async function getData(){
            const response = await Axios.get('http://127.0.0.1:8000/api/recipe/tags/');
            response.data.push({
                id: 0,
                name: "select tag"
            });
            setTags(response.data);
        };
        getData();
    }, []);

    const addTag = (tag) => {
        async function add(){
            const response = await Axios.post(
                'http://127.0.0.1:8000/api/recipe/tags/', 
                tag,
                {
                    headers: {
                        'Authorization': 'Token e02f2bb130748e69bc71d608ba464716c47dd048'
                    }
                });
            console.log(response);
        }

        add();
    };
    

    return(
        <TagContext.Provider value={{tags, addTag}}>
            {props.children}
        </TagContext.Provider>
    )
}