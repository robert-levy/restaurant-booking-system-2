var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var Restaurant = /** @class */ (function () {
    function Restaurant() {
        this.totalTableSeats = function (tables) {
            return tables.reduce(function (totalSeats, table) {
                return table.availability === "available"
                    ? totalSeats + table.seats
                    : totalSeats;
            }, 0);
        };
    }
    Restaurant.prototype.makeBooking = function (state, _a) {
        var totalPersons = _a.totalPersons, _b = _a.personsWithDisability, personsWithDisability = _b === void 0 ? 0 : _b;
        var seatsRequired = personsWithDisability === 0
            ? totalPersons
            : totalPersons + personsWithDisability;
        if (seatsRequired === 1) { //TODO: I DONT NEED TO CHECK THIS. COULD JUST INCLUDE SEARCH WITH THE TABLES + BAR SEATS
            // Try book bar seat for single person
            var updatedBarState = this.bookBarSeat(state.bar);
            if (isErrorResponse(updatedBarState)) {
                var errorMessage = updatedBarState.errorMessage;
                return { errorMessage: errorMessage };
            }
            return __assign(__assign({}, state), { bar: updatedBarState });
        }
        // Book table
        var updatedTablesState = this.bookTable(state.tables, seatsRequired);
        if (isErrorResponse(updatedTablesState)) {
            var errorMessage = updatedTablesState.errorMessage;
            return { errorMessage: errorMessage };
        }
        return __assign(__assign({}, state), { tables: updatedTablesState });
    };
    Restaurant.prototype.bookTable = function (tablesState, seatsRequired) {
        var updatedTablesState = __spreadArray([], tablesState);
        // check not all tables are taken
        if (this.isTablesFullyBooked(updatedTablesState)) {
            return { errorMessage: "All tables fully booked" };
        }
        // find if there is a table that satifies the whole group
        // (tables should be sorted in order of number of seats, so first response will be the viable
        // table with the smallest amount of seats for the group)
        var tableToChange = updatedTablesState.find(function (table) {
            return table.availability === "available" && table.seats >= seatsRequired;
        });
        if (tableToChange) {
            tableToChange.availability = "unavailable";
            return updatedTablesState;
        }
        // If seatsRequired < total number of seats left , offer bar seats (for now just error not enough tables for booking)
        if (seatsRequired > this.totalTableSeats(updatedTablesState)) {
            return { errorMessage: "Not enough tables to fulfill booking" };
        }
        // No table big enough to fit everyone, split them between tables
        // Default behaviour: Find biggest table and assign that, subract seats number from seats Required,
        // call bookTable again to either find a table or just provide the largest and recursive call again
        var initialValue = updatedTablesState.find(function (table) { return table.availability === "available"; });
        var largestAvailableTable = updatedTablesState.reduce(function (maxSeatsTable, currentTable) {
            if ((!maxSeatsTable || currentTable.seats > maxSeatsTable.seats) &&
                currentTable.availability === "available") {
                return currentTable;
            }
            return maxSeatsTable;
        }, initialValue // type assertion (we check for any undefined above)
        );
        var tableToBook = updatedTablesState.find(function (table) { return table.tableNumber === largestAvailableTable.tableNumber; }); // book table
        tableToBook.availability = "unavailable";
        seatsRequired -= largestAvailableTable.seats;
        console.log("new seatsRequired: ", seatsRequired);
        return this.bookTable(updatedTablesState, seatsRequired);
    };
    Restaurant.prototype.bookBarSeat = function (barState) {
        var updatedBarState = __spreadArray([], barState);
        var seatToChange = updatedBarState.find(function (barSeat) { return barSeat.availability === "available"; });
        if (seatToChange) {
            seatToChange.availability = "unavailable";
            return updatedBarState;
        }
        // No barSeat available
        return { errorMessage: "No bar seats available" };
    };
    Restaurant.prototype.makeTableAvailable = function (tables, tableNumber) {
        var updatedTablesState = __spreadArray([], tables);
        var foundTable = updatedTablesState.find(function (table) { return table.tableNumber === tableNumber; });
        if (foundTable) {
            foundTable.availability = "available";
        }
        return updatedTablesState;
    };
    Restaurant.prototype.makeBarSeatAvailable = function (bar, barSeatNumber) {
        var updatedBarState = __spreadArray([], bar);
        var foundBarSeat = updatedBarState.find(function (barSeat) { return barSeat.barSeatNumber === barSeatNumber; });
        if (foundBarSeat) {
            foundBarSeat.availability = "available";
        }
        return updatedBarState;
    };
    Restaurant.prototype.isTablesFullyBooked = function (tables) {
        return tables.every(function (table) { return table.availability !== "available"; });
    };
    return Restaurant;
}());
export default Restaurant;
function isErrorResponse(value) {
    return value && typeof value.errorMessage === "string";
}
