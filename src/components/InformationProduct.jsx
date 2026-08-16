import { useState, useContext, useEffect } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { IoArrowBackOutline } from "react-icons/io5";
import AddtoCart from "./AddtoCart";

export default function InformationProduct() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const selectedProduct = products.find((p) => p.id === Number(id));

  const storageKey = `count-${id}`;

  const [add, setadd] = useState(
    () => Number(localStorage.getItem(storageKey)) || 1
  );

  useEffect(() => {
    setadd(Number(localStorage.getItem(storageKey)) || 1);
  }, [id]);

  function addItem() {
    const newValue = Number(add) + 1;
    setadd(newValue);
    localStorage.setItem(storageKey, newValue);
  }

  function notAdd() {
    const newValue = Math.max(1, Number(add) - 1);
    setadd(newValue);
    localStorage.setItem(storageKey, newValue);
  }

  if (!selectedProduct) {
    return (
      <div>
        <Menu />
        <p className="text-center mt-10">محصول مورد نظر پیدا نشد.</p>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Menu />

      <div className=" mt-10 flex md:flex-row flex-col items-center justify-center md:gap-22 gap-8 mb-10">
        <div>
          <img
            src={selectedProduct.img}
            alt={selectedProduct.name}
            className="md:w-[550px] md:h-[650px] w-[300px] h-[400px] rounded-[15px] hover:shadow-2xl shadow-pink-500"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-maintext md:text-[20px] text-[16px] ">
            {selectedProduct.name}
          </h1>
          <p className="text-gray-700">{selectedProduct.size}</p>
          <p className="text-[14px]">{selectedProduct.description}</p>
          <div className="flex flex-row items-center gap-1 ">
            <p className="font-bold">{selectedProduct.price}</p>
            <p>{selectedProduct.toman}</p>
          </div>
          <p className="text-[11px] font-bold text-gray-600">
            {selectedProduct.Inventory}
          </p>
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-2 border-2 border-maintext rounded-2xl px-2">
              <button
                onClick={addItem}
                className="text-[20px] cursor-pointer border-l-2 px-1 border-second pl-2"
              >
                +
              </button>
              <p>{add}</p>
              <button
                onClick={notAdd}
                className="text-[20px] cursor-pointer border-r-2 px-1 border-second pr-2"
              >
                -
              </button>
            </div>

            <AddtoCart
              inventory={selectedProduct.Inventory}
              productId={selectedProduct.id}
              name={selectedProduct.name}
              img={selectedProduct.img}
              price={selectedProduct.price}
              toman={selectedProduct.toman}
              quantity={add}
            />

            <Link to="/AllProducts">
              <IoArrowBackOutline className="mr-4 text-[24px] cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
