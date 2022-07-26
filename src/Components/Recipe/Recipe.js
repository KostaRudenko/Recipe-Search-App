import './Recipe.css';

export default function Recipe({ title, calories, image, ingredients }) {
    return (
        <div className="recipe-card recipes__item">
            <img className='recipe-card__image' src={image} alt="alt" />
            <h2 className='recipe-card__title'>{title}</h2>
            <p className='recipe-card__calories'>{Math.ceil(calories)} calories</p>
            <ul className='recipe-card__ingredients-list'>
                {ingredients.map((ingredient, index) => (
                    <li className='recipe-card__ingredients-item' key={index}>
                        {ingredient.text}
                    </li>
                ))}
            </ul>

        </div>
    )
}