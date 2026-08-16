import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { CartContext } from "./CartContext";

export default function AddtoCart({
  inventory,
  productId,
  name,
  img,
  price,
  toman,
  quantity = 1,
}) {
  const isAvailable = inventory === "موجود در انبار";

  const { addToCart } = useContext(CartContext);

  function handleClick() {
    addToCart({ id: productId, name, img, price, toman,quantity  });
  }

  return (
    <div>
      <button
        disabled={!isAvailable}
        onClick={handleClick}
        className={`flex flex-row items-center justify-center gap-2 border-3 md:px-4 md:py-[6px] rounded-[10px] transition-all duration-300 md:mr-4 md:text-[14px] mr-2 text-[10px] px-1 py-[8px] ${
          isAvailable
            ? "cursor-pointer border-four hover:bg-three"
            : "border-gray-300 text-gray-400 cursor-not-allowed bg-gray-100"
        }`}
      >
        افزودن به سبد خرید
        <FaCartPlus className="text-blue-500" />
      </button>
    </div>
  );
}
