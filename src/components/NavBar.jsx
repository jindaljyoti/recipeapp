import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const menuList= [
 { 
  text:'Home',
  link:'/',
 },
 {
  text:'About',
  link:'/about',
 },
 {
  text:'Contact',
  link:'/contact'
 }
]
const NavBar = ({handleChange,handleClick,query}) => {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const toggleMenu = () => {
      setIsShowMenu(!isShowMenu)
    }
    return(
       <div className="bg-white sticky top-0 w-[98.4%] ml-3">
    
       <div className='flex justify
       -between w-[90%]'> 
        <img src='images\my-recipes.svg' alt='logo' className='size-52  ml-32'/>
        <div className="md:hidden">
          <RxHamburgerMenu className="mt-20 text-2xl ml-10 cursor-pointer" onClick={toggleMenu}/>
        </div>
        <div>
         
          <ul className=' hidden md:flex p-20 gap-6 text-xl'>
            {menuList.map((item,index) => (
             <li key={index} className=' text-black p-2
              hover:bg-orange-600 hover:p-2 hover:text-white cursor-pointer'><Link to={item.link}>{item.text}</Link></li>
            ))}
            
              <input type='text' className="border border-slate-700 rounded-lg pl-2" value={query} onChange={handleChange}
               
              />
               <button onClick={handleClick} >Search</button>
          </ul>
        
        </div>
        {/* Mobile menu */}
        {isShowMenu?(
           <ul className='flex-col md:hidden flex mt-36 relative right-28 bg-orange-300 '>
           {menuList.map((item,index) => (
            <li key={index} className=' text-black p-2
             hover:bg-orange-600 hover:p-2 hover:text-white cursor-pointer'><Link to={item.link}>{item.text}</Link></li>
           ))}
           
             <input type='text' className="w-[150px] m-1 md:border border-slate-700 rounded-lg pl-2" value={query} onChange={handleChange}
              
             />
              <button onClick={handleClick} className="m-2">Search</button>
         </ul>
       
        ):null}
      </div>
      </div>
    )
}
export default NavBar;