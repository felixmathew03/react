import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const stl={color:"white",backgroundColor:"black"}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <h1 style={stl} className='h1'>FELIX</h1>
 <div className='mark'>
 <label htmlFor='mark'>Mark:</label>
 <input id='mark'/>
 </div>
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
