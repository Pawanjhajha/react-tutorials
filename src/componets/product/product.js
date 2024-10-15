let productCount=0;
function displayFormateProductCount(){
    return productCount>0?productCount:'zero';
}
function Product(){
return(
    <div>
        <button className="btn btn-primary">-</button>
        {/*<span>{productCount}</span>*/}
        {/* we the curly brekit to print and js expression value in jsx */}

        <span>{displayFormateProductCount()}</span>{/* we have to call the function*/}
        {/* we can write the jsx expression */}
        {/* <span>{10+5}</span> */}
        <button className="btn btn-primary">+</button>

    </div>
)
}

export default Product;