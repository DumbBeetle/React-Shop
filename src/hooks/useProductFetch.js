import {useEffect, useState} from 'react';

function useFetchProducts() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState(null);
    const [sort, setSort] = useState("Featured");
    const [filter, setFilter] = useState("all products");

    useEffect(() => {
        setIsLoading(true);
        const fetchProducts = async () => {
            const url = "https://fakestoreapi.com/products";
            const data = (await fetch(url)).json();
            setProducts(await data);
        };
        fetchProducts().then(() => setIsLoading(false));
    }, [])

    return {isLoading, products, filter, setFilter}
}
function useFetchSingleProduct(id) {
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null)
    useEffect(() => {
        setIsLoading(true);
        const fetchProducts = async () => {
            const url = `https://fakestoreapi.com/products/${id}`;
            const data = (await fetch(url)).json();
            setProduct(await data);
            setError(false)
        };
        fetchProducts()
            .then(() => setIsLoading(false))
            .catch(error => {
                console.log(error.message)
                setError(true)
        });
    }, [])
    return {isLoading, product, error}

}

export {useFetchSingleProduct, useFetchProducts};