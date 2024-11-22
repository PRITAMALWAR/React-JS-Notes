

let {useState} = React;

function App() {

    console.log("Click Button")

    const [count, setCount] = useState(0); // Initialize state with 0

    return (
      <div>
        <p>Current count: {count}</p>
        <button onClick={() => setCount(count + 5)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    );
  
  
  
}


let root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)