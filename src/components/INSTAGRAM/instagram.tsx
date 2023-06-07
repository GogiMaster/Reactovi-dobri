import { useEffect, useState } from "react";
import { PostType } from "./types";
import { v4 as uuidv4 } from "uuid";
import plus from "../../assets/plus.svg";
import airplane from "../../assets/airplane.svg";
import profile from "../../assets/profile.svg";
import trash from "../../assets/trash.svg";
import chat from "../../assets/bubble.svg";
import Like from "./Posts/like";
const newPost = {
  id: 2,
  title: "oblak",
  description: "Ovo je obak sliko sam ga i baš je dope",
  hashtag: ["oblak", "priroda", "de lajkaj"],
  img_url:
    "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1308797233.jpg",
};

const Instagram = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [posts, setPosts] = useState<PostType[]>([]);
  //Funkcija za otvaranje modala
  const handleModal = () => {
    setModal(!modal);
  };

  ////Funkcija za dohvacanje i ispisivanje post-ova
  const getPosts = () => {
    fetch("http://localhost:3000/instagram")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((post) => {
        console.log(post);
        setPosts(post);
      })
      .catch((err) => err(err));
  };
  //funkcija za sljanje novih postova na server
  const createPost = (obj: PostType) => {
    fetch("http://localhost:3000/instagram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((post) => {
        getPosts();
      })
      .catch((error) => console.log(error));
  };

  //Za upisivanje vrijednosti u novi post
  const handlePost = () => {
    const titleValue = document.querySelector(
      "#post_title"
    ) as HTMLInputElement;
    const descValue = document.querySelector(
      "#post_desc"
    ) as HTMLTextAreaElement;
    const imgValue = document.querySelector("#post_img") as HTMLInputElement;

    const newPost: PostType = {
      id: uuidv4(),
      title: titleValue.value,
      description: descValue.value,
      img_url: `https://source.unsplash.com/random/300×300/?${imgValue.value}`,
      hashtags: ["super", "mnogo dobro"],
    };
    createPost(newPost);
    setModal(false);
  };
  //za brisanje
  const deletePost = (id: string) => {
    fetch("http://localhost:3000/instagram/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        getPosts();
      });
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="container--sm">
        <div className="post__tab">
          <h1>Instagram</h1>
          <img
            className="post__bigger"
            src={plus}
            onClick={() => handleModal()}
          />
        </div>
        <hr />
        {posts.map((post) => {
          return (
            <>
              <div className="post" key={post.id}>
                <div className="post__header">
                  <img className="post__bigger" src={profile} />
                </div>
                <div className="post__tab">
                  <h1>{post.title}</h1>
                  <img
                    className="post__svg"
                    onClick={() => deletePost(post.id)}
                    src={trash}
                  />
                </div>
                <img className="post__img" src={post.img_url} />
                <div className="post__bar">
                  <Like data={post} />
                  <img className="post__svg" src={chat} />
                  <img className="post__svg" src={airplane} />
                </div>
                <p>{post.description}</p>
                <span>{"#" + post.hashtags} </span>
              </div>
            </>
          );
        })}

        {modal ? (
          <>
            <div onClick={handleModal} className="overlay"></div>
            <div className="post__modal">
              <input
                id="post_title"
                required
                className="post__modal__input"
                type="text"
                placeholder="Title"
              />
              <textarea
                id="post_desc"
                required
                name="description"
                className="post__modal__input"
                placeholder="Description"
              ></textarea>
              <input
                id="post_img"
                required
                className="post__modal__input"
                type="text"
                placeholder="Random Image"
              />
              <input
                id="post_hash"
                required
                className="post__modal__input"
                type="text"
                placeholder="Hashtags"
              />
              <button
                type="submit"
                onClick={() => handlePost()}
                className="btn"
              >
                Create Post
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Instagram;
