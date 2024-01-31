import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useSate/CounterApp';
// import { CounterWithCustomHook } from './01-useSate/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
)
