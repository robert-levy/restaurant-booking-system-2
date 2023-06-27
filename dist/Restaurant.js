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
        if (seatsRequired === 1) {
            //TODO: I DONT NEED TO CHECK THIS. COULD JUST INCLUDE SEARCH WITH THE TABLES + BAR SEATS
            // Try book bar seat for single person
            var updatedBarState = this.bookBarSeat(state.bar);
            if (isErrorResponse(updatedBarState)) {
                var errorMessage = updatedBarState.errorMessage;
                return { errorMessage: errorMessage };
            }
            return __assign(__assign({}, state), { bar: updatedBarState });
        }
        // Book table
        var updatedState = this.bookTable(state, seatsRequired);
        if (isErrorResponse(updatedState === null || updatedState === void 0 ? void 0 : updatedState.errorMessage)) {
            var errorMessage = updatedState.errorMessage;
            return { errorMessage: errorMessage };
        }
        return updatedState;
    };
    Restaurant.prototype.bookTable = function (state, seatsRequired) {
        var updatedTablesState = __spreadArray([], state.tables, true);
        // check not all tables are taken
        if (this.isTablesFullyBooked(updatedTablesState)) {
            return { errorMessage: "All tables fully booked" };
        }
        // (tables should be sorted in order of number of seats, so first response will be the viable
        // table with the smallest amount of seats for the group)
        var availableTable = updatedTablesState.find(function (table) {
            return table.availability === "available" && table.seats >= seatsRequired;
        });
        if (availableTable) {
            availableTable.availability = Availability.Unavailable;
            return __assign(__assign({}, state), { tables: updatedTablesState, successMessage: "Successfully booked table ".concat(availableTable.tableNumber) });
        }
        // If seatsRequired < total number of seats left , offer bar seats (for now just error not enough tables for booking)
        if (seatsRequired > this.totalTableSeats(updatedTablesState)) {
            return { errorMessage: "Not enough tables to fulfill booking" };
        }
        // No one table large enough available, either merge tables or offer wait time
        return {
            errorMessage: "No single table can fulfill booking. Either use multiple tables with custom booking or offer waiting time til next available table",
        };
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
            // this conditional runs for every table or seat in the array
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
