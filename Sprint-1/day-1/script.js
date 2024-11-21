{/* <div>
    <div>

    </div>
</div> */}

// JS and XML


// Single page application

// components == functions

// function add(){
//        return 1+2
//}
// function

// navbar => This is navbar => h1

// content => this is content => h2

// footer  => this is footer => h3

// div{
//     font-style : sans-serif;
// }

function Navbar(){
    return (
        <div>
            <h1 >This is Navbar</h1>
            <button>Click me</button>
        </div>
        
    )
}

function Content(){
    let arr = ["apple" , "grapes" , "melon" , "mango" , "banana"]
    return(
       <>
            <h2 className="">This is content</h2>
            <ul>
                {
                   arr.map((ele , i)=>{
                         return (
                            <li key={i} >{ ele }</li>
                         )
                   })
                }
            </ul>
        </>
    )
}

// {}  => Interpolation

// Dry => Don't repeat yourself

function Footer(){
     return(
        <h3>This is footer</h3>
     )
}

// what is react fragment => 1hr => 3days => 7days => 14days => 28days => 4months

function App(){
    return (
        <>
        <Navbar/>
        <Content/>
        <Footer/>
        </>
    )
}


// components
// App()  === <h1>Hello world!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)



// getElementById

// querySelector


// [2 , 3 , 4 , 5]
//  0   1   2   3   4


// arr.splice()
// arr.shift()

// let obj = { b:2}


// Declarative vs Impritive prog.
// React is a library but if we include all the features => works like a framework
// React is a SPA (single page application)
// ReactDOM.createRoot(identify root).render(component)
// components vs function => return HTML  => single element => wrapping them in a parent tag => react fragment => <React.Fragment> , <>
// return <h1>  </h1> => JS intepolation
// CDN Links => react , reactDOM , babel


// JSX   => babel (Transpiles) => JS

// render lists => mapping different elements 

// any layout



let flag = true

let App = ()=>{
    return (<h1>{ flag ? "hello world" : "bye world" }</h1>)  // conditional rendering
}

root.render(App())