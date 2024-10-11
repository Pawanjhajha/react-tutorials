 function App(){
    //usually we can`t write html in js file. so we have to write jsx .if we want to write html in js file then we have to wraap the html into duble quotes("")
    //babel will convert jsx onto plain js.because the browser dont understand the jsx
    
    // const plainJs=document.createElement("<h1>")
    // console.log(plainJs)
    // return plainJs;

    //advantage of jsx 
    //1.jsx give the advantage to create uI with html
    //2. in jsx we can write the expresion on html ex. return <h1>This is my age:{15+10}</h1>,
    // const message="pawan"
    // return <h1>hello mr:{message}</h1>
    return (
        <>
        <h1>Hello</h1>
        <p>Pawan</p>
        </>
    )
}
export default App;
