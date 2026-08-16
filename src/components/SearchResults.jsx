import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import ProductCard from "./ProductCard";
import Menu from "./Menu";
import Footer from "./Footer";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { products } = useContext(ProductContext);

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center justify-center mb-7">
        <h2 className="mt-7 font-bold text-maintext">
          نتایج جستجو برای: «{query}»
        </h2>

        {results.length === 0 ? (
          <p className="mt-10 text-gray-500">
            هیچ محصولی با این نام پیدا نشد.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 grid-cols-2 items-center justify-center md:gap-12 gap-4 mt-7">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}