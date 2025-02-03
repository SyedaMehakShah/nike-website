"use client";
import { useState } from "react";

interface FilterProps {
  categories: string[];
  onFilterChange: (selectedCategory: string) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <aside className="lg:col-span-1">
      <h2 className="font-semibold text-xl mb-4">Categories</h2>
      <ul className="space-y-2">
        <li
          key="All"
          className={`cursor-pointer ${selectedCategory === "All" ? "font-bold" : ""}`}
          onClick={() => handleCategoryChange("All")}
        >
          All
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer ${selectedCategory === category ? "font-bold" : ""}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FilterComponent;