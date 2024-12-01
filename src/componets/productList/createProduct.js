import { useState } from "react";
import ProductForm from "./productForm";

function CreateProduct(props){
    let[showForm,UpdateShowForm]=useState(false);
    function onCreateProduct(product){
        console.log(product,"create product")
        props.createProduct(product)
    }
    function onCreateNewProduct(){
        UpdateShowForm(true);
    }
    return(
        <section id="createProduct">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    {/* <button onClick={onCreateNewProduct}>Create Product</button> */}
                        {/* <ProductForm createProduct={onCreateProduct}></ProductForm> */}
                        {showForm?<ProductForm createProduct={onCreateProduct}></ProductForm>: <button onClick={onCreateNewProduct}>Create Product</button>}
                    </div>
                    {/* <div className="col-md-6"></div> */}
                </div>
            </div>
        </section>
    )
}
export default CreateProduct;