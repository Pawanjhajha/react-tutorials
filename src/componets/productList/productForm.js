function ProductForm(){
    return(
        <form className="row g-3">
            <div className="col-md-6">
                <label for='name'>ProductName</label>
                <input type="text" className="form-control" id="name" placeholder="Product name"/>
            </div>
            <div className="col-md-6">
                <label for='price'>Product Price</label>
                <input type="number" className="form-control" id="price" placeholder="Product Price" min="0.01" step="0.01"/>
            </div>
            <div className="form-group">
                <label for='description'>Product Description</label>
                <input type="text" className="form-control" id="description" placeholder="Product description"/>
            </div>
            <div className="form-check form-switch">
                <input type="checkBox" className="form-check-input" id="isAvailable" role="switch"/>
                <label for='isAvailable' className="form-check-label"> The Product in stock</label>
            </div>
            <div className="form-group">
                <label for="select-image">Select Product image</label>
                <input type='file' className="form-control" id='select-image'/>
            </div>
            <button type='submit'>ADD Product</button>
        </form>
    )
}
export default ProductForm;