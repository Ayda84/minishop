import { createContext, useState } from "react";

// ---------- newproduct ----------
import newproductPic1 from "../image/newproduct/pic1.webp";
import newproductPic2 from "../image/newproduct/pic2.webp";
import newproductPic4 from "../image/newproduct/pic4.webp";

// ---------- Allproducts ----------
import allPic1 from "../image/Allproducts/pic1.webp";
import allPic2 from "../image/Allproducts/pic2.webp";
import allPic3 from "../image/Allproducts/pic3.webp";
import allPic4 from "../image/Allproducts/pic4.webp";
import allPic5 from "../image/Allproducts/pic5.webp";
import allPic6 from "../image/Allproducts/pic6.webp";

// ---------- women (shomizes) ----------
import womenPic2 from "../image/women/pic2.jpg";
import womenPic3 from "../image/women/pic3.jpg";
import womenPic4 from "../image/women/pic4.jpg";
import womenPic5 from "../image/women/pic5.jpg";
import womenPic6 from "../image/women/pic6.jpg";
import womenPic7 from "../image/women/pic7.jpg";

// ---------- women (pants) ----------
import womenPantsPic1 from "../image/women/pic-1.jpg";
import womenPantsPic2 from "../image/women/pic-2.jpg";
import womenPantsPic3 from "../image/women/pic-3.jpg";
import womenPantsPic4 from "../image/women/pic-4.jpg";
import womenPantsPic5 from "../image/women/pic-5.jpg";
import womenPantsPic6 from "../image/women/pic-6.jpg";

// ---------- men (shirts) ----------
import menPic1 from "../image/men/pic1.jpg";
import menPic2 from "../image/men/pic2.jpg";
import menPic3 from "../image/men/pic3.jpg";
import menPic4 from "../image/men/pic4.jpg";
import menPic5 from "../image/men/pic5.jpg";
import menPic6 from "../image/men/pic6.jpg";

// ---------- men (pants) ----------
import menPantsPic1 from "../image/men/pic-1.jpg";
import menPantsPic2 from "../image/men/pic-2.jpg";
import menPantsPic3 from "../image/men/pic-3.jpg";
import menPantsPic4 from "../image/men/pic-4.jpg";
import menPantsPic5 from "../image/men/pic-5.jpg";
import menPantsPic6 from "../image/men/pic-6.jpg";

export let ProductContext = createContext();

export default function Producrprovider({ children }) {
  const [products] = useState([
    {
      id: 1,
      img: newproductPic1,
      name: "شومیز کیمونو اطلس A51673",
      size: "سایز : Free size",
      description: "قد 70 , عرض 60 , دور بازو 42 , طول آستین 40 سانتی متر",
      Inventory: "موجود در انبار",
      price: "830,000",
      toman: "تومان",
    },
    {
      id: 2,
      img: newproductPic2,
      name: "شال MK حاشیه خال ریز N21069",
      size: "",
      description: "قد 189 , عرض 60 سانتی متر",
      Inventory: "موجود در انبار",
      price: "325,000 ",
      toman: "تومان",
    },
    {
      id: 3,
      img: newproductPic4,
      name: "تیشرت کریستال رگلان T52008",
      size: "سایز : XL , 2XL , 3XL",
      description: "قد 72 , عرض 60 , دور بازو 46 سانتی متر",
      Inventory: "موجود در انبار",
      price: "728,000 ",
      toman: "تومان",
    },
    {
      id: 4,
      img: allPic1,
      name: "شومیز لینن صبا A31185",
      size: "سایز : XL , 2XL , 3XL",
      description: "قد 72 , عرض 60 , دور بازو 46 سانتی متر",
      Inventory: "موجود در انبار",
      price: "815,000 ",
      toman: "تومان",
    },
    {
      id: 5,
      img: allPic2,
      name: "شومیز ساده لینن A410272",
      size: "سایز : XL , 2XL , 3XL",
      description: "قد 72 , عرض 60 , دور بازو 46 سانتی متر",
      Inventory: "ناموجود",
      price: "728,000 ",
      toman: "تومان",
    },
    {
      id: 6,
      img: allPic3,
      name: "شومیز کادنزا باران A51294",
      size: "سایز : XL , 2XL , 3XL",
      description: "قد 72 , عرض 60 , دور بازو 46 سانتی متر",
      Inventory: "موجود در انبار",
      price: "785,000 ",
      toman: "تومان",
    },
    {
      id: 7,
      img: allPic4,
      name: "شلوارک مردانه الیاف G32625",
      size: "سایز : XL , 2XL , 3XL",
      description: "قد 72 , عرض 60 , دور بازو 46 سانتی متر",
      Inventory: "ناموجود",
      price: "605,000 ",
      toman: "تومان",
    },
    {
      id: 8,
      img: allPic5,
      name: "شومیز ساتن الیزه یارا A51419",
      size: "سایز : XL , 2XL , 3XL",
      description: "قد 72 , عرض 60 , دور بازو 46 سانتی متر",
      Inventory: "موجود در انبار",
      price: "755,000 ",
      toman: "تومان",
    },
    {
      id: 9,
      img: allPic6,
      name: "تیشرت لش باکسی T31498",
      size: "سایز : XL , 2XL , 3XL",
      description: "قد 72 , عرض 60 , دور بازو 46 سانتی متر",
      Inventory: "ناموجود",
      price: "528,000 ",
      toman: "تومان",
    },
  ]);

  const shomizes = [
    { id: 1, img: womenPic2, name: "شومیز آستین بلند یقه برگردان زنانه ", price: "۳,۲۸۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 2, img: womenPic3, name: "شومیز آستین بلند یقه برگردان", price: "۲,۴۹۸,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 3, img: womenPic4, name: "کراپ شومیز آستین بلند یقه برگردان", price: "۲,۹۸۰,۰۰۰", toman: "تومان", Inventory: "ناموجود" },
    { id: 4, img: womenPic5, name: "کراپ شومیز آستین بلند یقه برگردان", price: "۳,۲۵۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 5, img: womenPic6, name: "کراپ شومیز آستین بلند یقه برگردان", price: "۵,۲۰۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 6, img: womenPic7, name: "کراپ شومیز آستین بلند یقه برگردان", price: "۳,۵۰۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
  ];

  const pantsWomen = [
    { id: 1, img: womenPantsPic1, name: "شلوار جین اسکینی زنانه اسمارا مدل", price: "۴,۰۳۰,۹۵۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 2, img: womenPantsPic2, name: "شلوار جین اسکینی زنانه اسمارا مدل", price: "۱,۰۶۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 3, img: womenPantsPic3, name: "شلوار جین اسکینی زنانه اسمارا مدل", price: "۱,۹۹۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 4, img: womenPantsPic4, name: "شلوار جین اسکینی زنانه اسمارا مدل", price: "۱,۱۰۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 5, img: womenPantsPic5, name: "شلوار جین اسکینی زنانه اسمارا مدل", price: "۲,۰۵۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 6, img: womenPantsPic6, name: "شلوار جین اسکینی زنانه اسمارا مدل", price: "۳,۵۰۰,۰۰۰", toman: "تومان", Inventory: "ناموجود" },
  ];

  const shirts = [
    { id: 1, img: menPic1, name: "تی‌شرت آستین کوتاه یقه گرد مردانه", price: "۳,۵۰۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 2, img: menPic2, name: "تی‌شرت آستین کوتاه یقه گرد مردانه", price: "۳,۲۸۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 3, img: menPic3, name: "تی‌شرت آستین کوتاه یقه گرد مردانه", price: "۲,۴۹۸,۰۰۰", toman: "تومان", Inventory: "ناموجود" },
    { id: 4, img: menPic4, name: "تی‌شرت آستین کوتاه یقه گرد مردانه", price: "۲,۹۸۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 5, img: menPic5, name: "تی‌شرت آستین کوتاه یقه گرد مردانه", price: "۳,۲۵۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 6, img: menPic6, name: "تی‌شرت آستین کوتاه یقه گرد مردانه", price: "۵,۲۰۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
  ];

  const pantsMen = [
    { id: 1, img: menPantsPic1, name: "شلوار راسته مردانه ال سی وایکیکی ", price: "۴,۰۳۰,۹۵۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 2, img: menPantsPic2, name: "شلوار راسته مردانه ال سی وایکیکی ", price: "۱,۰۶۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 3, img: menPantsPic3, name: "شلوار راسته مردانه ال سی وایکیکی ", price: "۱,۹۹۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 4, img: menPantsPic4, name: "شلوار راسته مردانه ال سی وایکیکی ", price: "۱,۱۰۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 5, img: menPantsPic5, name: "شلوار راسته مردانه ال سی وایکیکی ", price: "۲,۰۵۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
    { id: 6, img: menPantsPic6, name: "شلوار راسته مردانه ال سی وایکیکی ", price: "۳,۵۰۰,۰۰۰", toman: "تومان", Inventory: "موجود در انبار" },
  ];

  return (
    <ProductContext.Provider
      value={{ products, shomizes, pantsWomen, shirts, pantsMen }}
    >
      {children}
    </ProductContext.Provider>
  );
}
