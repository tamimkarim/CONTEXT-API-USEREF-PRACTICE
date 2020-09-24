import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext(); 


function App() {
  const [count , setCount] = useState(0);

  return (
    <CategoryContext.Provider value={count}>
      <p>Count value : {count} </p>
      <Header count={count} setCount={setCount}></Header>
      <Home></Home>
      <Shipment></Shipment>

    </CategoryContext.Provider>
  );
}

export default App;
