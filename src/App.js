import './App.css';
function App() {
  function showMsg(e){
    console.log(e,"event")
    alert('Button is clicked')
  }
  return (
    <>
    <button className='btn btn-primary' onClick={showMsg}>click me</button>
    </>
  );
}

export default App;
