import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const API_URL = 'https://api.openai.com/v1/chat/completions';

export const generateRecipe = async (ingredients) => {
   
   const response = await axios.post(API_URL,
     
    {
  
      max_tokens: 100,
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: `Generate a recipe with the following ingredients:${ingredients}`}],
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
       
      }
     
    }
   )
      return (response.data.choices[0].message.content)
    
}  
