import { FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";
import namad1 from "../image/Footer/pic1.png";
import namad2 from "../image/Footer/pic2.png";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-row justify-between md:px-12 px-4 border-b-2 border-gray-300 mb-4 pt-2 w-full">
        <h2 className="font-bold text-maintext md:text-[26px] text-[20px]">
          BestShop
        </h2>
        <div className="flex md:flex-row flex-col gap-3 items-center justify-center ">
          <p className="md:border-l-2 md:border-black md:text-[13px] md:pl-3 text-[10px]">
            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
          </p>
          <div className="flex flex-row items-center justify-center mb-2 md:mb-0">
            <p className="text-[10px] md:text-[14px]">021-99887744</p>
            <FaPhoneVolume className="text-maintext md:text-[24px] text-[17px]" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex md:flex-row flex-col gap-2 px-12">
          <div>
            <h3 className="font-bold text-maintext mb-2">
              فروشگاه اینترنتی بست شاپ{" "}
            </h3>
            <p className="md:w-[70%] md:text-[14px] text-[12px]">
              اصلی ترین شعار ما، ادغام کیفیت و قیمت مناسب است. پوشاک بست شاپ این
              بستر را فراهم کرده است تا به راحتی و با اطمینان، لباس های مورد
              علاقه ‌خود را به صورت آنلاین خریداری کنید. امیدواریم که خرید لذت
              ‌بخشی را با ما تجربه کنید.
            </p>
          </div>
          <div className="md:w-[30%] flex flex-row md:gap-4 items-center justify-center gap-2 mt-2 md:mt-0 ">
            <Link
              to="/About"
              className="border-2 border-maintext md:px-4 md:py-2 px-3 py-1 rounded-[8px] transform hover:scale-[0.85] hover:bg-maintext text-[14px]"
            >
              درباره ما
            </Link>
            <Link
              to="/Contact"
              className="border-2 border-maintext md:px-4 md:py-2 px-3 py-1 rounded-[8px] transform hover:scale-[0.85] hover:bg-maintext text-[14px]"
            >
              تماس با ما
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mt-4 gap-2">
          <img
            className="md:w-[100px] md:h-[120px] w-[70px] h-[70px]"
            src={namad1}
            alt="namad"
          />
          <img
            className="md:w-[100px] md:h-[120px] w-[70px] h-[70px]"
            src={namad2}
            alt="namad"
          />
        </div>
        <p className="text-center md:text-[12px] text-[8px] text-gray-500 mt-4 md:mb-2 mb-5">
          کلیه حقوق این سایت متعلق به شرکت نوآوران فن آوازه (فروشگاه اینترنتی
          بست شاپ) می‌باشد.
        </p>
      </div>
    </div>
  );
}
