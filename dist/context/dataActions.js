export var initialState = {
    bar: [],
    tables: [],
};
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["CREATE_RESTAURANT"] = "CREATE_RESTAURANT";
    ActionTypes["MAKE_BOOKING"] = "MAKE_BOOKING";
    ActionTypes["CHANGE_SEATING_STATUS"] = "CHANGE_SEATING_STATUS";
    ActionTypes["ACKNOWLEDGE_ERROR"] = "ACKNOWLEDGE_ERROR";
    ActionTypes["ACKNOWLEDGE_SUCCESS"] = "ACKNOWLEDGE_SUCCESS";
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
export var changeSeatingStatus = function (spaceNumber, type, newStatus) { return ({
    type: ActionTypes.CHANGE_SEATING_STATUS,
    payload: { spaceNumber: spaceNumber, type: type, newStatus: newStatus },
}); };
export var acknowledgeError = function () { return ({
    type: ActionTypes.ACKNOWLEDGE_ERROR
}); };
export var acknowledgeSuccess = function () { return ({
    type: ActionTypes.ACKNOWLEDGE_SUCCESS
}); };
