import { useContext } from "react";
import { CartContext } from "./CartContext";
import Menu from "./Menu";
import Footer from "./Footer";
import { FaTrash } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";

const SHIPPING_COST = 100000;

function toEnglishDigits(str) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(str).replace(/[۰-۹]/g, (d) => persianDigits.indexOf(d));
}

function parsePrice(price) {
  const cleaned = toEnglishDigits(price).replace(/[^\d]/g, "");
  return Number(cleaned) || 0;
}

function formatPrice(num) {
  return num.toLocaleString("fa-IR");
}

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const itemsTotal = cartItems.reduce((sum, item) => {
    const unitPrice = parsePrice(item.price);
    const qty = item.quantity || 1;
    return sum + unitPrice * qty;
  }, 0);

  const finalTotal = cartItems.length > 0 ? itemsTotal + SHIPPING_COST : 0;

  if (cartItems.length === 0) {
    return (
      <div>
        <Menu />
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <p className="text-gray-500 text-lg">سبد خرید خالی است</p>
          <MdAddShoppingCart  className="w-[30px] h-[30px] text-maintext"/>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Menu />
      <div className="flex md:flex-row flex-col-reverse gap-6 px-4 mt-12 mb-12">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-lg">
            سبد خرید ({cartItems.length} کالا)
          </h2>

          {cartItems.map((item) => {
            const unitPrice = parsePrice(item.price);
            const qty = item.quantity || 1;
            const lineTotal = unitPrice * qty;

            return (
              <div
                key={item.id}
                className="flex flex-row items-center gap-4 border-b pb-4"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-24 object-cover rounded-lg"
                />
                <div className="flex flex-col gap-1 flex-1">
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="text-[12px] text-gray-500">تعداد: {qty}</p>
                  <div className="flex flex-row items-center gap-1">
                    <p className="font-bold text-maintext">
                      {formatPrice(lineTotal)}
                    </p>
                    <p className="text-[11px]">{item.toman}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 cursor-pointer"
                >
                  <FaTrash />
                </button>
              </div>
            );
          })}
        </div>

        <div className="md:w-[300px] border rounded-xl p-5 flex flex-col gap-4 h-fit">
          <div className="flex flex-row justify-between text-sm">
            <p>قیمت کالاها ({cartItems.length})</p>
            <p>{formatPrice(itemsTotal)} تومان</p>
          </div>
          <div className="flex flex-row justify-between text-sm">
            <p>هزینه ارسال</p>
            <p>{formatPrice(SHIPPING_COST)} تومان</p>
          </div>
          <div className="flex flex-row justify-between font-bold border-t pt-3">
            <p>مبلغ قابل پرداخت</p>
            <p>{formatPrice(finalTotal)} تومان</p>
          </div>
          <button className="bg-black text-white rounded-lg py-3 cursor-pointer hover:opacity-90 transition">
            ثبت سفارش
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
