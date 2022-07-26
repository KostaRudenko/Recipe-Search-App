import './FormRecipes.css';

export default function FormRecipes({ onSubmit }) {
    return (
        <form className="search-box" onSubmit={onSubmit}>
            <div className="search-box__body">
                <input
                    type="text"
                    className="search-box__input"
                    placeholder="Search for recipes"
                    id="recipes"
                    required
                />
                <button className="search-box__submit" type="submit">Search</button>
            </div>

        </form>
    );
}