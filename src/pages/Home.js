import React, {useEffect, useState} from 'react';
import Nav from "../components/Nav/Nav";
import Products from "../components/Products/Products";
import Loading from "../components/Loading/Loading";
import {CartProvider} from "../contex/CartContext";
import {useFetchProducts} from "../components/Products/useProductFetch";
import {Route} from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Home = () => {
    const {isLoading, products, filter, setFilter} = useFetchProducts();
    if (isLoading) {
        return <Loading/>
    }
    return (
        <div>
            <CartProvider>
                <Nav setFilter={setFilter} passItems={products}/>
                <Products passFilter={filter} passItems={products}/>
            </CartProvider>
        </div>
    );
};

export default Home;