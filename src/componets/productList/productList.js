import './product.css';
function ProductList(props){
    console.log(props.newProduct,"newProudt")
    let productData=[
   {
      pid:1,
      name:'product 1',
      des:'descrtiopiton 1',
      isAvailable:true
   },
   {
      pid:2,
      name:'product 2',
      des:'descrtiopiton 2',
      isAvailable:true
   },
   {
      pid:3,
      name:'product 3',
      des:'descrtiopiton 3',
      isAvailable:true
   },
   {
      pid:4,
      name:'product 4',
      des:'descrtiopiton 4',
      isAvailable:false
   }
]

return(
    <>
    {productData.map((product)=>(
        <div>
              <h6>{product.id}</h6>
       <h1>{product.name}</h1>
       <p>{product.desc}</p>
       <span className='badge bg-success' >{product.isAvailable?'Available':'UnAvailable'}</span> 
       </div>
    ))}
    </>
)
}
export default ProductList;