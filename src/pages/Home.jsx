import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

export default function Home() {
  const API_URL = `https://fakestoreapi.com/products `;
  const [loader, setloader] = useState(false);
  const [posts, setposts] = useState([]);

  async function fetchProductData() {
    setloader(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setposts(data);
    } catch (e) {
      console.log("Error aagya hai fetch karte samye" + e);
      setposts([]);
    }
    setloader(false);
  }
  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div className=" ">
      {loader ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-4 max-w-6xl w-4xl min-w-5xl ml-50 mx-auto p-2 space-y-10 space-x-5 rounded-xl">
          {posts.map((post) => {
            return <Product key={post.id} post={post} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center">No Posts Found</div>
      )}
    </div>
  );
}
