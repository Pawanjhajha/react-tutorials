
import { useState } from 'react';
import './App.css';
import CreateProduct from './componets/productList/createProduct';
import ProductList from './componets/productList/productList';
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
function App() {
  let [newProductList,updateNewProductList]=useState(productData);
// updateNewProductList(props.newProduct,...productData)
  function createProduct(product){
    console.log(product,"new Product")
    // console.log(product,"app.js")
    // updateNewProduct(product)
    updateNewProductList([product,...newProductList])
  }
  return (
   <>
   <ProductList newProduct={newProductList}></ProductList>
   <CreateProduct createProduct={createProduct}></CreateProduct>
   </>
  );
}

export default App;
