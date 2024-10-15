 import './app.css'
import Product from './componets/product/product';
 function App(){
    return (
      <div className='container'>
         <div className='row'>
            <div className='col-lg-8 mx-auto'>
               {/* mx-auto means margin form x-x auto*/}
               <Product></Product>
            </div>
         </div>
      </div>
    )
}
export default App;
