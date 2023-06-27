export const initialState = {
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
export const createRestaurant = (initState) => ({
    type: ActionTypes.CREATE_RESTAURANT,
    payload: initState,
});
export const makeBooking = (totalPersons, personsWithDisability) => ({
    type: ActionTypes.MAKE_BOOKING,
    payload: {
        totalPersons,
        personsWithDisability,
    },
});
export const changeSeatingStatus = (spaceNumber, type, newStatus) => ({
    type: ActionTypes.CHANGE_SEATING_STATUS,
    payload: { spaceNumber, type, newStatus },
});
export const acknowledgeError = () => ({
    type: ActionTypes.ACKNOWLEDGE_ERROR
});
export const acknowledgeSuccess = () => ({
    type: ActionTypes.ACKNOWLEDGE_SUCCESS
});
