import { useState } from 'react';
import './product.css';
function ProductList(props){
    console.log(props.newProduct,"newProudtista")
// let [newProductList,updateNewProductList]=useState(productData);
// updateNewProductList(props.newProduct,...productData)
if(props.newProduct.length===0){
    return<h3>No Product avaliable</h3>
}

return(
    <>
    {props.newProduct?.map((product,key)=>(
        <div>
              <h6>{product?.id}</h6>
       <h1>{product?.name}</h1>
       <p>{product?.desc}</p>
       <span className='badge bg-success' >{product?.isAvailable?'Available':'UnAvailable'}</span> 
       <h6 className='font-weight-bold my-2' style={{marginRight:30}}>{product.price}</h6>
       </div>
    ))}
    </>
)
}
export default ProductList;