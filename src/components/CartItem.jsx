import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
export default function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
  };
  return (
    <div>
      <div className="flex justify-center items-center w-[600px] border-b-2 border-black">
        <div className="flex items-center p-3 m-3 h-[190px]">
          <img src={item.image} className="w-full h-full" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold flex flex-wrap text-2xl">{item.title}</h1>
          <h2 className="text-left">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h2>
          <div className="flex justify-between items-center w-[400px] mt-3 mb-3">
            <p className="font-bold text-green-500 text-left ml-0 ">
              ${item.price}
            </p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase className="w-8 h-8 mr-5 hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
