import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearCart } from "../redux/slices/CartSlice";


function CartProducts(){
    const products = useSelector((state)=>state.cart.allProducts)
    const totalPrice = useSelector((state)=>state.cart.totalPrice)
    const dispatch = useDispatch();

    const navigate = useNavigate();
    function redirect(){
        navigate("/")
    }

    function placeOrder(){
        toast.success("Order Placed Sucessfully !", {
            position: "top-center",
            autoClose:3000,
          });

        setTimeout(()=>{
            dispatch(clearCart());
            navigate("/")
        }, 4000)
    }

    return(
        <>
        <div className="container-fluid">
            <div className="row justify-content-center mb-5 mx-2">
                {
                    products.length ==0? <div className="col-md-4 border pt-4 rounded-4 my-4">
                        <p className="text-center">
                            Oops....Your cart seems empty !!!
                        </p>
                        <hr />
                        <div className="row justify-content-center my-2">
                    <div className="col-10">
                        <p className="bg-dark text-white text-center rounded-2 py-2 " style={{cursor:'pointer'}} onClick={redirect}>Let's do shopping</p>
                    </div>
                   </div>
                    </div> :
                    <div className="col-md-6 col-lg-4 border rounded-5">
                    <p className="fw-bold text-center my-3 ">Order Summary</p>
                    <hr />
                   {
                     products.map((item,index)=>{
                        return(
                            <div className="row justify-content-evenly my-3 align-items-center" key={index}>
                                <div className="col-3">
                                    <img src={item.images[0]} className="img-fluid" />
                                </div>

                                <div className="col-4">
                                    <p className="fw-semibold">{item.productName}</p>
                                </div>

                                <div className="col-3">
                                    <p className="fw-bold">₹ {item.salePrice}</p>
                                </div>
                            </div>
                        )
                     })
                   }
                   <hr />
                   <div className="row justify-content-between px-4">
                    <div className="col-5 col-md-4">
                        <p className="">Subtotal</p>
                    </div>
                    <div className="col-4 col-md-3">
                        <p className="fs-6 fw-bold">₹ {totalPrice}</p>
                    </div>
                   </div>

                   <div className="row justify-content-between px-4">
                    <div className="col-5 col-md-4">
                        <p className="">Shipping</p>
                    </div>
                    <div className="col-4 col-md-3">
                        <p className="fs-6 fw-bold">₹ {totalPrice < 1000 ? 100 : 0.00}</p>
                    </div>
                   </div>

                   <div className="row justify-content-between px-4">
                    <div className="col-5 col-md-4">
                        <p className="">Total</p>
                    </div>
                    <div className="col-4 col-md-3">
                        <p className="fs-6 fw-bold">₹ {totalPrice < 1000? totalPrice + 100 : totalPrice}</p>
                    </div>
                   </div>

                   <div className="row justify-content-center my-2">
                    <div className="col-10">
                        <p className="bg-dark text-white text-center rounded-2 py-2 " style={{cursor:'pointer'}} onClick={placeOrder}>Confirm Order</p>
                    </div>
                   </div>
                </div>
                }

                
            </div>
        </div>
        <ToastContainer/>
        </>
    )
}

export default CartProducts;