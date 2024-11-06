 import './app.css'
import Product from './componets/product/product';
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
 function App(){
    return (
      <div className='container'>
         <div className='row'>
            <div className='col-lg-8 mx-auto'>
               {/* <Product id={productData[0].pid} name={productData[0].name} desc={productData[0].des} isAvailable={productData[0].isAvailable}></Product>
               <hr></hr>
               <Product id={productData[1].pid} name={productData[1].name} desc={productData[1].des} isAvailable={productData[1].isAvailable} ></Product>
               <hr></hr>
               <Product id={productData[2].pid} name={productData[2].name} desc={productData[2].des} isAvailable={productData[2].isAvailable}></Product>
               <hr></hr>
               <Product  id={productData[3].pid} name={productData[3].name} desc={productData[3].des} isAvailable={productData[3].isAvailable}></Product> */}
               <Product></Product>
            </div>
         </div>
      </div>
    )
}
export default App;
