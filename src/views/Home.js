import React, {useState} from 'react';
import Nav from "../components/Nav/Nav";
import Products from "../components/Products/Products";
import Loading from "../components/Loading/Loading";
import useFetchProducts from "../hooks/useProductFetch";

const Home = () => {

    const {data, error, isLoading, sort, setSort, filter, setFilter} = useFetchProducts();

    return (
        <div>
            {data ?
                (<>
                    <Nav setFilter={setFilter} passItems={data} setSort={setSort}/>
                    <Products passFilter={filter} passItems={data} passSort={sort}/>
                </>) :
                <Loading/>
            }
        </div>
    );
};

export default Home;