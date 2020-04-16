
const recipeReducer = (state, action) => {

    switch(action.type){
        case "LOAD":
            return action.recipes;

        case "ADD":
            const newRecipe = action.recipe;
            return [...state, newRecipe];

        case "EDIT":
            const updatedRecipe = action.recipe;
            return state.map(recipe => recipe.id === action.id ? updatedRecipe : recipe);
    
        case "DELETE":
            return state.filter(recipe => recipe.id !== action.id);
    
        default:
            return state;

    }
}

export default recipeReducer;