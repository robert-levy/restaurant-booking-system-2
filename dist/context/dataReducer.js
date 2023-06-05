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
import Restaurant from "../Restaurant";
import { ActionTypes } from "./dataActions";
var reducer = function (state, action) {
    var restaurant = new Restaurant();
    // let updatedState: Partial<State> = {}; or ErrorResponse
    var updatedState;
    switch (action.type) {
        case ActionTypes.CREATE_RESTAURANT:
            return __assign(__assign({}, state), action.payload);
        case ActionTypes.MAKE_BOOKING:
            updatedState = restaurant.makeBooking(state, action.payload);
            console.log(updatedState);
            if ("errorMessage" in updatedState) {
                console.log("inside");
                var errorMessage = updatedState.errorMessage;
                return __assign(__assign({}, state), { errorMessage: errorMessage });
            }
            return __assign({}, updatedState);
        case ActionTypes.MAKE_TABLE_AVAILABLE:
            updatedState = restaurant.makeTableAvailable(state.tables, action.payload);
            return __assign(__assign({}, state), { tables: updatedState });
        case ActionTypes.ACKNOWLEDGE_ERROR:
            updatedState = __assign({}, state);
            delete updatedState.errorMessage;
            return __assign({}, updatedState);
        default:
            return state;
    }
};
export default reducer;
