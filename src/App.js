import './App.css';
import { useState, useEffect } from 'react';
import FormRecipes from './Components/FormRecipes/FormRecipes';
import Recipes from './Components/Recipes/Recipes';
import Pagination from './Components/Pagination/Pagination';

const API = {
  key: '1cd700c820e0d60b4aa35c86a46dd9cd', // get your own key at https://www.edamam.com/
  id: 'e823cbcd'
}

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);

  useEffect(() => {
    getRecipes().catch(console.error);
  }, [search]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${API.id}&app_key=${API.key}`)
    const data = await response.json();

    setRecipes(data.hits);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    setSearch(event.target.recipes.value);

    event.target.recipes.value = '';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth", });
};

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirsRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirsRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  return (
    <div className="main">
      <div className='main__container'>
        <h1 className="main__title">Recipe Search</h1>
        <FormRecipes onSubmit={onSubmit} />
        <Recipes recipes={currentRecipes} />
        <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipes={recipes.length} 
          paginate={paginate} 
          currentPage={currentPage}
        />
      </div>

    </div>
  );
}

export default App;
