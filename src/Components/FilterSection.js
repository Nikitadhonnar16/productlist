import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FilterSection = ({
  title,
  options = [],
  onChange,
  selectedOptions = [],
  priceFilter = [0, 200000], // Updated max price to 200000
  onPriceChange,
}) => {
  const handleCheckboxChange = (option) => {
    onChange(
      selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option]
    );
  };

  const handlePriceChange = (values) => {
    if (Array.isArray(values) && onPriceChange) {
      onPriceChange(values);
    }
  };

  // Format value in lakh format (e.g., 200000 -> 2 L)
  const formatValueInLakh = (value) => {
    return value >= 100000
      ? `${(value / 100000).toFixed(1)} L`
      : value.toLocaleString();
  };

  return (
    <section
      className="bg-light p-4  pb-5 mt-3  filterSection"
      style={{
        borderRadius: "2rem",
        marginBottom: "1.5rem",
        width: "90%",
      }}
    >
      <h3 className="fw-semibold fs-5 mb-3 ps-1">{title}</h3>
      {title === "Price" ? (
        <div className="ps-3 position-relative">
          <Slider
            range
            value={priceFilter}
            min={0}
            max={200000} // Set max to 200000 (2 L)
            step={1000}
            onChange={handlePriceChange}
            trackStyle={[{ backgroundColor: "#00E091" }]}
            handleStyle={[
              { borderColor: "#894DF8", backgroundColor: "#ffffff" },
              { borderColor: "#894DF8", backgroundColor: "#ffffff" },
            ]}
            railStyle={{ backgroundColor: "#e9ecef" }}
          />
          {/* Display min and max values below the thumbs */}
          <div
            className="d-flex justify-content-between mt-2 "
            style={{ position: "relative", whiteSpace: "nowrap" }}
          >
            <span
              style={{
                position: "absolute",
                left: `${(priceFilter[0] / 200000) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              {formatValueInLakh(priceFilter[0])}
            </span>
            <span
              style={{
                position: "absolute",
                left: `${(priceFilter[1] / 200000) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              {formatValueInLakh(priceFilter[1])}
            </span>
          </div>
        </div>
      ) : (
        options.map((option, index) => (
          <div key={index} className="mb-2">
            <input
              type="checkbox"
              id={`${title}-${index}`}
              className="form-check-input"
              onChange={() => handleCheckboxChange(option)}
              checked={selectedOptions.includes(option)}
            />
            <label
              htmlFor={`${title}-${index}`}
              className="form-check-label ms-3"
            >
              {option}
            </label>
          </div>
        ))
      )}
    </section>
  );
};

export default FilterSection;
