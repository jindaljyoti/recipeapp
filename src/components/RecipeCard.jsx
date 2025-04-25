import { useState} from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { generateRecipe } from "../GenerateRecipeApi";

const RecipeCard = () => {
    const [ingredients, setIngedients] = useState('');
    const [recipe, setRecipe] = useState('')

    const handleSubmit = (e) => {
         e.preventDefault();
         handleGenerate(ingredients)
    }

    const handleGenerate = async (ingredients) => {
         const generatedRecipe = await generateRecipe(ingredients);
         setRecipe(generatedRecipe);
    }

    return (

   <>
      <NavBar /> <hr/>
     <div className="  md:flex justify-center ml-48 md:mr-48 ">
      <div className="text-center mt-5 overflow-hidden shadow-lg md:w-[450px] h-[500px] md:m-auto w-[300px] -ml-20 ">
         <h3 className="text-2xl">Recipe Generator</h3>

         <form onSubmit={handleSubmit}>
           <div className="flex flex-col mt-3 ">
             <label htmlFor="ingredients">Ingredients</label>
             <input type='text' className="border border-gray-500 m-3 p-2 rounded h-10"
              value={ingredients}
              onChange={(e) => setIngedients(e.target.value)}
              id="ingredients"
             />
           </div>
           <button className="m-5" type="submit">Generate Recipe</button>
         </form>
        
      </div>
      {/* display recipe */}
       
      <div className="text-center mt-5 overflow-hidden shadow-lg md:w-[450px] h-[500px] md:m-auto w-[300px] -ml-20">
     
         <h3 className="text-2xl">Display Recipe</h3>
         {recipe ?
           <div className="mt-5">
            <p>{recipe}</p>
           </div>:''
 }
      </div>
       <hr/>
     </div>
      <Footer />
    </>
)}

export default RecipeCard;