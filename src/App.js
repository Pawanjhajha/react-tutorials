
import { useState } from 'react';
import './App.css';
import CreateProduct from './componets/productList/createProduct';
import ProductList from './componets/productList/productList';
import FilterProduct from './componets/filterProduct/filterProduct';
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
  let [filterTextVale,updateFilterTextValue]=useState('All');
  let filterProduct=newProductList.filter((product)=>{
    if(filterTextVale==='available'){
      return product.isAvailable===true;
    }else if(filterTextVale==='unAvailable'){
      return product.isAvailable===false;
    }else{
      return product;
    }
  })
// updateNewProductList(props.newProduct,...productData)
  function createProduct(product){
    console.log(product,"new Product")
    // console.log(product,"app.js")
    // updateNewProduct(product)
    updateNewProductList([product,...newProductList])
  }
  function onfilterValueChange(filterValue){
    console.log(filterValue,"filetValue in app.js")
    updateFilterTextValue(filterValue);
  }
  return (
   <>
   <ProductList newProduct={filterProduct}></ProductList>
   <CreateProduct createProduct={createProduct}></CreateProduct>
   <FilterProduct filterChanged={onfilterValueChange}></FilterProduct>
   </>
  );
}

export default App;
