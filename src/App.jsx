import { useEffect, useState } from 'react';
import './App.css'
import RecipeList from './components/RecipeList';
import NavBar from './components/NavBar';

function App() {
 
  const [query,setQuery] = useState('');
  const [recipes,setRecipes] = useState();
  const [isLoading, setIsLoading] = useState(false)

  const searchRecipes = async () => {
      setIsLoading(true)
      try{
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      const data = await response.json()
      setRecipes(data.meals)
      setIsLoading(false)
      }
      catch(error){
        alert('Unable to fetch data')
      }
  }

 useEffect(() => {
    searchRecipes()
    
 },[])
 
 const handleChange = (e) => {
       setQuery(e.target.value);
       
 }
 const handleClick = () => {
    searchRecipes()
    setQuery('')
 }
  if(isLoading) return <div>Loading...</div>
  return (
    <>
        <NavBar handleChange={handleChange} handleClick={handleClick} query={query} />
        <div>
        <img src="images/macrroni.jpeg" className='w-[100%] h-[500px] p-3'/>
      </div>
      <RecipeList recipes={recipes}/>
    </>
  )
}

export default App
