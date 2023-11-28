//2)Function based Component
import React, { useState } from 'react';

const Question2 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const add = () => setResult(num1 + num2);
  const sub = () => setResult(num1 - num2);
  const mult = () => setResult(num1 * num2);
  const division = () => {setResult(num1/num2)  };
  const css ={
    color : 'yellow',
    fontSize : '20px',
    fontFamily : 'poppins'
}

const text ={
    marginRight : '10px',
    marginTop : '10px',
}


  return (
    
    <div>
      <h2 style={css}> Function Based Component</h2>
      <input type="text" style={text} value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="text" style={text} value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <br />
      <button  onClick={add}>Addition</button>
      <button  onClick={sub}>Subtraction</button>
      <button  onClick={mult}>Multiplication</button>
      <button  onClick={division}>Division</button>
      <br />
      <h3>Result: {result}</h3>
    </div>
  );
};

export default Question2;
