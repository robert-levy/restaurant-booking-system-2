import Restaurant from "../Restaurant";
import { ActionTypes } from "./dataActions";
const reducer = (state, action) => {
    let restaurant = new Restaurant();
    // let updatedState: Partial<State> = {}; or ErrorResponse
    let updatedState;
    switch (action.type) {
        case ActionTypes.CREATE_RESTAURANT:
            return {
                ...state,
                ...action.payload,
            };
        case ActionTypes.MAKE_BOOKING:
            updatedState = restaurant.makeBooking(state, action.payload);
            if ("errorMessage" in updatedState) {
                const { errorMessage } = updatedState;
                return {
                    ...state,
                    errorMessage,
                };
            }
            return updatedState;
        case ActionTypes.CHANGE_SEATING_STATUS:
            const { type, spaceNumber, newStatus } = action.payload;
            const seatingState = type === "tables" ? state.tables : state.bar;
            updatedState = restaurant.changeSeatingStatus(seatingState, {
                spaceNumber,
                newStatus,
            });
            return {
                ...state,
                [type]: updatedState,
            };
        case ActionTypes.ACKNOWLEDGE_ERROR:
            updatedState = { ...state };
            delete updatedState.errorMessage;
            return {
                ...updatedState,
            };
        case ActionTypes.ACKNOWLEDGE_SUCCESS:
            updatedState = { ...state };
            delete updatedState.successMessage;
            return {
                ...updatedState,
            };
        default:
            return state;
    }
};
export default reducer;
