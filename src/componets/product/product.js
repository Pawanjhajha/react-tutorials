let productCount=0;
function displayFormateProductCount(){
    return productCount>0?productCount:'zero';
}
function Product(){
return(
    <div>
        <button className="btn btn-primary">-</button>
        {/*<span>{productCount}</span>*/}
        {/* we the curly brekit to print and js expression value in jsx */}

        <span>{displayFormateProductCount()}</span>{/* we have to call the function*/}
        {/* we can write the jsx expression */}
        {/* <span>{10+5}</span> */}
        <button className="btn btn-primary">+</button>

        {/* attribute in html vs jsx*/}
        {/* in html ex:-<img src="./pwan.jgp"></img>
        in jsx ex:<img src={'./pawan.jpg'}></img> */}
        {/* we canot assign local path to src attribute we need to wrrap the path into curly brekit. and import the img if img not exits in publice folder but .it it good practice to keep imgae in public folder 
        so always keep image in public folder .so we dont need to import it we directly pass the path on src */}

        {/* use the inline css 
        in html <span style="padding:10px 2px;"></span>
        in jsx <span style={{padding:10px 2px}}></span>

        extrnal css automatically apply we need to only import extenal css file in componet */}

    </div>
)
}

export default Product;

// writing internal css

// let style={
//     fontSize:'5px'
// }
// function Product(){
//     return (
//         <div>
//             <span style={style}></span>
//         </div>
//     )
// }
// we use the curly brekit to print any thing in jsx