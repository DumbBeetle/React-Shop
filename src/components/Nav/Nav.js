import React from "react";
import FilterBy from "./FilterBy";
import SortBy from "./SortBy";
import "./Nav.css";
import ShoppingCart from "../Cart/ShoppingCart";

const Nav = (props) => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <FilterBy setFilter={props.setFilter} passItems={props.passItems} />
        <SortBy />
        <ShoppingCart />
      </div>
    </nav>
  );
};

export default Nav;
