import React from 'react';
import './App.css';
import Navbar from './core/Nav/Navbar';
import Routes from './core/Routes/Routes';
import {RecipeProvider} from './contexts/recipe.context';
import {IngredientProvider} from './contexts/ingredient.context';

function App() {
  return (
    <RecipeProvider>
      <IngredientProvider>
        <Navbar/>
        <div className="App container">
          <Routes />
        </div>
      </IngredientProvider>
    </RecipeProvider>
  );
}

export default App;
