import { useState } from "react"

function ProductForm(){
    let [pName,updatePname]=useState('');
    let[price,updatePrice]=useState(0);
    let[desc,updateDesc]=useState('');
    let[isAvailable,updateIsAvailable]=useState(false);
    let[img,updateImg]=useState('');//this state will be store somewhere in the memory and all state is totaly defeerent to each other
    function nameInputHandler(event){
        updatePname(event.target.value);
    }
    function priceInputHandler(event){
        updatePrice(event.target.value);
    }
    function descriptionInputHandler(event){
        updateDesc(event.target.value);
    }
    function isAvailableInputHandler(event){
        console.log(event.target.value,"isAvailable")
        updateIsAvailable(event.target.value);
    }
    function imageInputHandler(event){
        updateImg(event.target.value);
    }
    function createProductHandler(event){
        event.preventDefault();
        let Product={
            pName:pName,
            price:Number(price),
            desc:desc,
            Pid:1,
            isAvailable:Boolean(isAvailable),
            img:img
        }
        console.log(Product,"product")
    }
    return(
        <form className="row g-3" onSubmit={createProductHandler}>
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