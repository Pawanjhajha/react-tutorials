 import './app.css'
 //import the css file
 function App(){
//in react we have to use className for using css.becauseinternally this jsx convert to plain js and js class is a reserved keyword
    return (
       <>
       <h1 className="header">This is my Header</h1>
       <p className='paragraph'>this is my first css componet</p>
       </>
    )
}
export default App;
