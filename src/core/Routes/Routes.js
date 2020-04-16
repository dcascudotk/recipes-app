import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import RecipeList from "../../shared/Recipe/RecipeList";
import RecipeForm from "../../shared/Recipe/RecipeForm";
import RecipeDetails from "../../shared/Recipe/RecipeDetails";

class Routes extends Component{

    render(){
        return(
            <Switch>
                <Route exact path='/recipe/details/:id' component={RecipeDetails} />
                <Route exact path='/recipe/:id' component={RecipeForm} />
                <Route path='/' component={RecipeList} />
            </Switch>
        )
    }
}

export default Routes;