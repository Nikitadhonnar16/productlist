import React from "react";
import "../assets/css/ProductCard.css"; // Custom styles
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const formatPrice = (price) => {
  const priceStr = price.toString().replace(/[^0-9]/g, "");
  let lastThree = priceStr.substring(priceStr.length - 3);
  const otherNumbers = priceStr.substring(0, priceStr.length - 3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  const formattedPrice =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return formattedPrice;
};

const ProductCard = ({ image, title, about, price }) => {
  return (
    <div>
      <div
        className="card border-0 shadow-sm"
        style={{ maxWidth: "300px", height: "300px" }}
      >
        {/* Image Section */}
        <div className="bg-light rounded-top">
          <img
            src={image}
            alt={title}
            className="card-img-top p-4"
            style={{
              height: "300px", // Smaller image size
              objectFit: "contain",
              width: "100%", // Ensure it takes the full width
            }}
          />
        </div>

        {/* Content Section */}
      </div>

      <div className="card-body text-center">
        <h5 className="card-title fw-bold text-dark mb-1">{title}</h5>

        <p className="card-text text-muted small mb-1">{about} battery</p>
        <p className="fw-bold fs-5 mb-1">₹ {formatPrice(price)}</p>

        {/* Additional content can go here */}
      </div>
    </div>
  );
};

export default ProductCard;
