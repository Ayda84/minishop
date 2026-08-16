import { Link } from "react-router-dom"

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative md:w-full md:h-80 w-[150px] h-60 overflow-hidden rounded-2xl group">
        <img
          src={product.img}
          alt={product.name}
          className="md:w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
      </div>

      <p className="text-[10px] text-gray-500">{product.name}</p>
      <div className="flex flex-row items-center justify-center gap-1">
        <h3 className="text-fuchsia-600">{product.price}</h3>
        <p className="text-[12px]">{product.toman}</p>
      </div>
      <div className="mt-2">
        <Link
          to={`/Information/${product.id}`}
          className="border-2 border-four text-[12px] cursor-pointer p-1 rounded-[5px] hover:bg-three transition-colors duration-300 block text-center"
        >
          اطلاعات محصول
        </Link>
      </div>
    </div>
  );
}
