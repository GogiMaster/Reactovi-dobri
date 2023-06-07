import { PostType } from "../types";
import trash from '../../../assets/trash.svg'
import profile from '../../../assets/profile.svg'
import heartRed from '../../../assets/heart-red.svg'
import heart from '../../../assets/heart.svg'
import chat from '../../../assets/bubble.svg'
import airplane from '../../../assets/airplane.svg'
import { useEffect, useState } from "react";


type PostProps = {
  data: PostType;
};

const Post = ({data}:PostProps,// handlePostDelete:any 
  ) => {
    //Lokalno spremanje podataka
    const [isLiked, setIsLiked] = useState<boolean>(() => {
      
      const storedValue = localStorage.getItem('isLiked');
      return storedValue ? JSON.parse(storedValue) : false;
    });
    
    useEffect(() => {
      localStorage.setItem('isLiked', JSON.stringify(isLiked));
    }, [isLiked]);
    
    const handleLikeClick = () => {
      setIsLiked((prevIsLiked) => !prevIsLiked);
    };
 //Za brisanje post-a
 const deletePost=(id:string)=>{
  fetch("http://localhost:3000/instagram/"+ id,{
    method:'DELETE',
  })
  .then(res =>res.json())
  .then((res)=>{
      
  })
}
//handlePostDelete

  return (
    <>
    <div className="post" key={data.id}>
   <div className="post__header">
    <img  className="post__bigger" src={profile}/>
   </div>
   <div className="post__tab">
    <h1>{data.title}</h1>
    <img className="post__svg" onClick={()=>deletePost(data.id)} src={trash}/>


   </div>
    <img className="post__img" src={data.img_url}  />
    <div className="post__bar">
    {isLiked  ? <img className="post__svg" src={heartRed} onClick={handleLikeClick}/> : <img onClick={handleLikeClick} className="post__svg" src={heart}/> }

      <img className="post__svg" src={chat} />
      <img className="post__svg" src={airplane} />
    </div>
    <p>{data.description}</p>
    <span>{'#'+ data.hashtags} </span>
  </div>
   </>
  )
}

export default Post