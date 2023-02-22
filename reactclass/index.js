import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Dis from './Discription';
// import Pro from './price.js';
// import Name from './brandname.js';
// import Butt from './Button';
import reportWebVitals from './reportWebVitals';
// import { Circle,Rectangle,Triangle,Cuboid, Square} from './shape.js';
// import { Circle1,Rectangle1,Triangle1,Cuboid1, Square1} from './shape3.js';
import  Square from './shape4';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Name/>
    <App />
    <Dis/>
    <Pro/>
    <Butt/> */}
    {/* <Circle />
    <Rectangle/>
    <Triangle/>
    <Cuboid/>
    <Square/>
    <Circle1 radius="5"/>
    <Rectangle1/>
    <Triangle1/>
    <Cuboid1 />
    <Square1/> */}
<Square le="2"></Square>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
