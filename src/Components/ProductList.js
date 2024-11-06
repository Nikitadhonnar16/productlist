import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductListing from "./ProductListing";
import FilterSection from "./FilterSection";
import Header from "./Header";
import abc from "../assets/imgs/abc.jpg";
import sofa from "../assets/imgs/sofa.avif";
import plant from "../assets/imgs/plant.webp";
import lighting from "../assets/imgs/lighting.avif";
import bath from "../assets/imgs/bath.avif";
import Lighting from "../assets/imgs/lighting.avif";
import toy from "../assets/imgs/toy.jpeg";

const staticProducts = [
  {
    title: "Lighting",
    about: "Illuminating your space with advanced technology.",
    price: 150000,
    image: Lighting,
    category: "Lighting",
    brand: "Brand A",
    availability: "In Stock",
  },
  {
    title: "Furniture",
    about: "Elegant and comfortable furniture for every home.",
    price: 50000,
    image: sofa,
    category: "Furniture",
    brand: "Brand B",
    availability: "Out of Stock",
  },
  {
    title: "Decoration",
    about: "Stylish decor to enhance the aesthetics of any room.",
    price: 15000,
    image: plant,
    category: "Decoration",
    brand: "Brand C",
    availability: "In Stock",
  },
  {
    title: "Bath & Shower",
    about: "Luxurious bath products for a relaxing experience.",
    price: 20000,
    image: bath,
    category: "Bath & Shower",
    brand: "Brand A",
    availability: "In Stock",
  },
  {
    title: "Toys",
    about: "Safe and fun toys for children of all ages.",
    price: 1000,
    image: toy,
    category: "Toys",
    brand: "Brand B",
    availability: "Out of Stock",
  },
];

const ProductList = () => {
  const [priceFilter, setPriceFilter] = useState([0, 200000]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [availabilityFilter, setAvailabilityFilter] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(staticProducts);

  const handleCategoryChange = (selectedCategories) =>
    setCategoryFilter(selectedCategories);
  const handleBrandChange = (selectedBrands) => setBrandFilter(selectedBrands);
  const handleAvailabilityChange = (selectedAvailability) =>
    setAvailabilityFilter(selectedAvailability);
  const handlePriceChange = (values) => setPriceFilter(values);

  const handleClearAll = () => {
    setCategoryFilter([]);
    setBrandFilter([]);
    setAvailabilityFilter([]);
    setPriceFilter([0, 200000]); // Reset price filter
  };

  useEffect(() => {
    const filtered = staticProducts.filter((product) => {
      const priceMatch =
        product.price >= priceFilter[0] && product.price <= priceFilter[1];
      const categoryMatch =
        categoryFilter.length === 0 ||
        categoryFilter.includes(product.category);
      const brandMatch =
        brandFilter.length === 0 || brandFilter.includes(product.brand);
      const availabilityMatch =
        availabilityFilter.length === 0 ||
        availabilityFilter.includes(product.availability);

      return priceMatch && categoryMatch && brandMatch && availabilityMatch;
    });
    setFilteredProducts(filtered);
  }, [priceFilter, categoryFilter, brandFilter, availabilityFilter]);

  return (
    <main style={{ overflow: "hidden" }} className="main-content">
      <Header />
      <div className="container">
        <div className="row align-items-center filter-options-container">
          <div className="col-lg-3 col-md-6 col-sm-12 text-center text-md-start">
            <button
              className="btn border-0 fw-semibold text-decoration-underline"
              style={{
                color: "#894DF8",
                backgroundColor: "transparent",
                marginLeft: "auto",
                marginRight: "20px",
                display: "block",
                whiteSpace: "nowrap",
              }}
              onClick={handleClearAll}
            >
              Clear all
            </button>
          </div>
          <div className="col-lg-9 col-md-6 col-sm-12 text-end mt-3 mt-md-0">
            <p className="text-muted show-result-text mb-0">
              Showing {filteredProducts.length} of {staticProducts.length}{" "}
              products
            </p>
          </div>
        </div>

        <div className="row gx-3">
          <aside className="col-lg-3 col-md-4 mb-4 mb-lg-0">
            <FilterSection
              title="Categories"
              options={[
                "Furniture",
                "Lighting",
                "Decoration",
                "Bath & Shower",
                "Toys",
              ]}
              selectedOptions={categoryFilter}
              onChange={handleCategoryChange}
            />
            <FilterSection
              title="Price"
              priceFilter={priceFilter}
              onPriceChange={handlePriceChange}
            />
            <FilterSection
              title="Brands Type"
              options={["Brand A", "Brand B", "Brand C"]}
              selectedOptions={brandFilter}
              onChange={handleBrandChange}
            />
            <FilterSection
              title="Availability"
              options={["In Stock", "Out of Stock"]}
              selectedOptions={availabilityFilter}
              onChange={handleAvailabilityChange}
            />
          </aside>

          <section className="col-lg-8 col-md-7 ms-md-5 mt-3">
            <ProductListing staticProducts={filteredProducts} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProductList;
