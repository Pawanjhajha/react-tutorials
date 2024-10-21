import './product.css'

function Product(props){
let badgeClass='badge-margin-left-40 badge ';
badgeClass +=props.isAvailable?'bg-success':'bg-danger';
return(
    <div>
        <h6>{props.id}</h6>
       <h1>{props.name}</h1>
       <p>{props.desc}</p>
       <span className={badgeClass}>{props.isAvailable?'Available':'UnAvailable'}</span>
    </div>
)
}

export default Product;