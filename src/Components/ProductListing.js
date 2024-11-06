import React from "react";
import ProductCard from "../Components/ProductCard";
// import "../assets/css/ProductListing.module.css";
// import placeholderImage from "../assets/images/placeholder.jpg";

const ProductListing = ({ staticProducts }) => {
  return (
    <section className="container-fluid">
      <div className="row">
        {staticProducts.map((product, index) => (
          <div key={index} className="col-md-4 mb-4">
            <ProductCard
              image={product.image}
              title={product.title}
              about={product.about}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductListing;
