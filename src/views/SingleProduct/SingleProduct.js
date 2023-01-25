import React from 'react';
import Loading from "../../components/Loading/Loading";
import {useParams} from "react-router-dom";
import NotFound from "../NotFound";
import "./SingleProduct.css"
import useFetchProducts from "../../hooks/useProductFetch";

const SingleProduct = () => {
    const {id} = useParams();
    const {data, error, isLoading, sort, setSort, filter, setFilter} = useFetchProducts(id)
    if (error) {
        return <NotFound/>
    }
    if (isLoading){
      return  <Loading />
    }
    const {title, price, description, category, image, rating: {rate, count}} = data;
    return (
        <div className="product-page">
            <div className="product-image">
                <img src={image} alt={title}/>
            </div>
            <div className="product-table">
                <div>
                    <h2>Product Name:</h2>
                    <p>{title}</p>
                </div>
                <div>
                    <h2>Product Description:</h2>
                    <p>{description}</p>
                </div>
                <div>
                    <h2>Product Price:</h2>
                    <p>${price}</p>
                </div>
                <div>
                    <h2>Product Category:</h2>
                    <p>{category}</p>
                </div>
                <div>
                    <h2>Product Rating:</h2>
                    <p>Rate: {rate} Count: {count}</p>
                </div>
            </div>

        </div>
    );
};

export default SingleProduct;