import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import "./Product.css";


export default function Product({ post }) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(remove(post.id));
    toast.error("Removed from Cart");
  };
  const addItem = () => {
    dispatch(add(post));
    toast.success("Added to Cart");
  };

  return (
    <div className=" product flex flex-col justify-center w-4xl p-2 h-3xl items-center rounded-2xl border-black hover:scale-110 transition duration-300">
      <div className="font-semibold text-black mt-3 mb-1 text-left w-2xl">
        {post.title.split(" ").slice(0, 4).join(" ") + "..."}
      </div>
      <div className="text-sm text-left font-gray-400 w-3xl">
        {post.description.split(" ").slice(0, 10).join(" ") + "...."}
      </div>
      <div className="mt-1 mb-4 h-[170px]">
        <img src={post.image} className="h-full w-full my-5 mb-5" />
      </div>
      <div className="flex justify-center items-center mb-3 mt-3">
        <p className="font-bold mr-6 text-green-600">${post.price}</p>
        {cart.some((p) => p.id == post.id) ? (
          <button
            className=" butn rounded-l-full rounded-r-full hover:bg-black hover:text-white transition duration-200 ease-in border-2 border-black p-2 w-2xl font-bold black ml-6"
            onClick={removeItem}
          >
            remove Item
          </button>
        ) : (
          <button
            className=" butn rounded-md border-2 rounded-l-full rounded-r-full hover:bg-black hover:text-white transition duration-200 ease-in font-bold border-black p-2  black ml-6"
            onClick={addItem}
          >
            add Item
          </button>
        )}
      </div>
    </div>
  );
}
