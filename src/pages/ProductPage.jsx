import ProductDisplay from "../components/ProductDisplay"
import { useParams } from "react-router-dom"

function ProductPage(){

    const {productName} = useParams();
    console.log(productName);
    

    return(
        <>
        <ProductDisplay/>
        </>
    )
}

export default ProductPage