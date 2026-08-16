import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import ProductCard from "./ProductCard";
import Menu from "./Menu";
import Footer from "./Footer";

export default function AllProducts() {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <Menu/>
      <div className="flex flex-col gap-7 items-center justify-center mb-7">

      <h2 className="mt-7 font-bold text-maintext">تمامی محصولات</h2>

    <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center md:gap-12 gap-4">
      {
        products.map((product)=>(
          <ProductCard key={product.id} product={product}/>
        ))
      }
    </div>

  </div>
  <Footer/>
    </div>
  )
}
