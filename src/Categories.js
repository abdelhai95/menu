import React from "react";

const Categories = ({ filter, uniqueCategories }) => {
  return (
    <div className="btn-container">
      {uniqueCategories.map((category, index) => {
        return (
          <button
            className="filter-btn"
            key={index}
            onClick={() => filter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
