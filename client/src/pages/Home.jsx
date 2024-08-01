import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  posts.forEach(post => {
    const imageUrl = `C:/Users/91943/Desktop/Blog app/client/public/upload/${post.img}`;
    console.log(`Image URL for post ${post.id}: ${imageUrl}`);
  });
  
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          
          <div className="post" key={post.id}>
            <div className="img">
            
              <img src={`/upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;