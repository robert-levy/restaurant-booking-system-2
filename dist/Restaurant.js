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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Availability, } from "./interfaces/interfaces";
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
        var updatedTablesState = __spreadArray([], tablesState, true);
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
            tableToChange.availability = Availability.Unavailable;
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
        tableToBook.availability = Availability.Unavailable;
        seatsRequired -= largestAvailableTable.seats;
        console.log("new seatsRequired: ", seatsRequired);
        return this.bookTable(updatedTablesState, seatsRequired);
    };
    Restaurant.prototype.bookBarSeat = function (barState) {
        var updatedBarState = __spreadArray([], barState, true);
        var seatToChange = updatedBarState.find(function (barSeat) { return barSeat.availability === "available"; });
        if (seatToChange) {
            seatToChange.availability = Availability.Unavailable;
            return updatedBarState;
        }
        // No barSeat available
        return { errorMessage: "No bar seats available" };
    };
    Restaurant.prototype.changeSeatingStatus = function (seatingState, _a) {
        var spaceNumber = _a.spaceNumber, newStatus = _a.newStatus;
        var updatedSeatingState = __spreadArray([], seatingState, true);
        //@ts-ignore
        var foundSeating = updatedSeatingState.find(function (space) {
            if (isRestaurantTable(space)) {
                return space.tableNumber === spaceNumber;
            }
            else {
                // must be barSeat
                return space.barSeatNumber === spaceNumber;
            }
        });
        if (foundSeating) {
            foundSeating.availability = newStatus; // change to it takes parameter 'available','reserved', 'out-of-order'
        }
        return updatedSeatingState;
    };
    Restaurant.prototype.makeBarSeatAvailable = function (bar, barSeatNumber) {
        var updatedBarState = __spreadArray([], bar, true);
        var foundBarSeat = updatedBarState.find(function (barSeat) { return barSeat.barSeatNumber === barSeatNumber; });
        if (foundBarSeat) {
            foundBarSeat.availability = Availability.Available;
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
// generalize this to be checkSeatingType()
function isRestaurantTable(space) {
    return space.tableNumber !== undefined;
}
