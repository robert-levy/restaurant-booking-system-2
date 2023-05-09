"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// import Restraurant from "./Restraurant";
// var tables = require("./RestaurantTables.json");
// var bar = require("./RestaurantBar.json");
// let restaurant = new Restraurant("branch-1", tables, bar);
// restaurant.bookTable({
//   totalPersons: 2,
// });
// restaurant.bookBarSeat();
// console.log(restaurant.branch)
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
var App_1 = __importDefault(require("./components/App"));
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(jsx_runtime_1.jsx(react_1.default.StrictMode, { children: jsx_runtime_1.jsx(App_1.default, {}, void 0) }, void 0));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1.default();
