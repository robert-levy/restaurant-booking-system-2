"use strict";
exports.__esModule = true;
exports.makeBarSeatAvailable = exports.makeTableAvailable = exports.bookBarSeat = exports.bookTable = exports.initRestaurantBarState = exports.initRestaurantTableState = void 0;
var initRestaurantTableState = function () {
    var RestaurantTablesJson = require('./RestaurantTables.json');
    // let RestaurantTablesState = new Array<IRestaurantTable>(...RestaurantTablesJson) //spead operator won't work, complains im under es5
    var RestaurantTablesState = RestaurantTablesJson.map(function (data) { return data; });
    return RestaurantTablesState;
};
exports.initRestaurantTableState = initRestaurantTableState;
var initRestaurantBarState = function () {
    var RestaurantBarJson = require('./RestaurantBar.json');
    var RestaurantBarState = RestaurantBarJson.map(function (data) { return data; });
    return RestaurantBarState;
};
exports.initRestaurantBarState = initRestaurantBarState;
// init state
var RestaurantTablesState = exports.initRestaurantTableState().sort(function (a, b) { return a.seats - b.seats; });
var RestaurantBarState = exports.initRestaurantBarState();
console.log(RestaurantBarState);
var bookTable = function (_a) {
    var totalPersons = _a.totalPersons, _b = _a.personsWithDisability, personsWithDisability = _b === void 0 ? 0 : _b;
    // step 1: check how many seats are required. People with disabilities need two seats worth of space. Singles should use the bar.
    var seatsRequired = personsWithDisability === 0 ? totalPersons : totalPersons + personsWithDisability;
    // if request is a single person with no disability, find bar seat instead
    if (totalPersons === 1 && !personsWithDisability) {
        var barSeat = exports.bookBarSeat();
        console.log("global bar state after booking a single person: " + JSON.stringify(RestaurantBarState));
        return barSeat;
    }
    // step 2: search our state to find the next available table with the required number of seats, and return i
    var availableTable = RestaurantTablesState.find(function (table) { return table.availability && table.seats >= seatsRequired; });
    if (availableTable) {
        // set the table object within our state to have availability: false. Atm this effects both global state obj and retured obj
        availableTable.availability = false;
        console.log("Global state after found table: " + JSON.stringify(RestaurantTablesState));
        console.log("return table object once found table : " + JSON.stringify(availableTable));
        return availableTable;
    }
    // otherwise no table found
    return {
        errorMsg: 'No spaces available for required spaces right now'
    };
};
exports.bookTable = bookTable;
var bookBarSeat = function () {
    // look through RestaurantBarState, find free barSeat and return, else return error
    var barSeat = RestaurantBarState.find(function (barSeat) { return barSeat.availability; });
    if (barSeat) {
        barSeat.availability = false;
        return barSeat;
    }
    return {
        errorMsg: 'No spaces available for required spaces right now'
    };
};
exports.bookBarSeat = bookBarSeat;
var makeTableAvailable = function (availableTable) {
    var foundTable = RestaurantTablesState.find(function (table) { return JSON.stringify(table) === JSON.stringify(availableTable); });
    if (foundTable) {
        foundTable.availability = true;
    }
    console.log("global state after table:" + (foundTable === null || foundTable === void 0 ? void 0 : foundTable.tableNumber) + " made available again", RestaurantTablesState);
};
exports.makeTableAvailable = makeTableAvailable;
var makeBarSeatAvailable = function (availableBarSeat) {
    var foundBarSeat = RestaurantBarState.find(function (barSeat) { return JSON.stringify(barSeat) === JSON.stringify(availableBarSeat); });
    if (foundBarSeat) {
        foundBarSeat.availability = true;
    }
    console.log("global state after bar seat:" + (foundBarSeat === null || foundBarSeat === void 0 ? void 0 : foundBarSeat.barSeatNumber) + " made available again", RestaurantBarState);
};
exports.makeBarSeatAvailable = makeBarSeatAvailable;
// book table
exports.bookTable({ totalPersons: 2 });
exports.bookTable({ totalPersons: 2 });
exports.bookTable({ totalPersons: 6 });
exports.bookTable({ totalPersons: 2, personsWithDisability: 2 });
exports.makeTableAvailable({
    tableNumber: 2,
    seats: 2,
    availability: false
});
exports.bookTable({ totalPersons: 1 });
exports.makeBarSeatAvailable({
    barSeatNumber: 1,
    availability: false
});
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
