import Button from "./button";

function ProductDetails(){
    let productCount=0;
    console.log(productCount,"product")
    function displayformatedProductCount(){
        console.log(productCount,"productcount")
        return productCount>0?productCount:'Zero';
    }
    function increment(){
        productCount++;
        console.log(productCount)
    }
    function deCreament(){
        productCount--;
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