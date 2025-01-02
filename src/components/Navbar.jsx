import { Link } from "react-router-dom"
import logo from "../assets/Images/logo.jpg"
import { useSelector } from "react-redux"

function Navbar(){
    const allProduct = useSelector((state)=>state.cart.allProducts)

    return(
        <>
        <nav className="navbar navbar-expand-md ">
        <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/"><img src={logo}alt="logo" className="img-fluid" width="170px"/></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                </li>
                
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Products
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/products/allwatches" >Watches</Link></li>

                    <li><Link className="dropdown-item"  to="/products/alllaptops">Laptops</Link></li>
                    
                    <li><Link className="dropdown-item"  to="/products/allearbuds">Earbuds</Link></li>

                    
                </ul>
                </li>

                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/cart">Cart
                <i className="bi bi-cart3 ms-1"></i><sup>{allProduct.length}</sup>
                </Link>
                </li>
               
            </ul>
            
            </div>
        </div>
        </nav>
        </>
    )
}

export default Navbar