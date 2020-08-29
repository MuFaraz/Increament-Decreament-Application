import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [num, setnum] = useState(0);

  const Increament = (event) => {
    setnum(num+1);
  }
  const Decreament = (event) => {
    if(num>0){
      setnum(num-1)
    }
    
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={Increament}>Inc</button>
            <button onClick={Decreament}>Dec</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
