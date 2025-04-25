import {NavLink} from 'react-router-dom';

const RecipeList = ({recipes}) => {

    return (
        <>
        <h3 className="text-2xl text-center mt-3 ">Recipes</h3>
        <div className="flex flex-wrap mt-4 justify-center gap-4">
            {!recipes?'No recipes found':recipes?.map((item) => (
           <div className="info max-w-sm rounded overflow-hidden shadow-lg p-4 mt-3 " key={item.idMeal}>
            
             <img src={item.strMealThumb} className="w-full" />
             <p className="py-4 text-xl text-center">{item.strMeal}</p>
             <div className="flex justify-center">
             <NavLink to={`${item.idMeal}`}><button>Recipe</button></NavLink>
             <NavLink to= {'/recipe'}><button className='ml-2'>Generate Recipe</button></NavLink>
             </div>
          </div>
           ))}
        </div> 
        </> 
    )
}
export default RecipeList;