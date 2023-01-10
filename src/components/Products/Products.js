import Item from "./item";
import "./Products.css";

const Products = (props) => {
  // todo: "Featured" = id, "Best Selling" = rate, "Alphabetically, A-Z" = title, "Alphabetically, Z-A" = title (reversed), "Price, low to high" = price, "Price, high to low" = price (reversed), "Date, new to old" = none, "Date, old to new" = none

  //   get Filter State
  const categoryFilter = props.passFilter;
  //   Display Product
  const products = props.passItems
    .map((product) => {
      // console.log(d.price)
      return <Item key={product.id} item={product} />;
    })
    .filter((value) => {
      // Filter Products based on chosen Category
      return categoryFilter === "all products"
        ? true
        : value.props.item.category === categoryFilter;
    });
  return <section className="products">{products}</section>;
};

export default Products;
