import Button from "./button";

function ProductDetails(){
    let productCount=0;
    function displayformatedProductCount(){
        return productCount>0?productCount:'Zero';
    }
    return(
       <>
       {/* <button className="btn btn-primary">+</button>
       <span>{displayformatedProductCount()}</span>
       <button className="btn btn-primary">-</button> */}
       <Button >+</Button>
       <Button>-</Button>
       </>
    )
}
export default ProductDetails;