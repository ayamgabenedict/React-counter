
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from "./components/Counter.component"


const container= document.querySelector('#root')
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);


