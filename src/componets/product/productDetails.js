import { useState } from "react";
import Button from "./button";


function ProductDetails(){
    // let productCount=0;
    let [productCount,updateProductCount]=useState(0);
    console.log(productCount,"intial product count")
    function displayformatedProductCount(){
        console.log(productCount,"productcount")
        return productCount>0?productCount:'Zero';
    }
    function increment(){
        updateProductCount(++productCount);
        console.log(productCount)
    }
    function deCreament(){
        // SetProductCount(productCount--);
        updateProductCount(--productCount);
        console.log(productCount)
    }
    return(
       <>
       {/* <button className="btn btn-primary">+</button>
       <span>{displayformatedProductCount()}</span>
       <button className="btn btn-primary">-</button> */}
       <Button eventHandler={increment}>+</Button>
         <span>{displayformatedProductCount()}</span>
       <Button eventHandler={deCreament}>-</Button>
       </>
    )
}
export default ProductDetails;