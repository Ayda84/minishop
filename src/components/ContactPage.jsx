import Menu from "./Menu";
import Footer from "./Footer";
import { MdConnectWithoutContact } from "react-icons/md";

export default function ContactPage(){



    return(
        <div>
            <Menu/>
           <div className="flex md:flex-row flex-col items-center justify-center md:gap-[250px] md:mt-10 mb-10">
             <div className="flex flex-col items-start justify-start md:mr-[100px] px-4 md:px-0 mt-7 gap-4">
                <h2 className="font-bold text-second md:text-[24px] text-[20px]">تماس با ما</h2>
                <p>آدرس: شهر قدس، بلوار گلبرگ، کوی صنعت گران</p>
                <p>جهت دریافت پشتیبانی و راهنمایی، لطفاً از طریق واتساپ به ما پیام ارسال نمایید.</p>
                <p>پشتیبانی سفارشات آنلاین : 09334455887 </p>
                <p>واحد استخدام (منابع انسانی) : 09384455883</p>
                <p>ساعت پاسخگویی: شنبه تا چهارشنبه ۹ صبح تا ۵ بعد از ظهر – پنجشنبه ۹ صبح تا 1 ظهر</p>
            </div>
            <div className="mt-4 md:mt-0">
                <MdConnectWithoutContact className="md:w-[120px] md:h-[120px] w-[80px] h-[80px] text-four"/>
            </div>
           </div>
            <Footer/>
        </div>
    )
}