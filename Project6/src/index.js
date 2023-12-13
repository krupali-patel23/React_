import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Questions1 from './componet/questions1';
import Questions2 from './componet/questions2';
import Questions3 from './componet/questions3';
import Questions4 from './componet/questions4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Questions1 />
    <Questions2 />
    <Questions3 />
    <Questions4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
