import { Link } from "react-router-dom";
import NewPcart from "./NewPcart";

export default function NewProducts() {
  return (
    // استفاده از h-auto و پایداری در عرض برای جلوگیری از لرزش
    <div className="w-full py-4 mt-3 ">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 ">
        {/* استفاده از یک کلاس ثابت برای فونت و اندازه برای جلوگیری از پرش ابعادی */}
        <p className="md:text-xl text-[16px] leading-none font-bold text-maintext">
          محصولات جدید
        </p>

        <Link
          to="/AllProducts"
          className="md:text-sm whitespace-nowrap border-2 md:p-2 border-four rounded-sm hover:bg-three transition-colors duration-300 text-[12px] p-1"
        >
          مشاهده همه
        </Link>
      </div>
      <NewPcart />
    </div>
  );
}
