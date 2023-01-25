import useSWR from 'swr'
import {useState} from "react";

const fetcher = (url) => fetch(url).then(res => {
    console.log("Data Fetch")
   return  res.json()
})
function useFetchProducts(id = "") {

    const { data, error, isLoading} = useSWR(`https://fakestoreapi.com/products/${id}`,fetcher)
    const [sort, setSort] = useState("Featured");
    const [filter, setFilter] = useState("all products");
    return {data, error, isLoading, sort, setSort, filter, setFilter}
}
export default useFetchProducts;