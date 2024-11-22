

let CounterApp =()=> {

    let [count,setState] = React.useState(0)

    function updateFun(i){
        setState(count + i)

    }

    return(
        <>
        <button onClick={function () {updateFun(-1)}}>Dec</button>
        <h2>{count}</h2>
        <button onClick={() => updateFun(1)}>Inc</button>
        </>
    )
}


let App =() => {
  return (
    <>
      <CounterApp/>
    </>
   
  )
}




let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>) 