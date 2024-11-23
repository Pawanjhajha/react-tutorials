function ProductForm(){
    function nameInputHandler(event){
        console.log("some text entered",event,event.target.value)
    }
    function priceInputHandler(event){
        console.log("some text entered",event,event.target.value)
    }
    function descriptionInputHandler(event){
        console.log("some text entered",event,event.target.value)
    }
    function isAvailableInputHandler(event){
        console.log("some text entered",event,event.target.value)
    }
    function imageInputHandler(event){
        console.log("some text entered",event,event.target.value)
    }
    return(
        <form className="row g-3">
            <div className="col-md-6">
                <label for='name'>ProductName</label>
                <input type="text" className="form-control" id="name" onChange={nameInputHandler} placeholder="Product name"/>
            </div>
            <div className="col-md-6">
                <label for='price'>Product Price</label>
                <input type="number" className="form-control" id="price"  onChange={priceInputHandler} placeholder="Product Price" min="0.01" step="0.01"/>
            </div>
            <div className="form-group">
                <label for='description'>Product Description</label>
                <input type="text" className="form-control" id="description" onChange={descriptionInputHandler} placeholder="Product description"/>
            </div>
            <div className="form-check form-switch">
                <input type="checkBox" className="form-check-input" id="isAvailable" onChange={isAvailableInputHandler} role="switch"/>
                <label for='isAvailable' className="form-check-label"> The Product in stock</label>
            </div>
            <div className="form-group">
                <label for="select-image">Select Product image</label>
                <input type='file' className="form-control" onChange={imageInputHandler} id='select-image'/>
            </div>
            <button type='submit'>ADD Product</button>
        </form>
    )
}
export default ProductForm;