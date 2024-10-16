import './product.css'
let isAvailable='Avdfailable';
//add two class on one element
let badgeClass='badge-margin-left-40 badge ';
// badgeClass += isAvailable==='Available'?'bg-success':'bg-danger'
console.log(badgeClass)
function Product(){
return(
    <div>
        <span className={badgeClass}>{isAvailable}</span>
    </div>
)
}

export default Product;