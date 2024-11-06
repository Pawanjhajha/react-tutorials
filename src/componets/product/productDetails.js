function ProductDetails(props){
    console.log(props)
    return(
        <>
         <span className={props.cssClass}>{props.isAvailable?'Available':'UnAvailable'}</span>
        </>
    )
}
export default ProductDetails;