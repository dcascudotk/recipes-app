import React from "react";


function RecipeForm(){

    return(
        <form>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" placeholder="title goes here..." />
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    )
}

export default RecipeForm;