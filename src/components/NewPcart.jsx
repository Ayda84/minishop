import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import ProductCard from "./ProductCard";

export default function NewPcart() {
  const { products } = useContext(ProductContext);

  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <div className="flex items-center justify-between md:flex-row flex-col max-w-7xl mx-auto px-4 mt-5 gap-7">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
