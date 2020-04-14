import React from "react";
import './Recipe.css'

function Recipe(props){
    const ingredients = props.info.ingredients.map(i => {
        return <li key={`time_${i.id}`}>{i.name}</li>
    });

    return (

        <div className="Recipe-card card">
            <img src={props.info.image} className="card-img-top" alt={props.info.title} />
            <div className="card-body">
                <h5 className="card-title">{props.info.title}</h5>
                <p className="card-text">{props.info.description}</p>
                <a href="#" className="btn btn-primary">Datails...</a>
            </div>
        </div>
    )
};

export default Recipe;