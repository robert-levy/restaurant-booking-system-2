// import Restraurant from "./Restraurant";

// var tables = require("./RestaurantTables.json");
// var bar = require("./RestaurantBar.json");

// let restaurant = new Restraurant("branch-1", tables, bar);
// restaurant.bookTable({
//   totalPersons: 2,
// });

// restaurant.bookBarSeat();
// console.log(restaurant.branch)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

