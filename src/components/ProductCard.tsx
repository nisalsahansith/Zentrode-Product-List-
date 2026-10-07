import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 w-full object-contain"
      />

      <h2 className="mt-4 font-semibold text-gray-800">
        {product.title}
      </h2>

      <p className="mt-2 text-lg font-bold text-gray-900">
        ${product.price}
      </p>
    </div>
  );
};

export default ProductCard;