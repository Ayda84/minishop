import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export default function CartIcon() {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="flex flex-row relative">
      <Link to="/cart">
        <BsCart3 className="md:w-7 md:h-7  w-4 h-4 cursor-pointer" />
      </Link>

      {cartCount > 0 && (
        <span className="absolute -top-2 -left-2 bg-maintext text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    </div>
  );
}
