// import './product.css'

import ProductDetails from "./productDetails";

function Product(props){
let badgeClass='badge-margin-left-40 badge ';
badgeClass +=props.isAvailable?'bg-success':'bg-danger';
return(
    <div>
        <h6>{props.id}</h6>
       <h1>{props.name}</h1>
       <p>{props.desc}</p>
       {/* <span className={badgeClass}>{props.isAvailable?'Available':'UnAvailable'}</span> */}
       <ProductDetails isAvailable={props.isAvailable} cssClass={badgeClass}>
       </ProductDetails>
    </div>
)
}

export default Product;