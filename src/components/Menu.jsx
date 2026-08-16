import { useContext } from "react";
import { BsShop } from "react-icons/bs";
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import CartIcon from "./CartIcon";
import { FaRegUser } from "react-icons/fa6";
import SearchBar from "./SearchBar";
import topBanner from "./image/top-banner-web.gif";

export default function Menu() {
  const { islogged } = useContext(AuthContext);

  const itemsMenu = [
    { name: "همه استایل‌ها", path: "/" },
    { name: "زنانه", path: "/Women" },
    { name: "مردانه", path: "/men" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <img
        className="h-10 w-full"
        src={topBanner}
        alt="banner"
      />

      <div className="w-full flex md:flex-row flex-col items-center justify-center md:gap-40 gap-4 mt-2 ">
        <div className="md:pr-10 items-center justify-center flex flex-col gap-1">
          <Link
            to="/"
            className="font-bold text-maintext items-center justify-center flex flex-col gap-1"
          >
            <BsShop className="w-14 h-14 text-black" />
            BestShop
          </Link>
        </div>

        <div className="flex flex-row items-center justify-center md:gap-7 md:pr-14 md:ml-40 gap-6 text-[14px] md:text-[16px]">
          {itemsMenu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `cursor-pointer pb-2 border-b-3 transition-all duration-300 ${
                  isActive
                    ? "text-maintext border-black font-bold"
                    : "text-second border-transparent font-bold"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <SearchBar />

          <div className="flex flex-row  items-center justify-center border-2 p-2 rounded-xl gap-2 transition-colors duration-300 border-second hover:bg-second">
            <HiOutlineArrowLeftStartOnRectangle className="md:w-5 md:h-5 w-3 h-3" />
            <Link
              to="/Login"
              className="cursor-pointer md:text-[12px] text-[8px]"
            >
              {islogged ? "خوش آمدید" : "ورود یا ثبت نام"}
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <Link to="/userdata">
              <FaRegUser className="md:w-6 md:h-6 w-4 h-4 cursor-pointer" />
            </Link>
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
