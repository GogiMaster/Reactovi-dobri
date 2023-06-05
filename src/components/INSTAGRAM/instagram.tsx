import { useEffect, useState } from "react";
import { PostType } from "./types";

const newPost = {
  id: 2,
  title: "oblak",
  description: "Ovo je obak sliko sam ga i baš je dope",
  hashtag: ["oblak", "priroda", "de lajkaj"],
  img_url:
    "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1308797233.jpg",
};

const Instagram = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const getPosts = () => {
    fetch("http://localhost:3000/instagram")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => err(err));
  };
  const createPpost = (obj: PostType) => {
    fetch("http://localhost:3000/instagram",
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' });
    
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Instagram</h1> <hr />
        <div className="screen">
          <div className="instagram__bar">
            <img
              src="https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg"
              className="instagram__profile"
            />
            <h1>POSTS</h1>
          </div>
          {posts.map((post) => {
            return (
              <div className="instagram__post">
                <img src={post.img_url} alt="" />

                <div className="instagram__post__bar">like</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Instagram;
