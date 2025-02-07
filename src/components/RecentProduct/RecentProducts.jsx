import axios from "axios";
import { useEffect, useState } from "react";
import "./recentProducts.css";
import Loading from "../Loading/Loading";
import ProductCard from "./ProductCard";

const RecentProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );
      setProducts(data?.data);
      setError("");
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to fetch products.");
      console.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="recentProducts w-full">
      <h2 className="bg-main text-white w-full text-center mb-5 rounded-sm py-2">
        Recent Products
      </h2>
      <div className="row">
        {loading && <Loading />}
        {!loading && error && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 w-full text-center tracking-[1.5px]"
            role="alert"
          >
            {error}
          </div>
        )}
        {!loading &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default RecentProducts;
