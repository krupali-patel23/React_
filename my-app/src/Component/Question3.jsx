//2) Take 2 buttons one for increment & another for decrement & take one default counter 0.

import React, { useState } from 'react';

const Question3 = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const css ={
    color : 'yellow',
    fontSize : '20px',
    fontFamily : 'poppins'
}

  return (
    <div>
      <h2 style={css}>Increment & Decrement</h2>
      <h3>Count: {count}</h3>
      <button   onClick={increment}>Increment</button>
      <button  onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Question3;
