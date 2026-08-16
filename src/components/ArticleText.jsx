import { useParams } from "react-router-dom";
import { articlesData } from "./articlesContent";
import Menu from "./Menu";
import Footer from "./Footer";

export default function ArticleText() {
  const { id } = useParams();

  const currentArticle = articlesData.find(
    (article) => article.id === Number(id)
  );

  if (!currentArticle) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-bold text-red-500">
          مقاله مورد نظر یافت نشد!
        </h2>
      </div>
    );
  }

  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center justify-center md:ml-4">
        <h2 className="mt-6 font-bold md:text-[18px] text-[12px] ">{currentArticle.title}</h2>
        <img src={currentArticle.img} className="mt-7 shadow-2xl shadow-second w-[300px] md:w-[600px]" />
        <p className="md:px-[80px] md:text-[17px] px-[10px] text-[14px] leading-10 mt-7 mb-7">{currentArticle.description}</p>
      </div>

      <Footer />
    </div>
  );
}
