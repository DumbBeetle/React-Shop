import React from 'react';
import Nav from "../components/Nav/Nav";
import Products from "../components/Products/Products";
import Loading from "../components/Loading/Loading";
import {useFetchProducts} from "../hooks/useProductFetch";


const Home = () => {
    const {isLoading, products, filter, setFilter, sort, setSort} = useFetchProducts();
    if (isLoading) {
        return <Loading/>
    }
    return (
        <div>
            <Nav setFilter={setFilter} passItems={products} setSort={setSort}/>
            <Products passFilter={filter} passItems={products} passSort={sort}/>
        </div>
    );
};

export default Home;