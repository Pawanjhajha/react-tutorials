
import { useState } from 'react';
import './App.css';
import CreateProduct from './componets/productList/createProduct';
import ProductList from './componets/productList/productList';

function App() {
  let[newProduct,updateNewProduct]=useState(null)
  function createProduct(product){
    console.log(product,"app.js")
    updateNewProduct(product)
  }
  return (
   <>
   <ProductList newProduct={newProduct}></ProductList>
   <CreateProduct createProduct={createProduct}></CreateProduct>
   </>
  );
}

export default App;
