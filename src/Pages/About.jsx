import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => {
    return(
        <div>
            <NavBar /><hr/>
         
          <h3 className="text-3xl text-center mt-3">About Us</h3>
          <div className="md:flex mt-3 "> 
          <img src='images/food_image.jpeg' className="w-[450px] md:size-1/2 m-5" />
          <p className="text-sm w-[500px] mt-4 md:text-xl md:w-[600px] px-10">
            Welcome to <strong> my recipes </strong>app! At <strong> my recipes </strong>, we believe that cooking is an art 
            that brings people together and turns everyday meals into extraordinary experiences.
            whether you're seasoned chef or just starting your journey, our app is designed to assist 
            you in creating delicious dishes with ease. Explore extensive collection of recipes from various cuisines.
            Get AI generated recipes based on your ingredients. Discover new flavors, hone your cooking skills, and make
            every meal a memorable one with <strong>my recipes</strong>. Happy cooking!
          </p>
        </div> 
        <Footer /> 
        </div>
    )
}
export default About