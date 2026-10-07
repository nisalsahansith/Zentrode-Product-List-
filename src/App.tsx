import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import type { Product, ProductResponse } from "./types/product";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const limit = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      const skip = (page - 1) * limit;

      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: ProductResponse = await response.json();

        setProducts(data.products);
        setTotal(data.total);
      } catch (error) {
        setError("Something went wrong while loading products.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold">Products</h1>

        {loading && (
          <p className="text-center text-gray-600">
            Loading products...
          </p>
        )}

        {error && (
          <p className="text-center text-red-500">
            {error}
          </p>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;