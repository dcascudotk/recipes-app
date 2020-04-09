import React, {Component} from "react";
import './Recipe.css'

class Recipe extends Component{

    render(){

        const ingredients = this.props.info.ingredients.map(i => {
            return <li key={`time_${i.id}`}>{i.name}</li>
        });

        return (

            <div className="Recipe-card card">
                <img src={this.props.info.image} className="card-img-top" alt={this.props.info.title} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.info.title}</h5>
                    <p className="card-text">{this.props.info.description}</p>
                    <a href="#" className="btn btn-primary">Datails...</a>
                </div>
            </div>
        )
    }
}

export default Recipe;