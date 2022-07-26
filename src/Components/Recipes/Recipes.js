import Recipe from '../Recipe/Recipe';
import './Recipes.css';

export default function Recipes({ recipes }) {
    return (
        <div className='recipes-wrapper'>
            <div className='recipes'>
                {recipes.map((recipe, index) => (
                    <Recipe
                        key={index}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>

    )
}