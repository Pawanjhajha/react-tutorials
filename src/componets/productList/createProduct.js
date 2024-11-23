import ProductForm from "./productForm";

function CreateProduct(){
    return(
        <section id="createProduct">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ProductForm></ProductForm>
                    </div>
                    {/* <div className="col-md-6"></div> */}
                </div>
            </div>
        </section>
    )
}
export default CreateProduct;