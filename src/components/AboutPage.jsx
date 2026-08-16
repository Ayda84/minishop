import Menu from "./Menu";
import { TbHeartQuestion } from "react-icons/tb";
import Footer from "./Footer";
import officeImg from "../image/About/office.jpg";
import clothesImg from "../image/About/clothes.png";

export default function AboutPage() {
  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center justify-center mb-7">
        <img
          src={officeImg}
          alt="ofiice"
          className="md:h-[700px] w-full mt-3"
        />
        <h2 className="flex flex-row gap-1 md:mt-7 font-bold mb-2 md:text-[20px] mt-4">
          از بست شاپ چه میدانید؟
          <TbHeartQuestion className="text-maintext w-[28px]" />
        </h2>
        <div className="flex md:flex-row flex-col items-center justify-center gap-12 mt-5">
          <div className="flex flex-col md:w-[40%] w-[80%] gap-4">
            <p>
              سال ۱۳۹۳، پوشاک بست شاپ با این باور متولد شد که پوشاک، فقط لباس
              نیست؛ روایتی‌ست از فرهنگ، سلیقه و سبک زندگی.
            </p>
            <p>
              امروز، پس از ۱۱ سال تلاش بی‌وقفه، پوشاک بست شاپ به یکی از
              معتبرترین برندهای تولید پوشاک در ایران تبدیل شده است؛ برندی که هر
              نخ آن، حاصل تجربه، دانش، نوآوری و عشق است. در این مسیر، ما یاد
              گرفتیم که کیفیت، اتفاقی نیست. زیبایی، تصادفی خلق نمی‌شود. هر طرح،
              با نگاه دقیق طراحان آغاز می‌شود، با انتخاب بهترین متریال ادامه
              پیدا می‌کند، و در نهایت، در دستان مصرف‌کننده معنا می‌گیرد. در این
              سال‌ها، با شناخت عمیق از نیازهای روز جامعه، و همراهی تیمی از
              طراحان و متخصصان، توانسته‌ایم مجموعه‌هایی متنوع، برای سلیقه‌ها،
              فصل‌ها و سبک‌های گوناگون خلق کنیم؛ از پوشاک روزمره تا استایل‌های
              خاص و رسمی.
            </p>
          </div>
          <img src={clothesImg} alt="clothes" className="md:w-[700px] md:h-[700px] w-[300px] h-[300px] rounded-[15px]" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
