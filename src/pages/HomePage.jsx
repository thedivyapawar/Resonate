import { useEffect, useState } from "react";
import Hero from "../components/Hero"
import ProductSlider from "../components/ProductSlider"
import ShopByCategory from "../components/ShopByCategory"
import useFetchData from "../hooks/useFetchData";


function HomePage(){
    const[bestSellerData, setBestSellerData] = useState([]);
    const[hotDealData, setHotDealData] = useState([]);
    const[justTrendingData, setJustTrendingData] = useState([]);

    useEffect(()=>{
        fetchBestSellerData();
        fetchHotDealData();
        fetchJustTrendingData();
    },[])

    async function fetchBestSellerData(){
        // const response = await fetch('https://resonate-api-backend.onrender.com/products/best-seller')
        // const result = await response.json();
        const result = await useFetchData('https://resonate-api-backend.onrender.com/products/best-seller')
        setBestSellerData(result.data);
    }

    async function fetchHotDealData(){
        // const response = await fetch(' https://resonate-api-backend.onrender.com/products/hot-deals')
        // const result = await response.json();
        const result = await useFetchData('https://resonate-api-backend.onrender.com/products/hot-deals')
        setHotDealData(result.data);
    }

    async function fetchJustTrendingData(){
        // const response = await fetch('https://resonate-api-backend.onrender.com/products/just-trending')
        // const result = await response.json();
        const result = await useFetchData('https://resonate-api-backend.onrender.com/products/just-trending')
        setJustTrendingData(result.data);
    }

    return(
        <>
        <Hero/>
        <ShopByCategory/>
        <ProductSlider title="Best Seller" data={bestSellerData}/>
        <ProductSlider title="Hot Deals" data={hotDealData}/>
        <ProductSlider title="Just Trending" data={justTrendingData}/>
        </>
    )
}

export default HomePage