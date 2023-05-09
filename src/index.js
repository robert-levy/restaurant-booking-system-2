"use strict";
exports.__esModule = true;
exports.Main = void 0;
var Restraurant_1 = require("./Restraurant");
var Main = function () {
    var tables = require('./RestaurantTables.json');
    var bar = require('./RestaurantBar.json');
    var restaurant = new Restraurant_1["default"]('branch-1', tables, bar);
    restaurant.bookTable({
        totalPersons: 2
    });
    restaurant
        .bookBarSeat();
};
exports.Main = Main;
exports.Main();
