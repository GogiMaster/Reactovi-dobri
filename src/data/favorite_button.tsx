import { useState } from "react"
import red from "../assets/heart-red.svg";
import heart from "../assets/heart.svg";

export const Favorite = () => {
const [favorite,setFavorite]= useState(false)
const toggleFavorite=()=>{
    setFavorite(!favorite)
}
  return (
    <div onClick={() => toggleFavorite()}>
        {favorite ? ( <img className="heart" src={red}  />):(
            <img className="heart" src={heart}  />    
        )}

        
    </div>
  )
}
