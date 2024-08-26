import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col transform transition-transform hover:scale-105">
      <Link
        to={{
          pathname: "/equipment-category",
        }}
        state={{ product }}
      >
        <div className="flex-grow">
          <img
            src={product.images[0]}
            alt={product.category}
            className="object-contain w-full h-48 md:h-64 lg:h-72"
          />
        </div>
        <div className="md:w-3/10 p-4 flex bg-gray-100 flex-col justify-between">
          <div className="text-lg font-semibold">{product.productName}</div>
          <div className="text-md text-gray-600 font-semibold">
            {product.category}
          </div>
          {/* <div className="text-gray-500">Code: {product.productCode}</div> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
