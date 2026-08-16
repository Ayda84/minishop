import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AllProducts from "./components/AllProducts";
import Producrprovider from "./components/ProductContext";
import InformationProduct from "./components/InformationProduct";
import Login from "./components/Login";
import ArticleText from "./components/ArticleText";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import AuthProvider from "./components/AuthContext";
import Women from "./components/Women";
import Men from "./components/Men";
import CartProvider from "./components/CartContext";
import Cart from "./components/Cart";
import ScrollToTop from "./components/ScrollToTop";
import UserData from "./components/UserData";
import { useEffect, useState } from "react";
import { getCookie } from "./components/cookieUtils";
import NotFound from "./components/NotFound";
import SearchResults from "./components/SearchResults";
import Loading from "./components/Loading";

export default function App() {
  const [welcomeName, setWelcomeName] = useState("");

  useEffect(() => {
    const firstName = getCookie("firstName");
    if (firstName) {
      setWelcomeName(firstName);

      const timer = setTimeout(() => {
        setWelcomeName("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Producrprovider>
        <AuthProvider>
          <CartProvider>
            <Router>
              <ScrollToTop />
              <Loading />
              {welcomeName && (
                <div className="fixed top-12 left-1/2 -translate-x-1/2 bg-second/80 text-maintext px-20 py-3 rounded-xl shadow-lg z-[9999] text-sm font-bold">
                  خوش اومدی {welcomeName} عزیز 🍀
                </div>
              )}

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/AllProducts" element={<AllProducts />} />
                <Route
                  path="/Information/:id"
                  element={<InformationProduct />}
                />
                <Route path="/Login" element={<Login />} />
                <Route path="/Article/:id" element={<ArticleText />} />
                <Route path="/About" element={<AboutPage />} />
                <Route path="/Contact" element={<ContactPage />} />
                <Route path="/Women" element={<Women />} />
                <Route path="/Men" element={<Men />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/userdata" element={<UserData />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/search" element={<SearchResults />} />
              </Routes>
            </Router>
          </CartProvider>
        </AuthProvider>
      </Producrprovider>
    </div>
  );
}
