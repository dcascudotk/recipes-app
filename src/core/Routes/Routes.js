import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import RecipeList from "../../shared/Recipe/RecipeList";
import AddRecipe from "../../shared/Recipe/AddRecipe";


class Routes extends Component{

    render(){
        return(
            <Switch>
                <Route exact path='/add' component={AddRecipe} />
                <Route path='/' component={RecipeList} />
            </Switch>
        )
    }
}

export default Routes;