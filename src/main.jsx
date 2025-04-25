import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails.jsx';
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import RecipeCard from './components/RecipeCard.jsx';

const router = createBrowserRouter([
   //components
  
   {
    path:'/:mealId',
    element: <RecipeDetails />
   },
   {
    path:'/recipe',
    element: <RecipeCard />
   },
   
   // pages
   {
    path:'/',
    element: <Home />
   },
   {
    path:'/about',
    element: <About />
   },
   {
    path:'/contact',
    element:<Contact />
   }
]

)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
