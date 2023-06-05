export var initialState = {
    bar: [],
    tables: [],
};
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["CREATE_RESTAURANT"] = "CREATE_RESTAURANT";
    ActionTypes["MAKE_BOOKING"] = "MAKE_BOOKING";
    ActionTypes["MAKE_TABLE_AVAILABLE"] = "MAKE_TABLE_AVAILABLE";
    ActionTypes["ACKNOWLEDGE_ERROR"] = "ACKNOWLEDGE_ERROR";
})(ActionTypes || (ActionTypes = {}));
/// Actions
export var createRestaurant = function (initState) { return ({
    type: ActionTypes.CREATE_RESTAURANT,
    payload: initState,
}); };
export var makeBooking = function (totalPersons, personsWithDisability) { return ({
    type: ActionTypes.MAKE_BOOKING,
    payload: {
        totalPersons: totalPersons,
        personsWithDisability: personsWithDisability,
    },
}); };
export var makeTableAvailable = function (tableNumber) { return ({
    type: ActionTypes.MAKE_TABLE_AVAILABLE,
    payload: tableNumber,
}); };
export var acknowledgeError = function () { return ({
    type: ActionTypes.ACKNOWLEDGE_ERROR
}); };
