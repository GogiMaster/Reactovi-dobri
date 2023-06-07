import heart from '../../../assets/heart.svg'
import heartRed from '../../../assets/heart-red.svg'
//react
import { useEffect, useState } from 'react';
import { PostType } from '../types';

type PostProps = {
  data: PostType;
};

const Like = ({data}:PostProps) => {

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const storedLikeStatus = localStorage.getItem(`${data.id}`);
    setIsLiked(storedLikeStatus === 'sviđa');
  }, [data.id]);

  // Update the localStorage when the like state changes
  useEffect(() => {
    if (isLiked) {
      localStorage.setItem(`${data.id}`, 'sviđa');
    } else {
      localStorage.removeItem(`${data.id}`);
    }
  }, [data.id, isLiked]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  console.log(localStorage)
 
  return (
    <>
    <div key={data.id}>
    {isLiked  ? <img className="post__svg" id={data.id} src={heartRed} onClick={handleLike}/> : <img id={data.id} onClick={handleLike} className="post__svg" src={heart}/> }

    </div>
    </>
  )
}

export default Like