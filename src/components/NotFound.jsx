import Footer from "./Footer";
import Menu from "./Menu";

export default function NotFound() {
  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center justify-center my-10">
        <img
          src="/src/image/errorr/error404.png"
          className="w-[400px] h-[400px] floating-image"
          alt="404"
        />
        <p className=" text-gray-700 font-bold">صفحه مورد نظر پیدا نشد!</p>
      </div>
      <Footer />

      <style>{`
        .floating-image {
          animation: float 2.5s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
      `}</style>
    </div>
  );
}
