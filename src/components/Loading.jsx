import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import loadingGif from "../image/loading/Infinity@1x-1.2s-199px-199px.gif";

export default function Loading() {
  const { pathname } = useLocation();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    const timer = setTimeout(() => {
      setloading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div>
      <Menu />
      <div className="fixed inset-0 bg-white/80 flex items-center justify-center z-[9999]">
        <img
          src={loadingGif}
          alt="loading"
          className="md:w-32 md:h-32 w-24 h-24"
        />
      </div>
      <Footer />
    </div>
  );
}
