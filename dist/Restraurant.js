var Restaurant = /** @class */ (function () {
    function Restaurant(branch, tables, bar) {
        this._branch = branch;
        this.tables = tables;
        this.bar = bar;
        console.log('Initialized branch: ' + this.branch);
        console.log(this.tables);
        console.log(this.bar);
    }
    Object.defineProperty(Restaurant.prototype, "branch", {
        get: function () {
            return this._branch;
        },
        set: function (branch) {
            this._branch = branch;
        },
        enumerable: false,
        configurable: true
    });
    Restaurant.prototype.bookTable = function (_a) {
        var totalPersons = _a.totalPersons, _b = _a.personsWithDisability, personsWithDisability = _b === void 0 ? 0 : _b;
        // step 1: check how many seats are required. People with disabilities need two seats worth of space. Singles should use the bar.
        var seatsRequired = personsWithDisability === 0
            ? totalPersons
            : totalPersons + personsWithDisability;
        // if request is a single person with no disability, find bar seat instead
        if (totalPersons === 1 && !personsWithDisability) {
            var barSeat = this.bookBarSeat();
            console.log("global bar state after booking a single person: " + JSON.stringify(this.bar));
            return barSeat;
        }
        /* TODO: If more seats than than max size table required, give two tables
        * - have function that works out how many tables of what size and recursively get tables
        * - aviableTable below would have to check an array, as booking could contain multiple tables
        */
        // step 2: search our state to find the next available table with the required number of seats, and return i
        var availableTable = this.tables.find(function (table) { return table.availability && table.seats >= seatsRequired; });
        if (availableTable) {
            // set the table object within our state to have availability: false. Atm this effects both global state obj and retured obj
            availableTable.availability = false;
            console.log("Global state after found table: " + JSON.stringify(this.tables));
            console.log("return table object once found table : " + JSON.stringify(availableTable));
            return availableTable;
        }
        // otherwise no table found
        this.throwError({ errorMsg: "No spaces available for required spaces right now" });
        return {
            errorMsg: "No spaces available for required spaces right now",
        };
    };
    Restaurant.prototype.bookBarSeat = function () {
        // look through RestaurantBarState, find free barSeat and return, else return error
        var barSeat = this.bar.find(function (barSeat) { return barSeat.availability; });
        if (barSeat) {
            barSeat.availability = false;
            console.log("Global state after found bar seat: " + JSON.stringify(this.bar));
            console.log("return barSeat object once found bar seat : " + JSON.stringify(barSeat));
            return barSeat;
        }
        this.throwError({ errorMsg: "No spaces available for required spaces right now" });
        return {
            errorMsg: "No spaces available for required spaces right now",
        };
    };
    Restaurant.prototype.findTables = function (seatsRequired) {
        // determine how many tables we need given seats required and avaiable tables
        // options:
        //  - split the number in two or 3 until groups fit tables
        //  - keep filling each biggest available table, but might have 1 person on their own
        return true;
    };
    Restaurant.prototype.makeTableAvailable = function (availableTable) {
        var foundTable = this.tables.find(function (table) { return JSON.stringify(table) === JSON.stringify(availableTable); });
        if (foundTable) {
            foundTable.availability = true;
        }
        console.log("global state after table:" + (foundTable === null || foundTable === void 0 ? void 0 : foundTable.tableNumber) + " made available again", this.tables);
    };
    Restaurant.prototype.makeBarSeatAvailable = function (availableBarSeat) {
        var foundBarSeat = this.bar.find(function (barSeat) { return JSON.stringify(barSeat) === JSON.stringify(availableBarSeat); });
        if (foundBarSeat) {
            foundBarSeat.availability = true;
        }
        console.log("global state after bar seat:" + (foundBarSeat === null || foundBarSeat === void 0 ? void 0 : foundBarSeat.barSeatNumber) + " made available again", this.bar);
    };
    Restaurant.prototype.getLargestAvailableTableSize = function () {
        return this.tables.reduce(function (maxSeats, currentTable) {
            return Math.max(maxSeats, currentTable.seats);
        }, 0);
    };
    Restaurant.prototype.throwError = function (errorObj) {
        console.log("Error occured: " + errorObj.errorMsg);
    };
    return Restaurant;
}());
export default Restaurant;
