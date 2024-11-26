import ProductForm from "./productForm";

function CreateProduct(props){
    
    function onCreateProduct(product){
        console.log(product,"create product")
        props.createProduct(product)
    }
    return(
        <section id="createProduct">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ProductForm createProduct={onCreateProduct}></ProductForm>
                    </div>
                    {/* <div className="col-md-6"></div> */}
                </div>
            </div>
        </section>
    )
}
export default CreateProduct;