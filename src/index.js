import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import PropertyList from './components/PropertyList';
import reportWebVitals from './reportWebVitals';
// import Units from './components/Units';
// import Messaging from './components/Messaging';
// import Navbar from './components/Navbar';
// import UnitDetails from './components/UnitDetails';
// import SidenavExample from './components/SidenavExample';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
