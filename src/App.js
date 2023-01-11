import "./App.css";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import { CartProvider } from "./contex/CartContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState("");
  const [sort, setSort] = useState("Featured");
  const [filter, setFilter] = useState("all products");

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://fakestoreapi.com/products";
      const data = (await fetch(url)).json();
      setItems(await data);
      console.log("Getting Data");
    };
    fetchProducts().then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  }

  return (
    <div className="App">
      <CartProvider>
        <Nav setFilter={setFilter} passItems={items} />
        <Products passFilter={filter} passItems={items} />
      </CartProvider>
    </div>
  );
}

export default App;
