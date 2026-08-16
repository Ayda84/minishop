import { useContext, useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { ProductContext } from "./ProductContext";
import AddtoCart from "./AddtoCart";
import womenBanner from "../image/women/pic1.webp";

export default function Women() {
  const [activeTab, setactiveTab] = useState("shomiz");

  const { shomizes, pantsWomen } = useContext(ProductContext);

  const currentItem = activeTab === "shomiz" ? shomizes : pantsWomen;

  const [quantities, setQuantities] = useState({});

  function getQuantity(productId) {
    return quantities[productId] || 1;
  }

  function addItem(productId) {
    setQuantities((prev) => ({
      ...prev,
      [productId]: getQuantity(productId) + 1,
    }));
  }

  function notAdd(productId) {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, getQuantity(productId) - 1),
    }));
  }

  return (
    <div>
      <Menu />
      <div className="mb-7">
        <img
          src={womenBanner}
          alt="women-banner"
          className="mt-3 w-full"
        />

        <div className="flex flex-row gap-3 items-center justify-center mt-7">
          <button
            onClick={() => setactiveTab("shomiz")}
            className={`border-2 px-5 py-1 rounded-[8px] cursor-pointer transition-colors duration-300 ${
              activeTab === "shomiz"
                ? "bg-second text-white border-second"
                : "border-four text-four hover:bg-four hover:text-white"
            }`}
          >
            شومیز
          </button>

          <button
            onClick={() => setactiveTab("pants")}
            className={`border-2 px-5 py-1 rounded-[8px] cursor-pointer transition-colors duration-300 ${
              activeTab === "pants"
                ? "bg-second text-white border-second"
                : "border-four text-four hover:bg-four hover:text-white"
            }`}
          >
            شلوار
          </button>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-8 mt-7 mb-7 px-4">
          {currentItem.map((item) => {
            const productId = `${activeTab}-${item.id}`;
            const quantity = getQuantity(productId);

            return (
              <div
                key={item.id}
                className="flex flex-row items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="group relative overflow-hidden rounded-xl cursor-pointer">
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>

                  <p className="md:text-[12px] text-[10px]">{item.name}</p>
                  <p className="md:text-[10px] text-[8px]">{item.Inventory}</p>
                  <div className="flex flex-row items-center justify-center gap-1">
                    <h3 className="text-maintext font-bold">{item.price}</h3>
                    <p className="text-[10px]">{item.toman}</p>
                  </div>

                  <div className="flex md:flex-row flex-col items-center justify-center gap-2">
                    <div className="flex flex-row items-center justify-center gap-2 border-2 mb-1 border-maintext rounded-2xl px-1 md:px-2">
                      <button
                        onClick={() => addItem(productId)}
                        className="md:text-[20px] cursor-pointer border-l-2 md:px-1 border-second md:pl-2 text-[14px] px-2"
                      >
                        +
                      </button>
                      <p>{quantity}</p>
                      <button
                        onClick={() => notAdd(productId)}
                        className="md:text-[20px] cursor-pointer border-r-2 md:px-1 border-second md:pr-2  px-2 text-[14px]"
                      >
                        -
                      </button>
                    </div>

                    <AddtoCart
                      inventory={item.Inventory}
                      productId={productId}
                      name={item.name}
                      img={item.img}
                      price={item.price}
                      toman={item.toman}
                      quantity={quantity}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
