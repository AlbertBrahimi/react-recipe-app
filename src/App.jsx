import { useState, useEffect } from 'react';
import Recipe from './components/recipe';
import './App.css';

const App = () => {
const apiId= import.meta.env.VITE_APP_API_ID
const apiKey= import.meta.env.VITE_APP_API_KEY


const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('burger');


useEffect(()=>{
 getRecipes();
},[query])
// kemi krijur nje async funksion per te marre te dhenat nga api

const getRecipes = async () => {
  try {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`);
    const data = await response.json();
    
    if (data.hits.length === 0) {
      alert('No recipes found.');
    } else {
      setRecipes(data.hits);
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
  console.log(recipes);
};


const handleSearch =(e)=>{
  setSearch(e.target.value)
};
const getSearch = (e)=>{
  e.preventDefault();
  if(search==''){
    alert('Please enter a recipe name')
 } else {
  setQuery(search);
  setSearch('');
 }
}
  return (
    <div className="App">
     <div className="header">
     <h1>Search for your Recipe</h1>
     </div>
      <form className="search__form" onSubmit={getSearch}>
        <input type="text" className="search__bar"  value={search} onChange={handleSearch}/>
        <button type="submit" className="search__button" >
          Search
        </button>
      </form>
      <div className="recipe__card">
      {
        recipes.map(recipe=>(
          < Recipe
          key={recipe.recipe.uri}
          title={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          image={recipe.recipe.image}
          />
        ))
      }
      </div>
    </div>
  );
};

export default App;
