import { Link } from "react-router-dom";
import maghalePic1 from "../image/maghale/pic1.webp";
import maghalePic2 from "../image/maghale/pic2.webp";
import maghalePic3 from "../image/maghale/pic3.webp";
import maghalePic4 from "../image/maghale/pic4.webp";

export default function Article() {
  const articlesData = [
    {
      id: 1,
      img: maghalePic1,
    },
    {
      id: 2,
      img: maghalePic2,
    },
    {
      id: 3,
      img: maghalePic3,
    },
    {
      id: 4,
      img: maghalePic4,
    },
  ];

  return (
    <div>
      <div className="w-full py-4 mt-5 ">
        <div className="flex justify-between max-w-7xl mx-auto px-4 ">
          <p className="text-xl leading-none font-bold text-maintext">
            مقالات جدید
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="w-[80%] grid md:grid-cols-2 justify-items-center p-10 gap-10 ">
            {articlesData.map((article) => (
              <Link key={article.id} to={`/Article/${article.id}`}>
                <img
                  src={article.img}
                  className="h-[300px] w-full cursor-pointer border-2 border-maintext rounded-2xl"
                  alt="article"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
