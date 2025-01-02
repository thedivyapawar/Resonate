import { useParams } from "react-router-dom";
import WatchCoverImage from '../assets/Images/WatchCoverImage.webp'
import EarbudsCoverImage from '../assets/Images/EarbudsCoverImage.webp'
import LaptopCoverImage from '../assets/Images/LaptopCoverImage.webp'
import { useEffect } from "react";
import { useState } from "react";
import '../assets/CSS/ViewProduct.css'
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/CartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetchData from "../hooks/useFetchData";

function ProductDisplay(){
    const dispatch = useDispatch();
    const [data,setData] = useState([]);
    const {productName} = useParams();
    console.log(productName);

    useEffect(()=>{
        fetchData();
    },[productName])

    async function fetchData(){
        if(productName=="alllaptops"){
            // const response = await fetch('https://resonate-api-backend.onrender.com/products/alllaptops')
            // const result= await response.json();
            const result = await useFetchData("https://resonate-api-backend.onrender.com/products/alllaptops")
            setData(result.data);
            console.log(result.data);
            
        }
        else if(productName=="allwatches"){
            // const response = await fetch('https://resonate-api-backend.onrender.com/products/allwatches')
            // const result= await response.json();
            const result = await useFetchData('https://resonate-api-backend.onrender.com/products/allwatches')
            setData(result.data);
        }
        else{
            // const response = await fetch('https://resonate-api-backend.onrender.com/products/allearbuds')
            // const result= await response.json();
            const result = await useFetchData("https://resonate-api-backend.onrender.com/products/allearbuds")
            setData(result.data);
        }
    }

    function addProductToCart(item){
        dispatch(addProduct(item))
        toast.success(`${item.productName} added to cart`, {
            position: "top-center",
            autoClose:3000,
          });
    }

    return(

        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 my-4">
                    <img src={productName == "allwatches" ? WatchCoverImage : productName =="allearbuds" ? EarbudsCoverImage : LaptopCoverImage} className="img-fluid"/>
                </div>
            </div>


            <div className="row mb-5 mt-2">
                {
                    data.map((item,index)=>{
                        return(
                            <div className="col-md-4 col-lg-3 my-3 px-3" key={index}>
                                <div className="border px-4 py-2  rounded-2      ">
                                <img src={item.images[0]} className="img-fluid" />
                                <div className="d-flex justify-content-between mt-4">
                                <p className="fw-bold">{item.productName}</p>
                                <p>{item.rating}
                                <i className="bi bi-star-half text-warning ms-2"></i>
                                </p>
                                </div>
                               
                               <div className="d-flex justify-content-between flex-wrap">
                               <p>
                                <span className="fw-bold">
                                    <i className="bi bi-currency-rupee"></i>
                                {item.salePrice}
                                </span> 
                                <del style={{textDecoration:"line-through"}} className="ms-2">₹{item.mrp} </del>
                                </p>
                                <button
                                className="cssbuttons-io-button"
                            onClick={()=>addProductToCart(item)}>
                                Add
                                <div className="icon">
                                <svg
                                    height="24"
                                    width="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                    ></path>
                                </svg>
                                </div>
                                </button>
                               </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <ToastContainer />
        </>
    )
}

export default ProductDisplay