import React, {Component} from "react";
import Recipe from "./Recipe";
import recipes from '../../mocks/recipes.json'
import './RecipeList.css'

class RecipeList extends Component{

    render(){

        const list = recipes.recipes.map(r => {
            return (
                <div className="col col-md-4">
                    <Recipe info={r} key={r.id} />
                </div>
            )
        });

        return(
            <div className="RecipeList">
                <div className="row">
                    {list}
                </div>
            </div>
        )
    }
}

export default RecipeList;