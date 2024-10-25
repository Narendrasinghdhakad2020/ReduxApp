import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
export default function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, settotalAmount] = useState(0);
  useEffect(() => {
    settotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, cart);
  return (
    <div className="  mx-auto w-[60vw] ">
      {cart.length > 0 ? (
        <div className="flex justify-center items-center">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div>
            <div className="flex flex-col w-[500px] ">
              <div className="font-bold text-green-600 text-2xl ">
                Your Cart
              </div>
              <div className="font-bold text-green-600 text-5xl">Summary</div>
              <div className="mb-10">
                <p>
                  <span className="font-bold text-black text-xl mb-10 ">
                    Total Items: {cart.length}
                  </span>
                </p>
              </div>
              <div className="flex flex-col justify-center items-center mt-20 ">
                <span className="font-semibold text-xl text-black">
                  Total Price:${totalAmount}
                </span>
                <button className=" mt-4 mb-3 rounded-l-full rounded-r-full border-2 font-bold hover:bg-green-700 hover:text-black border-green-600 text-green-700 w-[160px] h-10">
                  CheckOut Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl text-green-500 mt-60 mb-5 text-5xl ">
            Your cart is empty!
          </h1>
          <Link to="/">
            <button className="w-40 text-3xl rounded-md bg-green-500 text-black">
              Shop Now!
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
