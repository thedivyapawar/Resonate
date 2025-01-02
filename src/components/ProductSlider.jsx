// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import '../assets/CSS/ProductSlider.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function ProductSlider({title,data}){
    const[isMobile, setIsMobile] = useState(window.innerWidth<700);

    const[isMobile2, setIsMobile2] = useState(window.innerWidth<500);

    const handleResize = () => {
       setIsMobile(window.innerWidth < 700);
       setIsMobile2(window.innerWidth < 500);
   };

   useEffect(() => {
       // Add event listener when the component mounts
       window.addEventListener('resize', handleResize);

       // Initial check
       handleResize();

       // Cleanup event listener when the component unmounts
       return () => {
       window.removeEventListener('resize', handleResize);
       };
   }, []);

   const navigate=useNavigate();
   function redirect(){
    
      if(title=="Best Seller"){
        navigate("/products/allwatches")
      } 
      else if(title=="Hot Deals"){
        navigate("/products/allearbuds")
      }  
      else{
        navigate("/products/alllaptops")
      } 
    }       

    console.log(data);
    const arr=[1,2,3,4,5]
    
    return(
        <>
        <div className="top-watch my-3">
            <h1>{title}</h1>
        </div>

        <Swiper
        // install Swiper modules
        modules={[ Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={isMobile && isMobile2 ? 1 : isMobile?  2 : 4}
        pagination={{ clickable: true }}
        className='px-5 placeholder-glow mb-3' 
        >

        {
            data?.length == 0 ? arr.map((item,index)=>{
                return(
                    <SwiperSlide key={index} style={{height:'300px'}} className='placeholder rounded-2'>

                    </SwiperSlide>
                )
            }) : data?.map((item,index)=>{
                return(
                    <SwiperSlide className='col-md-3 border rounded-2 p-2' key={index} >
                        <img src={item.productImage} className='img-fluid'/>
                        <div className='d-flex justify-content-between mt-2'>
                            <p className='fw-bold fs-5'>{item.productName}</p>
                            <p>{item.rating}
                            <i className="bi bi-star-half text-warning ms-2"></i>
                            </p>
                        </div>

                        <p className='text-secondary'>{item.description}</p>
                    </SwiperSlide>


                )
            })
        }

        
        </Swiper>

        <div className='d-flex justify-content-center my-3'>
            <button className='seemore' onClick={redirect}>See More</button>
        </div>
        </>
    )
}

export default ProductSlider
