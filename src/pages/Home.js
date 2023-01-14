import React, {useEffect, useState} from 'react';
import Nav from "../components/Nav/Nav";
import Products from "../components/Products/Products";
import Loading from "../components/Loading/Loading";
import {CartProvider, useCart} from "../contex/CartContext";

const Home = () => {
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
                <Loading/>
            </div>
        );
    }
    return (
        <div>
            <CartProvider>
                <Nav setFilter={setFilter} passItems={items}/>
                <Products passFilter={filter} passItems={items}/>
            </CartProvider>
        </div>
    );
};

export default Home;