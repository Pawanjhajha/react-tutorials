function Product(){
    // return(
    //     <>
    //     <h1>All Products</h1>
    //     </>
    // )
    // return <h1>All products</h1> <p>byy</p> this will give the error because behind the scean react.createElement() can create one element at a time 
    //so solution of it we need to wrap the more than element into parent container ex. <div>,<>(fragemnet),<span>,now react.createElement() now the create <div> element .
    //and div child element also created

    //and when we return more then one line we should warap in pranthises (())

    return (<div>
        <h1>all proudcts</h1>
        <p>this is paragraph</p>
    </div>)
}

export default Product;