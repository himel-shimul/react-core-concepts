import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Razzak','bapparaz', 'Jafor', 'Salman', 'shuvo']
  const products = [
    {name: 'photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$06.99'},
    {name: 'Premium EI', price: '$249.99'}
  ]
  const nayokNames = nayoks.map(nayok => nayok);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done. thanks to himel shimul <code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd =><Product product={pd}></Product>)
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUsers(data));
  }, [])
  
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}



function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    margin: '10px',
    padding: '10px',
    color: 'black',
    backgroundColor: 'lightgray',
    height: 'auto',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  console.log(name, price)
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}


export default App;
