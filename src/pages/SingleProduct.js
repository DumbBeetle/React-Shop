import React from 'react';
import {useFetchSingleProduct} from "../components/Products/useProductFetch";
import Loading from "../components/Loading/Loading";
import {useParams} from "react-router-dom";

const SingleProduct = () => {
    const {id} = useParams();
    const {isLoading, product} = useFetchSingleProduct(id)

    if (isLoading) {
        return <Loading/>
    }
    const {title, price, description, category, image, rating: {rate, count},} = product;
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={image} alt={title}/>
            </div>
            <div className="product-info">
                <h5>{title}</h5>
                <h6>${price}</h6>
            </div>
        </div>
    );
};

export default SingleProduct;