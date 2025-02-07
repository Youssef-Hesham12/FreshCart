import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import RecentProducts from "../RecentProduct/RecentProducts";
import CategorySlider from "./CategorySlider";
import MainSlider from "./MainSlider";
const Home = () => {
  let { getCarts } = useContext(CartContext);
    useEffect(() => {
      getCarts();
    }, []);
  return (
    <section>
      <div className="container"> 
        <div className="row">
          <MainSlider />
          <CategorySlider />
          <RecentProducts />
        </div>
      </div>
    </section>
  );
};

export default Home;
