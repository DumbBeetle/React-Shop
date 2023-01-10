import React from "react";

const SortBy = () => {

  const optionsNames = [
    "Featured",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, new to old",
    "Date, old to new",
  ];
  const options = optionsNames.map((op, index) => (
    <option value="/" key={index}>
      {op}
    </option>
  ));
  return (
    <div className="collection-sort">
      <label htmlFor="">Sort by:</label>
      <select>{options}</select>
    </div>
  );
};

export default SortBy;
