import React from 'react';
import './App.css';
import Navbar from './core/Nav/Navbar';
import Routes from './core/Routes/Routes';
import {RecipeProvider} from './contexts/recipe.context';
import {IngredientProvider} from './contexts/ingredient.context';
import { TagProvider } from './contexts/tag.context';

function App() {
  return (
    <RecipeProvider>
      <IngredientProvider>
        <TagProvider>
          <Navbar/>
          <div className="App container">
            <Routes />
          </div>
        </TagProvider>
      </IngredientProvider>
    </RecipeProvider>
  );
}

export default App;
