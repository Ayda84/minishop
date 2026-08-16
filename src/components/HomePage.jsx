import Article from "./Article";
import Footer from "./Footer";
import Menu from "./Menu";
import MySlider from "./Myslide";
import NewProducts from "./NewProducts";

export default function HomePage(){

    return(
        <div>
            <Menu/>
            <MySlider/>
            <NewProducts/>
            <Article/>
            <Footer/>
        </div>
    )
}