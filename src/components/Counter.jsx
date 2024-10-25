import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/CounterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-evenly font-bold mt-[15px] text-2xl">
      <button
        className="bg-[red] rounded-md p-2 hover:bg-[green] border-solid border-black border-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <div className="bg-[#9494e9] w-100 h-10 rounded-md border-black border-solid border-2 my-auto">
        {count}
      </div>
      <button
        className="bg-[red] rounded-md p-2 hover:bg-[green] border-solid border-black border-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}
