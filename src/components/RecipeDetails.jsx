import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const RecipeDetail = () => {
    // useParams will help you to get the meal id
   
    const [details, setDetails] = useState();
    const {mealId} = useParams();
    const [isLoading, setIsLoading] = useState(false); 
    const api_url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

    const getDetails = async () => {
         setIsLoading(true)
        const response = await fetch(api_url)
        const data = await response.json()
         setDetails(data.meals[0])
         setIsLoading(false)
         
    }  

  useEffect(() => {
    if(details != ''){
        getDetails()
    }
   
  },[])  

   if(isLoading) return <div>Loading...</div>
    return (
      <>
      <NavBar/>
      <hr/>
        <p className="text-center text-2xl mt-5">Recipe Details</p>
        <div>
        
       {!details? 'Not found': <div className="flex flex-col">
        <img src={details.strMealThumb} className="w-[600px] h-[300px] m-auto mt-10 rounded-lg"/>
          
            <p className="text-center text-lg ">{details.strMeal}</p>
            <strong className="px-32 mt-2 text-xl">Instructions</strong>
           
           <div className="md:flex md:flex-row mt-3 justify-around px-16"> 
          
            <p className="md:w-[680px] w-[418px] md:text-xl text-sm whitespace-pre-line"> {details.strInstructions} </p>
            <div className="md:mt-[-40px] ">
              <div className="grid grid-cols-2">
            <strong className="md:text-xl">Ingredients</strong>
             <strong className="md:text-xl md:relative left-52 md:inline-block hidden">Measurements</strong>
              </div>
             {/* ingredient and measurement */}
             
            <ul className="mt-3">
              {[details.strIngredient1,details.strIngredient2,details.strIngredient3,details.strIngredient4,details.strIngredient5,
                details.strIngredient6,details.strIngredient7,details.strIngredient8,details.strIngredient9,details.strIngredient10,
                details.strIngredient11,details.strIngredient12,details.strIngredient13,details.strIngredient14,details.strIngredient15,
                details.strIngredient16,details.strIngredient17,details.strIngredient18,details.strIngredient19,details.strIngredient20
              ].map((item,index) => (
                
                <li key={index}>{item}</li>
            
              ))}
               </ul>
             
            </div>
              <div>  
              <ul className="md:inline-block hidden">
                 {[details.strMeasure1,details.strMeasure2,details.strMeasure3,details.strMeasure4,details.strMeasure5,
                details.strMeasure6,details.strMeasure7,details.strMeasure8,details.strMeasure9,details.strMeasure10,
                details.strMeasure11,details.strMeasure12,details.strMeasure13,details.strMeasure14,details.strMeasure15,
                details.strMeasure16,details.strMeasure17,details.strMeasure18,details.strMeasure19,details.strMeasure20
              ].map((measure,index) => (
                 <li key={index}>{measure}</li>
              ))}
              </ul>
              </div>
            </div>

        </div> }
    </div>
    <Footer />
     </>
    )
}
export default RecipeDetail